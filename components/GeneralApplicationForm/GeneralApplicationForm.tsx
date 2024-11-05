"use client";
import { UiAutoComplete, UiNumberInput, UiSelect, UiTextInput } from "@/lib";
import React, { FC, useEffect, useState } from "react";
// import NotAutomatedInsuranceProducts from "../pages/Home/Partials/InsurranceTypes/InsurranceTypes";
import { InsuranceItemType } from "@/utils/types";
import { useForm } from "@mantine/form";
// import { createStyles } from "@mantine/core";
import { InsurranceItems } from "@/utils/data";
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "@/utils/config/firebase";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group } from "@mantine/core";
// import { useI18n } from "@/locales/client";
import { DateInput } from "@mantine/dates";
const Fade = require("react-reveal/Fade");
import "dayjs/locale/tr";
import { usePathname, useSearchParams } from 'next/navigation'
import useTrans from "@/utils/hooks/useTrans";
import convertDateFormatForMobikob from "@/utils/helpers/formatDateForMobikob";
import { useRouter } from "next/router";
// const useStyles = createStyles((theme) => ({
//   input: {
//     background: "white",
//     borderRadius: "50px",
//     border: "none",
//     "&::placeholder": {
//       fontWeight: "lighter",
//     },
//   },
//   dropDown: {
//     height: "400px",
//     overflowY: "scroll",
//   },
// }));
const ApplicationForm: FC = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [activeInsuranceType, setActiveInsuranceType] = useState('');
  const [isSubmittedSuccessfully, setIsSubmittesSuccesfully] = useState<
    boolean | null
  >(false);
  const [isLoading, setIsLoading] = useState(false);
  const [provinceList, setProvinceList] = useState([]);
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()
  const form = useForm({
    initialValues: {
      ad: "",
      soyad: "",
      tc_or_pass_no: "",
      tel: "",
      typeOfInsurance: "",
      DateOfBirth: null,
      // province: undefined,
    },
    validate: {
      ad: (value) => (value?.length > 2 ? null : "adı çok kısa"),
      soyad: (value) => (value?.length > 2 ? null : "Soyadı çok kısa"),
      tc_or_pass_no: (value) =>
        value?.length > 5 ? null : "T.C/Passaport No. Hatalıdır",
      tel: (value) => {
        return value?.toString().length > 5 ? null : "Telefon numara hatalıdır";
      },
      typeOfInsurance: (value) =>
        value === "" ? "Lütfen bir ürün seçiniz" : null,
      DateOfBirth: (value: any) =>
        value instanceof Date ? null : "DOĞUM TARİHİ hatalıdır",

      // province: (value) => (value ? null : "Bu alan zorunludur"),
    },
  });

//   const { classes } = useStyles();
  const sendToMobikobCRM = async (e: Record<string, any>) => {
    // console.log('this is teh e form send to mobikob: ', e)
    // console.log('timestamp:', convertDateFormatForMobikob(e?.DateOfBirth))
    // const res = await fetch('https://livist-sigorta.mobikob.com/crm/crm_customer/api/', 
    const res = await fetch('https://mobikob.com/tenant/4765/crm/crm_customer/api/', 
    {
      method: "POST",
      headers: {
        "Authorization": `Basic ${Buffer.from('info@livist-sigorta.com:livist2018').toString('base64')}`,
        'Content-Type': 'application/json'  
      },
      body: JSON.stringify(
        {
          
            "name": e?.ad,
            "soyad": e?.soyad,
            "tckn": e?.tc_or_pass_no,
            "sigorta_urunu_": [
              e.typeOfInsurance
            ],
            "email": "",
            "phone": `${e?.tel}`,
            "address": e?.province,
            "card_type": "person",
            "crm_source": "65117cf5c7884c0023e4f618",
            "stage": "aday_musteri",
            "status": "pasif_musteri",
            "country": "Türkiye Cumhuriyet",
            "city": "İstanbul",
            "district": e?.province,
            "birth_date": convertDateFormatForMobikob(e?.DateOfBirth),
            "sozlesme": [],
            "company_owner": "Livist Website",
            "cust_owner": 0
           }
        

      )
    })
    const data = await res?.json()
    console.log('res: ', data)
  }

  const handleSubmit = async (e: Record<string, any>) => {
    setIsLoading(true);
    try {
      // console.log("this is the e : ", e);
      const ordersRef = doc(collection(db, "orders"));
      const data = {
        ...e,
        status: "beklenen",
        timestamp: serverTimestamp(),
      };
      await setDoc(ordersRef, data);
      // sendToMobikobCRM(e)
      form.reset();
      setIsSubmittesSuccesfully(true);
    } catch (e) {
      console.log(e);
      setIsSubmittesSuccesfully(false);
    }
    setIsLoading(false);
    open();
  };
  const handleError = () => {
    console.log("please fill all the values");
  };
  const t = useTrans();

  useEffect(() => {
    const getAndSetProvinces = async () => {
      const res = await fetch(
        "https://livist-723d3.uc.r.appspot.com/demir-hayat/getProvinceList"
      );
      const fetchedProvinces: any = await res.json();

      const structuredProvinceList = fetchedProvinces?.Result.map(
        (province: any) => ({
          cityId: province.cityId,
          value: province.cityName,
        })
      );
      setProvinceList(structuredProvinceList);
    };
    getAndSetProvinces();
  }, []);


  useEffect(() => {
    const params = router.query
    const productSlug = params?.productSlug
    const activeInsurranceType = window.location.href.split('#')[1]
    if(!productSlug) return
    setActiveInsuranceType(productSlug as string)
    form.values.typeOfInsurance = productSlug as string

  }, [pathname, searchParams]);


  const parseTheDate = (inputString: string) => {
    const normalizedInput = inputString.replace(/[^0-9]/g, '');

    if (normalizedInput.length !== 8) {
      // Input string must have exactly 8 characters (DDMMYYYY)
      return null;
    }

    const day = parseInt(normalizedInput.substring(0, 2), 10);
    const month = parseInt(normalizedInput.substring(2, 4), 10) - 1; // Months are 0-indexed
    const year = parseInt(normalizedInput.substring(4, 8), 10);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      // Invalid date components
      return null;
    }

    return new Date(year, month, day);
  }


  return (
    <Fade bottom>
      <div className="md:min-h-[306px] glassy-background rounded-[35px] pt-9 pb-[38px] font-semibold relative border border-white">
        <h3 className="text-primary text-lg text-center mb-5 font-normal">
          {t("BAŞVURU FORMU DOLDURUN")}
        </h3>
        {/* <h3 className='text-primary text-lg text-center mb-5 font-normal'>{t('HI THERE BROTHER')}</h3> */}
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-5 px-9 lg:px-16"
          onSubmit={form.onSubmit(
            (values) => handleSubmit(values),
            handleError
          )}
        >
          <UiTextInput
            placeholder={t("AD")}
            classNames={{
              input: '!rounded-[50px] !border-none bg-white',
              
            }}
            // label={"ad"}
            // value={values.ad}
            // onChange={handleChange}
            withAsterisk
            // error={() => error()}
            // {...formErrorHandling.getInputProps('PropertyTitle')}
            {...form.getInputProps("ad")}
          />
          <UiTextInput
            placeholder={t("SOYAD")}
            classNames={{
                input: '!rounded-[50px] !border-none bg-white',
            }}
            withAsterisk
            {...form.getInputProps("soyad")}
            className="light-place-holder"
          />
          <UiTextInput
            placeholder={t("TC VEYA PASAPORT NUMARASI")}
            classNames={{
                input: '!rounded-[50px] !border-none bg-white',
            }}
            withAsterisk
            {...form.getInputProps("tc_or_pass_no")}
          />
          <UiNumberInput
            placeholder={t("TELEFON NUMARASI")}
            classNames={{
                input: '!rounded-[50px] !border-none bg-white',
            }}
            withAsterisk
            hideControls
            {...form.getInputProps("tel")}
          />
          <UiSelect
            data={InsurranceItems}
            placeholder={t("SIGORTA ÜRÜNÜ SEÇIN")}
            classNames={{
                input: '!rounded-[50px] !border-none bg-white',
            }}
            withAsterisk
            {...form.getInputProps("typeOfInsurance")}
          />
          <DateInput
            valueFormat="DD/MM/YYYY"
            dateParser={(e) => parseTheDate(e)}
            placeholder={t("DOĞUM TARİHİ")}
            classNames={{
                input: '!rounded-[50px] !border-none bg-white',
            }}
            clearable
            locale="tr"
            {...form.getInputProps("DateOfBirth")}
          />

          {/* <UiAutoComplete
            data={provinceList}
            classNames={{
                input: 'rounded-[50px] border-none bg-white',
                dropdown: 'h-[400px] overflow-y-scroll',
            }}
            {...form.getInputProps("province")}
            placeholder={t("İL")}
            limit={80}
          /> */}

          <button
            type="submit"
            className={`bg-grass-green hover:bg-transparent hover:border border-grass-green hover:text-grass-green rounded-[50px] text-white py-2 transition-all col-span-2${
              isLoading ? "opacity-50" : ""
            }`}
            disabled={isLoading}
          >
            <span className="font-normal">{t("KAYIT")}</span>
          </button>
        </form>
        <Modal opened={opened} onClose={close} classNames={{root: 'z-[1001] relative'}}>
          {isSubmittedSuccessfully ? <SuccessMessage /> : <ErrorMessage />}
        </Modal>
      </div>
    </Fade>
  );
};

const SuccessMessage = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <h2 className="text-center text-lg font-semibold">
        Kayıdınız Başarılıyla Alınmıştır!
      </h2>
      <p className="text-center ">
        {" "}
        En kısa sürede sizinle iletişime geçegeğiz{" "}
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="2em"
        viewBox="0 0 512 512"
      >
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
      </svg>
    </div>
  );
};
const ErrorMessage = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <h2 className="text-center text-lg font-semibold">
        Bir Hata oluştorulmuştur!
      </h2>
      <p className="text-center">Lütfen daha sonra tekrar deneyin!</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="2em"
        viewBox="0 0 512 512"
      >
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
      </svg>
    </div>
  );
};

ApplicationForm.displayName = "ApplicationForm";

export default ApplicationForm;

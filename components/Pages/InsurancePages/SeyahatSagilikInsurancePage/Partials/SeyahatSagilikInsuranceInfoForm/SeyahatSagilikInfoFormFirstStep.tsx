import {
  PhoneInput,
  UiDateInput,
  UiNativeSelect,
  UiSelect,
  UiSwitch,
  UiTextInput,
  UiUseDisclosure,
  UiUseForm,
} from "@/lib";
import React, { FC, useEffect, useRef, useState } from "react";
import "dayjs/locale/tr";
// import { createStyles } from "@mantine/core";
import useTrans from "@/utils/hooks/useTrans";
import { useAuth } from "@/contexts/NestAuthContext";
import LoginModal from "@/components/LoginModal/LoginModal";
import { useSaglikTurizmStepsContext } from "@/contexts/InsuranceStepsContexts/SaglikTurizmInsuranceContext";
import { useSeyahatSaglikStepsContext } from "@/contexts/InsuranceStepsContexts/SehayatSagilikInsuranceContext";

interface SeyahatSagilikInfoFormFirstStepPropsType {
  handleNextStep: () => void;
  goToTheNextStep: () => void;
}

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

const yabanciSagilikDurations: { label: string; value: string }[] = [
  { value: "1", label: "1 Yıllık" },
  { value: "2", label: "2 Yıllık" },
];

const SeyahatSagilikInfoFormFirstStep: FC<
SeyahatSagilikInfoFormFirstStepPropsType
> = (props) => {
  const { handleNextStep, goToTheNextStep } = props;
  const { setStepsValidation, values, setValues, setStepsSubmitButtons } =
  useSeyahatSaglikStepsContext();
    const { user, setNumberSentForVarification, signUp, setIsVarificationNumberSent } = useAuth()
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");
  const [isPhoneInputValid, setIsPhoneInputValid] = useState(false);
  const [isPhoneInputTouched, setIsPhoneInputTouched] = useState(false);
  const t = useTrans();
  const firstStepButtonRef = useRef<HTMLButtonElement>(null)
  const form = UiUseForm({
    initialValues: {
      ownerIdNumber: '',
      ownerBirthDate: undefined,
      duration: '1',
      isTicariIletiContractAccepted: true,
      isKVKAccepted: false
    },
    validate: {
      ownerIdNumber: (value) =>
         value?.length < 2 ? "Kimlik Numarası Hatalıdır" : null,
      ownerBirthDate: (value: Date | null) =>
        value instanceof Date ? null : "Doğum Tarihi Hatalı",
      duration: () => null,
      isTicariIletiContractAccepted: (value) => value ? null : "Bu alan zorunludur",
        isKVKAccepted: value => value ? null : "Bu alan zorunludur"
      },

    validateInputOnBlur: true,
  });
  // these are for controlling login modal
  const [opened, { open, close }] = UiUseDisclosure(false);

  // const { classes } = useStyles();
  const areAllFormFieldsTouched = () => {
    // this filters out the form inputs that have a default value
    const fieldsToBeTouched = Object.keys(form.values).filter(
      // @ts-ignore
      (key) => form.values[key] == undefined || form.values[key] == false && form.values[key] == ''
    );
    console.log('these are the values to be touched : ',fieldsToBeTouched )
    // const areFieldsTouched = Object.keys(form.values).map((key) =>
    const areFieldsTouchedArray = fieldsToBeTouched.map((key) =>
      form.isTouched(key)
    );
    console.log('the checked values: ', areFieldsTouchedArray)
    const areFieldsTouched = areFieldsTouchedArray.every(
      (value) => value === true
    );
    return areFieldsTouched;
  };


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



  const handleSubmit = () => {
    setValues(prevState => ({...prevState, ...form.values}))
    console.log('user form handle submit:', user)
    // if user is not logged in send the sms code and on the next step show login form
    if(!user) {
      setNumberSentForVarification(values.phoneNo)
      signUp(values.phoneNo!)
        // const smsRes = fetch(`${process.env.NEXT_PUBLIC_PUBLIC_APIS_BASE_URL}Users/create-user`, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json"
        //   },
        //   body: JSON.stringify({
        //     phoneNo: values.phoneNo
        //   }
        //   )
        // })
        // console.log('this is the sms res: ', smsRes)
        setIsVarificationNumberSent(true)
        open()
        return
      }
      if(user){
       goToTheNextStep()
      }
    
  };

  const handleError = (e: any) => {
    console.log("form errors: ", e);
  };

  const handlePhoneNoValidation = (value: string, country: any) => {
    // Extract the local part of the phone number (excluding country code)
    if (!isPhoneInputTouched) return true;
    const localPart = value.slice(country.dialCode.length); // +1 to account for the space
    // Check if the local part matches the structure "5xx xxx xx xx"
    if (/^5\d{2}\d{3}\d{2}\d{2}$/.test(localPart)) {
      setIsPhoneInputValid(true);
      return true; // Valid phone number
    } else {
      setIsPhoneInputValid(false);
      return "Invalid phone number format"; // Invalid phone number
    }
  };

  useEffect(() => {
    console.log("form.values: ", form);
  }, [form.values]);

  useEffect(() => {
    // if (Object.keys(form.errors).length > 0) {
    //   setIsFirstStepValidated(true);
    // }else {
    //   setIsFirstStepValidated(false)
    // }
    console.log("form errors: ", form.errors);
    areAllFormFieldsTouched();
    const areThereAnyErrorsInForm = Object.keys(form.errors).length === 0;
    if (
      areAllFormFieldsTouched() &&
      areThereAnyErrorsInForm &&
      isPhoneInputValid
    ) {
      setStepsValidation((prevState) => ({
        ...prevState,
        isFirstStepValidated: true,
      }));
     
    } else {
      setStepsValidation((prevState) => ({
        ...prevState,
        isFirstStepValidated: false,
      }));
    }
  }, [form.errors]);



  useEffect(() => {
    setStepsSubmitButtons(prevState => ([...prevState, {id: 0, submitButtonRef: firstStepButtonRef}]))
  } ,[])

  return (
    <div className="flex flex-col items-center pt-4 lg:pt-[30px] px-5 md:px-[52px]">
      <div className="bg-accent w-[60px] h-[60px] rounded-full flex justify-center items-center">
        <span className="text-white font-extrabold text-4xl">1</span>
      </div>
      <p className="text-white text-base font-light my-4 lg:my-[30px]">
        Lütfen bilgileri doğru giriniz
      </p>
      <form onSubmit={form.onSubmit(handleSubmit, handleError)} className="w-full">
        <div className="flex flex-col gap-4">
          <UiTextInput
            placeholder="Kimlik Numarası"
            {...form.getInputProps("ownerIdNumber")}
            classNames={{ input: '!bg-white !rounded-[50px] !border-none' }}
          />
          <UiDateInput
            {...form.getInputProps("ownerBirthDate")}
            valueFormat="DD MMM YYYY"
            placeholder="Doğum Tarihiniz"
            clearable
            dateParser={(e) => parseTheDate(e)}
            locale="tr"
            classNames={{ input: '!bg-white !rounded-[50px] !border-none' }}
          />
          <PhoneInput
            value={values.phoneNo}
            onChange={(phone) => {
              setValues((prevState) => ({ ...prevState, phoneNo: phone }));
            }}
            country={"tr"}
            onlyCountries={["tr"]}
            placeholder="+90 (5xx) xxx xx xx"
            disableDropdown
            dropdownClass="!bg-white !rounded-[50px]"
            containerClass="!rounded-[50px]"
            inputClass="!w-full !rounded-[50px] !bg-white"
            buttonClass="!bg-white !rounded-l-[50px] hover:!rounded-l-[50px] "
            enableClickOutside
            isValid={(value, country: any) =>
              handlePhoneNoValidation(value, country)
            }
            onBlur={() => {
              setIsPhoneInputTouched(true);
            }}
          />
          {/* <UiNativeSelect
            data={yabanciSagilikDurations}
            placeholder={t("Poliçe Süresi")}
            classNames={{ input: '!bg-white !rounded-[50px] !border-none' }}
            {...form.getInputProps("duration")}
          /> */}
          <UiSwitch
            label="Ticari Elektronik ileti gönderilmesini onaylıyorum."
            defaultChecked
            {...form.getInputProps("isTicariIletiContractAccepted")}
            classNames={{
              label: "!text-white",
              root: "!col-span-2",
              track: `!border-0 ${
                form.values.isTicariIletiContractAccepted
                  ? "!bg-accent"
                  : "!bg-[#787880]"
              }`,
            }}
          />
          <UiSwitch
            label="Kullanım Sözleşmesi, Acente Yetki Belgesi, KVKK Politikası, ve Aydınlatma Metni ni okudum, onaylıyorum."
            {...form.getInputProps("isKVKAccepted")}
            classNames={{
              label: "!text-white",
              root: "!col-span-2",
              track: `!border-0 ${
                form.values.isKVKAccepted
                  ? "!bg-accent"
                  : "!bg-[#787880]"
              }`,
            }}
          />
        </div>
        <button type="submit" ref={firstStepButtonRef}></button>
      </form>
      {
        !user &&
        <LoginModal opened={opened} open={open} close={close} callback={goToTheNextStep}/>
      }
    </div>
  );
};

export default SeyahatSagilikInfoFormFirstStep;

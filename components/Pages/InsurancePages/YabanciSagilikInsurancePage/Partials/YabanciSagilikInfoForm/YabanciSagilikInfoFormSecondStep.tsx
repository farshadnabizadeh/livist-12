import { useYabanciSagilicStepsContext } from "@/contexts/InsuranceStepsContexts/YabanciSagilikInsuranceContext";
import {
  PhoneInput,
  UiDateInput,
  UiNativeSelect,
  UiSelect,
  UiSwitch,
  UiTextInput,
  UiUseForm,
} from "@/lib";
import React, { FC, useEffect, useRef, useState } from "react";
import "dayjs/locale/tr";
// import { createStyles } from "@mantine/core";
import useTrans from "@/utils/hooks/useTrans";
import { formatDate } from "@/utils/helpers";
import CountryInput from "@/components/CountryInput/CountryInput";

interface YabanciSagilikInfoFormSecondStepPropsType {
  handleNextStep: () => void;
  goToNextStep: () => void;

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

const genders: { label: string; value: string }[] = [
  { value: "K", label: "Kadın" },
  { value: "E", label: "Erkek" },
];

const YabanciSagilikInfoFormSecondStep: FC<
  YabanciSagilikInfoFormSecondStepPropsType
> = (props) => {
  const { handleNextStep, goToNextStep } = props;
  const { setStepsValidation, values, setValues, setStepsSubmitButtons } =
    useYabanciSagilicStepsContext();
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");
  const [isPhoneInputValid, setIsPhoneInputValid] = useState(false);
  const secondStepButtonRef = useRef<HTMLButtonElement>(null)
  const t = useTrans();
  const form = UiUseForm({
    initialValues: {
      ownerName: "",
      ownerSurname: "",
      ownerFatherName: "",
      ownerGenderId: undefined,
      startDate: undefined,
      ownerNationalityId: undefined,
    },
    validate: {
      ownerName: (value) => (value.length < 2 ? "Adı Hatalıdır" : null),
      ownerSurname: (value) => (value.length < 2 ? "Soyadı Hatalıdır" : null),
      // ownerPassportNumber: () => null,
      ownerFatherName: (value) =>
        value.length < 2 ? " Baba Adı Hatalıdır" : null,
      ownerGenderId: (value) => (value ? null : "Lütfen Bir Cinsiyet Seçin"),
      startDate: (value: Date | null) =>
        value instanceof Date ? null : "Başlangınc Tarihi Hatalı",
      ownerNationalityId: (value) => (value ? null : "Lütfen Bir Ülke Seçin"),
    },

    validateInputOnBlur: true,
  });
  // const { classes } = useStyles();
  const areAllFormFieldsTouched = () => {
    // this filters out the form inputs that have a default value
    const fieldsToBeTouched = Object.keys(form.values).filter(
      // @ts-ignore
      (key) => form.values[key] !== undefined
    );
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

  const handleSubmit = () => {
    goToNextStep()
  };

  const handleError = (e: any) => {
    console.log("form errors: ", e);
  };

  useEffect(() => {
    // console.log("form.values: ", form);
  }, [form.values]);

  useEffect(() => {
    // if (Object.keys(form.errors).length > 0) {
    //   setIsSecondStepValidated(true);
    // }else {
    //   setIsSecondStepValidated(false)
    // }
    areAllFormFieldsTouched();
    const areThereAnyErrorsInForm = Object.keys(form.errors).length === 0;
    console.log('this is the form in the second step: ', form)
    console.log('areAllFormFieldsTouched()', areAllFormFieldsTouched())
    if (areAllFormFieldsTouched() && areThereAnyErrorsInForm) {
      setStepsValidation((prevState) => ({
        ...prevState,
        isSecondStepValidated: true,
      }));
      setValues((prevState) => ({ ...prevState, ...form.values }));
    } else {
      setStepsValidation((prevState) => ({
        ...prevState,
        isSecondStepValidated: false,
      }));
    }
  }, [form.errors]);


  useEffect(() => {
    setStepsSubmitButtons(prevState => ([...prevState, {id: 1, submitButtonRef: secondStepButtonRef}]))
  } ,[])  


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
    <div className="flex flex-col items-center pt-4 lg:pt-[30px] px-5 md:px-[52px]">
      <div className="bg-accent w-[60px] h-[60px] rounded-full flex justify-center items-center">
        <span className="text-white font-extrabold text-4xl">2 </span>
      </div>
      <p className="text-white text-base font-light my-4 lg:my-[30px]">
        Kişisel bilgilerini giriniz
      </p>
      <form onSubmit={form.onSubmit(handleSubmit, handleError)} className="w-full">
        <div className="flex flex-col sm:grid grid-cols-1 sm:grid-cols-2 gap-4">
          <UiTextInput
            placeholder="Ad"
            {...form.getInputProps("ownerName")}
            classNames={{ input: "!bg-white !rounded-[50px] !border-none" }}
          />
          <UiTextInput
            placeholder="Soyad"
            {...form.getInputProps("ownerSurname")}
            classNames={{ input: "!bg-white !rounded-[50px] !border-none" }}
          />
          <UiTextInput
            placeholder={`${values.ownerPassportNumber}`}
            // {...form.getInputProps("ownerPassportNumber")}
            classNames={{ input: "!bg-white !rounded-[50px] !border-none" }}
            disabled
          />
          <UiDateInput
            // {...form.getInputProps("ownerBirthDate")}
            valueFormat="DD MMM YYYY"
            placeholder={`${formatDate(
              values.ownerBirthDate as unknown as string
            )}`}
            clearable
            locale="tr"
            classNames={{ input: "!bg-white !rounded-[50px] !border-none" }}
            disabled
          />
          <UiTextInput
            placeholder="Baba Adı"
            {...form.getInputProps("ownerFatherName")}
            classNames={{ input: "!bg-white !rounded-[50px] !border-none" }}
          />
          <UiSelect
            data={genders}
            placeholder={t("Cinsiyet")}
            classNames={{ input: "!bg-white !rounded-[50px] !border-none" }}
            {...form.getInputProps("ownerGenderId")}
          />

          <UiDateInput
            {...form.getInputProps("startDate")}
            valueFormat="DD MMM YYYY"
            placeholder={"Poliçe Başlangıç Tarihi"}
            clearable
            dateParser={(e) => parseTheDate(e)}
            locale="tr"
            classNames={{ input: "!bg-white !rounded-[50px] !border-none" }}
          />

          <CountryInput
            inputValidationProp={form.getInputProps("ownerNationalityId")}
          />
        <button type="submit" ref={secondStepButtonRef}></button>
        </div>
      </form>
    </div>
  );
};

export default YabanciSagilikInfoFormSecondStep;

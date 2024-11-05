import {
  PhoneInput,
  UiDateInput,
  UiNativeSelect,
  UiNumberInput,
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
import { useTamamlayiciStepsContext } from "@/contexts/InsuranceStepsContexts/TamamlayiciInsuranceContext";

interface TamamlayiciInfoFormSecondStepPropsType {
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



const TamamlayiciInfoFormSecondStep: FC<
  TamamlayiciInfoFormSecondStepPropsType
> = (props) => {
  const { handleNextStep, goToNextStep } = props;
  const { setStepsValidation, values, setValues, setStepsSubmitButtons } =
    useTamamlayiciStepsContext();
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");
  const [isPhoneInputValid, setIsPhoneInputValid] = useState(false);
  const t = useTrans();
  const secondStepButtonRef = useRef<HTMLButtonElement>(null)

  const form = UiUseForm({
    initialValues: {
      ownerName: "",
      ownerSurname: "",
      height: undefined,
      weight: undefined,
      ownerGenderId: undefined,
     
    },
    validate: {
      ownerName: (value) => (value.length < 2 ? "Adı Hatalıdır" : null),
      ownerSurname: (value) => (value.length < 2 ? "Soyadı Hatalıdır" : null),
      height: value => value ? null : "Lütfen Doğru Boyu Giriniz",
      weight: value => value ? null : "Lütfen Doğru Kiloyu Giriniz",
      ownerGenderId: (value) => (value ? null : "Lütfen Bir Cinsiyet Seçin"),
      
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

  return (
    <div className="flex flex-col items-center pt-[30px] px-[52px]">
      <div className="bg-accent w-[60px] h-[60px] rounded-full flex justify-center items-center">
        <span className="text-white font-extrabold text-4xl">2 </span>
      </div>
      <p className="text-white text-base font-light my-[30px]">
        Lütfen bilgileri doğru giriniz  
      </p>
      <form onSubmit={form.onSubmit(handleSubmit, handleError)} className="w-full">
        <div className="grid grid-cols-2 gap-4">
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
         
        <UiNumberInput 
          placeholder="Boy"
          {...form.getInputProps("height")}
          classNames={{ input: "!bg-white !rounded-[50px] !border-none" }}
          rightSection={<span></span>}

        />
        <UiNumberInput 
          placeholder="Kilo"
          {...form.getInputProps("weight")}
          classNames={{ input: "!bg-white !rounded-[50px] !border-none" }}
          rightSection={<span></span>}
        />
        <UiSelect
            data={genders}
            placeholder={t("Cinsiyet")}
            classNames={{ input: "!bg-white !rounded-[50px] !border-none" }}
            {...form.getInputProps("ownerGenderId")}
          />
          
        </div>
        <button type="submit" ref={secondStepButtonRef}></button>

      </form>
    </div>
  );
};

export default TamamlayiciInfoFormSecondStep;

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
import ProvinceInput from "@/components/ProvinceInput/ProvinceInput";
import DistrictInput from "@/components/DistrictInput/DistrictInput";
import { useSaglikTurizmStepsContext } from "@/contexts/InsuranceStepsContexts/SaglikTurizmInsuranceContext";
import { useSeyahatSaglikStepsContext } from "@/contexts/InsuranceStepsContexts/SehayatSagilikInsuranceContext";

interface SeyahatSagilikInfoFormThirdStepPropsType {
  handleNextStep: () => void;
  goToTheNextStep: () => void;
}


const SeyahatSagilikInfoFormThirdStep: FC<
SeyahatSagilikInfoFormThirdStepPropsType
> = (props) => {
  const { handleNextStep, goToTheNextStep } = props;
  const { setStepsValidation, values, setValues, setStepsSubmitButtons } =
  useSeyahatSaglikStepsContext();
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");
  const [isPhoneInputValid, setIsPhoneInputValid] = useState(false);
  const thirdSubmitButtonRef = useRef<HTMLButtonElement>(null)
  const t = useTrans();
  const form = UiUseForm({
    initialValues: {
      ownerCityId: undefined,
      ownerDistrictId: undefined,
      neighbourhood: "",
      street: "",
      buildingNo: "",
      doorNo: "",
    },
    validate: {
      ownerCityId: (value) => (value ? null : "Lütfen Bir Şehir Seçin"),
      ownerDistrictId: (value) => (value ? null : "Lütfen Bir İlçe Seçin"),
      neighbourhood: (value) => (value.length < 2 ? "Mahalle Hatalıdır" : null),
      street: (value) => (value.length < 2 ? "cadde Hatalıdır" : null),
      buildingNo: (value) => (value.length < 1 ? "Bina No Hatalıdır" : null),
      doorNo: (value) => (value.length < 1 ? "İç Kapı No Hatalıdır" : null),
    },

    validateInputOnBlur: true,
  });
  // const { classes } = useStyles();
  const areAllFormFieldsTouched = () => {
    // this filters out the form inputs that have a default value
    const fieldsToBeTouched = Object.keys(form.values).filter(
      // @ts-ignore
      (key) => form.values[key] !== undefined || form.values[key] !== ""
    );
    // const areFieldsTouched = Object.keys(form.values).map((key) =>
    const areFieldsTouchedArray = fieldsToBeTouched.map((key) =>
      form.isTouched(key)
    );
    const areFieldsTouched = areFieldsTouchedArray.every(
      (value) => value === true
    );
    return areFieldsTouched;
  };

  const handleSubmit = () => {
    goToTheNextStep()
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
    console.log("form errors: ", form.errors);
    areAllFormFieldsTouched();
    const areThereAnyErrorsInForm = Object.keys(form.errors).length === 0;
    if (areAllFormFieldsTouched() && areThereAnyErrorsInForm) {
      setStepsValidation((prevState) => ({
        ...prevState,
        isThirdStepValidated: true,
      }));
      console.log('this is the values of the third stap  ', form.values)
      setValues((prevState) => ({ ...prevState, ...form.values }));
    } else {
      setStepsValidation((prevState) => ({
        ...prevState,
        isThirdStepValidated: false,
      }));
    }
  }, [form.errors]);



  useEffect(() => {
    setStepsSubmitButtons(prevState => ([...prevState, {id: 2, submitButtonRef: thirdSubmitButtonRef}]))
  } ,[])


  return (
    <div className="flex flex-col items-center pt-[30px] px-[52px]">
      <div className="bg-accent w-[60px] h-[60px] rounded-full flex justify-center items-center">
        <span className="text-white font-extrabold text-4xl">3</span>
      </div>
      <p className="text-white text-base font-light my-[30px]">
        Adres Bilgilerini yazın
      </p>
      <form onSubmit={form.onSubmit(handleSubmit, handleError)} className="w-full">
        <div className="grid grid-cols-2 gap-4">
          <ProvinceInput
            inputValidationProp={form.getInputProps("ownerCityId")}
          />
          <DistrictInput
            inputValidationProp={form.getInputProps("ownerDistrictId")}
            cityId={form.values.ownerCityId}
            // disabled={!form.values.ownerCityId}
          />
          <UiTextInput
            placeholder="Mahalle"
            {...form.getInputProps("neighbourhood")}
            classNames={{ input: "!bg-white !rounded-[50px] !border-none" }}
          />
          <UiTextInput
            placeholder="Cadde / Sokak"
            {...form.getInputProps("street")}
            classNames={{ input: "!bg-white !rounded-[50px] !border-none" }}
          />
          <UiTextInput
            placeholder="Bina No"
            {...form.getInputProps("buildingNo")}
            classNames={{ input: "!bg-white !rounded-[50px] !border-none" }}
          />
          <UiTextInput
            placeholder="İç Kapı No"
            {...form.getInputProps("doorNo")}
            classNames={{ input: "!bg-white !rounded-[50px] !border-none" }}
          />
        </div>
        <button type="submit" ref={thirdSubmitButtonRef}></button>

      </form>
    </div>
  );
};

export default SeyahatSagilikInfoFormThirdStep;

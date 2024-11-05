import { UiTextInput, UiUseForm } from "@/lib";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";

import { usePaymentInputs } from "react-payment-inputs";
// TODO: if the proposal is paid or does not exist handle it 
const PaymentForm: FC = () => {
  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } =
    usePaymentInputs();
  const [values, setValues] = useState({
    cardOwnerName: undefined,
    expirationDate: undefined,
    cvv: undefined,
  });
  const router = useRouter()
  const handleChange = (e: any) => {
    const target = e.target.name;
    const value = e.target.value;
    setValues((prevState) => ({ ...prevState, [target]: value }));
  };
  const mantineForm = UiUseForm({
    initialValues: {
      nameSurname: "",
    },
    validate: {
      nameSurname: (value) =>
        typeof value == "string" && value?.length < 2
          ? "İsim soyisim çok kısa"
          : null,
    },
    validateInputOnBlur: true,
  });


  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e)
    const query = JSON.stringify({
      cardOwnerName: mantineForm.values.nameSurname,
      cardNumber: values.cardOwnerName,
      expirationDate: values.expirationDate,
      cvv: values.cvv,
      installment: 1,
      proposal: router?.query?.proposalId
    })
    console.log('this is the query:', query)
    // TODO: add token to this reques
    router.push(`${process.env.NEXT_PUBLIC_PAYMENT_URL}/payment.php?token=something&params=${query}`)

    
  }


  useEffect(() => {
    console.log("values changed: ", values);
  }, [values]);


// TODO: implement this for button
  const isDisabled = () => {}

  return (
    <div className="w-full max-w-[339px] flex flex-col justify-center items-center space-y-4 ">
      <form className="w-full flex flex-col justify-center items-center space-y-4 relative pb-8" action={'http://192.168.1.100:3001'} onSubmit={handleSubmit}>
        <UiTextInput
          {...mantineForm.getInputProps("nameSurname")}
          placeholder="Kart Üzerindeki İsim Soyisim"
          classNames={{
            root: "w-full h-[40px] border border-[#CACACA] rounded-[64px] outline-none focus:border-[#545454] transition-all flex items-center overflow-hidden",
            wrapper: '!w-full !border-none',
            input: '!px-[22px] !border-none placeholder:!text-base placeholder:!text-[#9ca3af] !text-black !text-base font-normal !font-vazirmatn placeholder:!translate-y-[3px]',
            error: '!hidden',
          }}
         
        />
        <input
          {...getCardNumberProps({ onChange: handleChange })}
          value={values.cardOwnerName}
          className="w-full h-[40px] border border-[#CACACA] rounded-[64px] px-[22px] outline-none focus:border-[#545454] transition-all flex items-center  placeholder:translate-y-[1px]"
          placeholder="Kart Numarası"
          name="cardOwnerName"
        />
        <input
          {...getExpiryDateProps({ onChange: handleChange })}
          value={values.expirationDate}
          className="w-full h-[40px] border border-[#CACACA] rounded-[64px] px-[22px] outline-none focus:border-[#545454] transition-all flex items-center placeholder:translate-y-[1px]"
          placeholder="Son Kullanım Tarihi"
          name="expirationDate"
        />
        <input
          {...getCVCProps({ onChange: handleChange })}
          value={values.cvv}
          className="w-full h-[40px] border border-[#CACACA] rounded-[64px] px-[22px] outline-none focus:border-[#545454] transition-all flex items-center placeholder:translate-y-[1px]"
          placeholder="CVV"
          name="cvv"
        />
        {meta.isTouched && meta.error && <span className="test-sm text-red-500">Error: {meta.error}</span>}
        {mantineForm?.errors?.nameSurname && <span className="test-sm text-red-500">{mantineForm?.errors.nameSurname}</span>}
          {/* <input type="hidden"  name="proposal" value={router.query.proposalid}/> */}
        <button type="submit" className="w-full pt-[18px] pb-[16px] bg-grass-green text-white hover:bg-white hover:text-grass-green rounded-[64px] border border-grass-green transition-all text-base"> Öde </button>
      </form>
    </div>
  );
};

PaymentForm.displayName = "PaymentForm";

export default PaymentForm;

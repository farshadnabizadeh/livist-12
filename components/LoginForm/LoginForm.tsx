import React, { useState, FC } from 'react'
import { useAuth } from '@/contexts/NestAuthContext'
import { PhoneInput, UiNumberInput } from '@/lib/index'
import KeyIcon from '@/assets/images/icons/keys-icon.svg'
import MessageIcon from '@/assets/images/icons/message-icon.svg'
import FingerPrintIcon from '@/assets/images/icons/fingerprint-icon.svg'
import LoginIcon from '@/assets/images/icons/login-icon.svg'
interface LoginFormType {
  callback?: () => void;
}


const LoginForm: FC<LoginFormType> = (props) => {

  const { callback } = props;

  const { numberSentForVarification, setNumberSentForVarification, isVarificationNumberSent, setIsVarificationNumberSent, signUp, loading } = useAuth()
  const [varificationCode, setVarificationCode] = useState<number | string>()
  const [] = useState()
  const { signIn, user } = useAuth()
  const [isPhoneInputTouched, setIsPhoneInputTouched] = useState(false);
  const [isPhoneInputValid, setIsPhoneInputValid] = useState(false);

  const handleClick = async () => {
    const sigInRes = await signIn(numberSentForVarification!.toString(), varificationCode!, undefined, callback)
    if (user) {
      callback && callback()
    }
  }

  const sendCode = async () => {
    if (!numberSentForVarification) return
    const signUpRes = await signUp(numberSentForVarification)
    console.log('this is the signUpRes form the loginFrom')
  }

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


  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='max-w-[281px]'>

        <div className='w-full flex justify-center mb-1'>
          <FingerPrintIcon />
        </div>
        <h4 className='font-semibold text-lg text-accent text-center mb-4'>Giriş</h4>

        {/* <p className='text-center'> ' {numberSentForVarification} ' </p>
      <p className='text-center'> Numaraya gönderilen onay kodunu girin </p> */}
        <PhoneInput
          value={numberSentForVarification}
          onChange={(phone) => {
            setIsVarificationNumberSent(false)
            setNumberSentForVarification(phone);
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
          disabled={isVarificationNumberSent}
        />
        <UiNumberInput
          placeholder="Onay Kodu"
          //   {...form.getInputProps("height")}
          classNames={{ input: "!bg-white !rounded-[50px] mt-4" }}
          rightSection={<span></span>}
          leftSection={<KeyIcon />}
          value={varificationCode}
          onChange={setVarificationCode}
          disabled={!numberSentForVarification}
        />
        {isVarificationNumberSent && <button onClick={handleClick} disabled={loading} className='w-full rounded-[55px] h-[35px] text-white text-base bg-grass-green hover:bg-white hover:text-grass-green border border-grass-green flex justify-between items-center px-3 mt-[6px] transition-all'>
          <LoginIcon />
          <span className='translate-y-[2px]'>
            Giriş yap
          </span>
          <span></span>
        </button>
        }
        {
          !isVarificationNumberSent && <button onClick={sendCode} disabled={loading} className='w-full rounded-[55px] h-[35px] text-white text-base bg-grass-green hover:bg-white hover:text-grass-green border border-grass-green flex justify-between items-center px-3 mt-[6px] transition-all'>
            <MessageIcon className='w-[15px] h-[15px]' />
            <span className='translate-y-[2px]'>
              Kodu gönder
            </span>
            <span></span>
          </button>
        }
      </div>
      {
        isVarificationNumberSent && <div className='w-[474px] h-[45px] flex items-center justify-center bg-grass-green text-white mt-[57px] rounded-[55px]'>
          <span className='inline-block translate-y-[2px]'>Şifreniz SMS ile gönderilmiştir.</span>
        </div>
      }
    </div>
  )
}

export default LoginForm
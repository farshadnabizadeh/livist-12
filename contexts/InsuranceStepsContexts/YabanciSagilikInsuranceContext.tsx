import { formatDateWithSlashes, removeCountryCode } from "@/utils/helpers";
import { DemirAPIResponse } from "@/utils/types";
import YabanciSagilikStepsValuesType from "@/utils/types/InsuranceStepsTypes/YabanciSagilikStepsValuesType/YabanciSagilikStepsValuesType";
import { useRouter } from "next/router";
import React, {
  FC,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useAuth } from "../NestAuthContext";


interface StepsSubmitButtonsObjectType {
  id: number,
  submitButtonRef: React.RefObject<HTMLButtonElement>
}

interface YabanciSagilikInsuranceStepsContextType {
  values: YabanciSagilikStepsValuesType;
  setValues: React.Dispatch<
    React.SetStateAction<YabanciSagilikStepsValuesType | undefined>
  >;
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  stepsValidatetion: boolean;
  setStepsValidation: React.Dispatch<React.SetStateAction<{}>>;
  canGoToTheNextStep: boolean;
  createProposals: () => DemirAPIResponse;
  stepsSubmitButtons: StepsSubmitButtonsObjectType[];
  setStepsSubmitButtons: React.Dispatch<React.SetStateAction<StepsSubmitButtonsObjectType[]>>
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const initialValues: YabanciSagilikStepsValuesType = {
  // IDPassNumber: '',
  // birthDate: new Date(),
  // phoneNo: '',
  // insuranceDuration: 1,
};

export const YabanciSagilikInsuranceStepsContext =
  // @ts-ignore
  React.createContext<YabanciSagilikInsuranceStepsContextType>({
    values: initialValues,
  });

export const useYabanciSagilicStepsContext = () => {
  return useContext(YabanciSagilikInsuranceStepsContext);
};

type YabanciSagilikInsuranceStepsProviderType = {
  children: ReactNode;
  yabanciSagilikProduct: any;
  yabanciSagilikPesinPlan: any;
};


export const YabanciSagilikInsuranceStepsProvider: FC<
  YabanciSagilikInsuranceStepsProviderType
> = ({ children, yabanciSagilikPesinPlan, yabanciSagilikProduct }) => {
  const [values, setValues] =
    useState<YabanciSagilikStepsValuesType>(initialValues);
  const [activeStep, setActiveStep] = useState(0);
  const [stepsValidation, setStepsValidation] = useState({});
  const [canGoToTheNextStep, setCanGoToTheNextStep] = useState(false);
  const [stepsSubmitButtons, setStepsSubmitButtons] = useState<StepsSubmitButtonsObjectType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  // const [canGoToTheNextStep, setCanGoToTheNextStep ] = useState(false)
  const router = useRouter()
  const { user } = useAuth()
  const { locale } = router
  useEffect(() => {
    console.log("stepsValidatoin", stepsValidation);
    const isCurrentStepValidated = Object.values(stepsValidation)[activeStep];

    console.log("isCurrentStepValidated", isCurrentStepValidated);
    if (isCurrentStepValidated) {
      console.log("the setCanGoToTheNextStep is set to true");
      setCanGoToTheNextStep(true);
    } else {
      setCanGoToTheNextStep(false);
    }
  }, [activeStep, stepsValidation]);

  useEffect(() => {
    // console.log('yabanciSagilikProduct', yabanciSagilikProduct),
    // console.log('yabanciSagilikPesinPlan', yabanciSagilikPesinPlan)
    setValues((prevValue) => ({
      ...prevValue,
      yabanciSagilikPesinPlan,
      yabanciSagilikProduct,
    }));
  }, [yabanciSagilikPesinPlan, yabanciSagilikProduct]);

  useEffect(() => {
    console.log("values changed: ", values);
  }, [values]);

  const createProposals = async () => {
    setIsLoading(true)
    const DemirHayatCreateProposal = async () => {

      let reusltedProposalIds = []

      // once for normal yabanci saglik sigortasi
      // once for vip yabanci sagilik sigortasi
      const createPsoposalEndpointRequestBody = {
        branchId: "S",
        productId: "SES",
        productTarifId: "72",
        productVersionId: "012",
        paymentPlanId: "9629",
        paymentTypeId: "H",
        startDate: formatDateWithSlashes(values.startDate as unknown as string),
        ownerIdNumber: values.ownerIdNumber,
        ownerNationalityId: values.ownerNationalityId,
        ownerPassportNumber: values.ownerPassportNumber,
        ownerTaxNumber: null,
        ownerTaxOffice: null,
        ownerTypeId: "G",
        ownerName: values.ownerName,
        ownerSurname: values.ownerSurname,
        ownerFatherName: values.ownerFatherName,
        ownerBirthDate: formatDateWithSlashes(
          values.ownerBirthDate as unknown as string
        ),
        ownerGenderId: values.ownerGenderId,
        ownerAddress: "adress",
        ownerDistrictId: "",
        ownerCityId: "",
        ownerPhone: removeCountryCode(values.phoneNo!),
        ownerGsm: removeCountryCode(values.phoneNo!),
        ownerEmail: "",
        ownerProfessionId: "1",
        ownerBirthPlace: values.ownerNationalityId,

      };
      console.log(
        "this is the createPsoposalEndpointRequestBody: ",
        createPsoposalEndpointRequestBody
      );
      console.log('this is the user vbefore calling emir-hayat/createProp', user)
      // this call is for normal yabanci saglik sigortasi
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_PUBLIC_APIS_BASE_URL}demir-hayat/createProposal`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user?.access_token}`
          },
          body: JSON.stringify(createPsoposalEndpointRequestBody),
        }
      );
      const createProposalEndpointdata = await res.json();


      const createProposalPersonEndpointRequestBody = {
        branchId: "S",
        proposalId: createProposalEndpointdata.Result,
        idNumber: values.ownerIdNumber,
        nationalityId: values.ownerNationalityId,
        taxNumber: null,
        passportNumber: values.ownerPassportNumber,
        name: values.ownerName,
        surname: values.ownerSurname,
        birthDate: formatDateWithSlashes(
          values.ownerBirthDate as unknown as string
        ),
        birthDateUnformatted: values.ownerBirthDate,
        genderId: values.ownerGenderId,
        relationTypeId: "F",
        motherName: null,
        fatherName: values.ownerFatherName,
        birthPlace: values.ownerNationalityId,
        professionId: 1,
        planNo: 36,
        iks: null,
        startDate: values.startDate,
        productId: "SES",
        productTarifId: "72",
        productVersionId: "012",
      };

      const createProposalPersonEndpointResponse = await fetch(
        `${process.env.NEXT_PUBLIC_PUBLIC_APIS_BASE_URL}demir-hayat/createProposalPerson`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user?.access_token}`
          },
          body: JSON.stringify(createProposalPersonEndpointRequestBody),
        }
      );
      const createProposalPersonEndpointData =
        await createProposalPersonEndpointResponse.json();
      console.log(
        "this is the createProposalPersonEndpointData",
        createProposalPersonEndpointData
      );
      if (createProposalPersonEndpointResponse.status !== 201) {
        setIsLoading(false)

        throw new Error('createProposalPersonEndpointResponse was not successful')
      }
















      reusltedProposalIds.push(createProposalEndpointdata.Result)

      // this call is for VIP yabanci saglik sigortasi
      const VIPcreatePsoposalRequestBody = {
        branchId: "S",
        productId: "SES",
        productTarifId: "135",
        productVersionId: "002",
        paymentPlanId: "8040",
        paymentTypeId: "H",
        startDate: formatDateWithSlashes(values.startDate as unknown as string),
        ownerIdNumber: values.ownerIdNumber,
        ownerNationalityId: values.ownerNationalityId,
        ownerPassportNumber: values.ownerPassportNumber,
        ownerTaxNumber: null,
        ownerTaxOffice: null,
        ownerTypeId: "G",
        ownerName: values.ownerName,
        ownerSurname: values.ownerSurname,
        ownerFatherName: values.ownerFatherName,
        ownerBirthDate: formatDateWithSlashes(
          values.ownerBirthDate as unknown as string
        ),
        ownerGenderId: values.ownerGenderId,
        ownerAddress: "adress",
        ownerDistrictId: "",
        ownerCityId: "",
        ownerPhone: removeCountryCode(values.phoneNo!),
        ownerGsm: removeCountryCode(values.phoneNo!),
        ownerEmail: "",
        ownerProfessionId: "1",
        ownerBirthPlace: values.ownerNationalityId,

      };
      const VIPyabanciRes = await fetch(
        `${process.env.NEXT_PUBLIC_PUBLIC_APIS_BASE_URL}demir-hayat/createProposal`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user?.access_token}`
          },
          body: JSON.stringify(VIPcreatePsoposalRequestBody),
        }
      );
      const createProposalVIPData = await VIPyabanciRes.json();
      reusltedProposalIds.push(createProposalVIPData.Result)

      const VIPYabancicreateProposalPersonRequestBody = {
        branchId: "S",
        proposalId: createProposalVIPData.Result,
        idNumber: values.ownerIdNumber ?? '',
        nationalityId: values.ownerNationalityId,
        taxNumber: null,
        passportNumber: values.ownerPassportNumber,
        name: values.ownerName,
        surname: values.ownerSurname,
        birthDate: formatDateWithSlashes(
          values.ownerBirthDate as unknown as string
        ),
        birthDateUnformatted: values.ownerBirthDate,
        genderId: values.ownerGenderId,
        relationTypeId: "F",
        motherName: null,
        fatherName: values.ownerFatherName,
        birthPlace: values.ownerNationalityId,
        professionId: 1,
        planNo: 36,
        iks: null,
        startDate: values.startDate,
        productId: "SES",
        productTarifId: "135",
        productVersionId: "002",
      };

      const VIPYabancicreateProposalPersonResponse = await fetch(
        `${process.env.NEXT_PUBLIC_PUBLIC_APIS_BASE_URL}demir-hayat/createProposalPerson`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user?.access_token}`
          },
          body: JSON.stringify(VIPYabancicreateProposalPersonRequestBody),
        }
      );
      const VIPYabancicreateProposalPersonData =
        await VIPYabancicreateProposalPersonResponse.json();
      console.log(
        "this is the createProposalPersonEndpointData",
        createProposalPersonEndpointData
      );
      if (createProposalPersonEndpointResponse.status !== 201) {
        setIsLoading(false)

        throw new Error('createProposalPersonEndpointResponse was not successful for more information look open console')
      }





      setIsLoading(false)
      router.push(`/${locale}/prices/${reusltedProposalIds}`)

      async function getPricesData() {
        const getPricesRes = await fetch(
          `${process.env.NEXT_PUBLIC_PUBLIC_APIS_BASE_URL}demir-hayat/getProposalPremiumParams`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${user?.access_token}`
            },
            body: JSON.stringify({
              branchId: "S",
              proposalId: createProposalEndpointdata.Result,
            }),
          }
        );

        const pricesData = await getPricesRes.json();

        console.log("getPricesData", pricesData);
        return pricesData

      }
      // const getPricesInterval = setInterval(async () => {
      //   const prices = await getPricesData()
      //   console.log('this is the prices form setINterval: ', prices)
      //   if (prices.IsSuccess) {
      //     clearPricesIntercal()
      //   }
      // }, 1000)

      // function clearPricesIntercal() {
      //   clearInterval(getPricesInterval)
      // }
      return createProposalPersonEndpointData;
    };
    DemirHayatCreateProposal();
  };




  const value: any = useMemo(
    () => ({
      values,
      setValues,
      activeStep,
      setActiveStep,
      stepsValidation,
      setStepsValidation,
      canGoToTheNextStep,
      createProposals,
      stepsSubmitButtons,
      setStepsSubmitButtons,
      isLoading,
      setIsLoading
    }),
    [
      values,
      setValues,
      activeStep,
      setActiveStep,
      stepsValidation,
      setStepsValidation,
      canGoToTheNextStep,
      createProposals,
      stepsSubmitButtons,
      setStepsSubmitButtons,
      isLoading,
      setIsLoading
    ]
  );
  return (
    <YabanciSagilikInsuranceStepsContext.Provider value={value}>
      {children}
    </YabanciSagilikInsuranceStepsContext.Provider>
  );
};

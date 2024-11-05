import { formatDateWithSlashes } from "@/utils/helpers";
import { DemirAPIResponse } from "@/utils/types";
import { getPlanListReType } from "@/utils/types/getPlanListReType";
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

interface TamamlayiciInsuranceStepsContextType {
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
}

const initialValues: YabanciSagilikStepsValuesType = {
  // IDPassNumber: '',
  // birthDate: new Date(),
  // phoneNo: '',
  // insuranceDuration: 1,
};

export const TamamlayiciInsuranceStepsContext =
  // @ts-ignore
  React.createContext<TamamlayiciInsuranceStepsContextType>({
    values: initialValues,
  });

export const useTamamlayiciStepsContext = () => {
  return useContext(TamamlayiciInsuranceStepsContext);
};

type TamamlayiciInsuranceStepsProviderType = {
  children: ReactNode;
  TamamlayiciProduct: any;
  TamamlayiciPesinPlan: any;
};

export const TamamlayiciInsuranceStepsProvider: FC<
  TamamlayiciInsuranceStepsProviderType
> = ({ children, TamamlayiciPesinPlan, TamamlayiciProduct }) => {
  const [values, setValues] =
    useState<YabanciSagilikStepsValuesType>(initialValues);
  const [activeStep, setActiveStep] = useState(0);
  const [stepsValidation, setStepsValidation] = useState({});
  const [canGoToTheNextStep, setCanGoToTheNextStep] = useState(false);
  const [stepsSubmitButtons, setStepsSubmitButtons] = useState<StepsSubmitButtonsObjectType[]>([])
  const router = useRouter()
  const { locale } = router
  const { user } = useAuth()

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
    // console.log('TamamlayiciProduct', TamamlayiciProduct),
    // console.log('TamamlayiciPesinPlan', TamamlayiciPesinPlan)
    setValues((prevValue) => ({
      ...prevValue,
      TamamlayiciPesinPlan,
      TamamlayiciProduct,
    }));
  }, [TamamlayiciPesinPlan, TamamlayiciProduct]);

  useEffect(() => {
    console.log("values changed: ", values);
  }, [values]);

  const createProposals = async () => {
    const planIdsRes = await fetch(`${process.env.NEXT_PUBLIC_PUBLIC_APIS_BASE_URL}demir-hayat/getPlanList/103`)
    const planIds: getPlanListReType = await planIdsRes.json()

    const DemirHayatCreateProposal = async () => {
      const createPsoposalEndpointRequestBody = {
        branchId: "S",
        productId: "TAMSS",
        productTarifId: "100",
        productVersionId: "005",
        paymentPlanId: "9560",
        paymentTypeId: "S",
        startDate: formatDateWithSlashes(new Date() as unknown as string),
        ownerIdNumber: values.ownerIdNumber,
        ownerNationalityId: values.ownerNationalityId,
        // ownerPassportNumber: values.ownerPassportNumber,
        ownerTaxNumber: null,
        ownerTaxOffice: null,
        ownerTypeId: "G",
        ownerName: values.ownerName,
        ownerSurname: values.ownerSurname,
        ownerFatherName: values?.ownerFatherName,
        ownerBirthDate: formatDateWithSlashes(
          values.ownerBirthDate as unknown as string
        ),
        ownerGenderId: values.ownerGenderId,
        ownerAddress: "",
        ownerDistrictId: "",
        ownerCityId: "",
        ownerPhone: values.phoneNo,
        ownerGsm: values.phoneNo,
        ownerEmail: "",
        ownerProfessionId: "",
        ownerBirthPlace: values.ownerNationalityId,
        //     "branchId": "S",
        // "productId": "SES",
        // "productTarifId": "72",
        // "productVersionId": "012",
        // "paymentPlanId": "9629",
        // "paymentTypeId": "H",
        // "startDate": "25/09/2023",
        // "ownerIdNumber": "",
        // "ownerNationalityId": "AF",
        // "ownerPassportNumber": "XEP0127106",
        // "ownerTaxNumber": null,
        // "ownerTaxOffice": null,
        // "ownerTypeId": "G",
        // "ownerName": "Mohammad Jawad",
        // "ownerSurname": "Rezaeı",
        // "ownerFatherName": "sayed hassan",
        // "ownerBirthDate": "30/09/1999",
        // "ownerGenderId": "E",
        // "ownerAddress": "",
        // "ownerDistrictId": "",
        // "ownerCityId": "",
        // "ownerPhone": "905439277697",
        // "ownerGsm": "905439277697",
        // "ownerEmail": "",
        // "ownerProfessionId": "1",
        // "ownerBirthPlace": "AF"
      };
      console.log(
        "this is the createPsoposalEndpointRequestBody: ",
        createPsoposalEndpointRequestBody
      );
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
      console.log('createProposalEndpointdata', createProposalEndpointdata)
      const createProposalPersonEndpointRequestBody = {
        branchId: "S",
        proposalId: createProposalEndpointdata.Result,
        idNumber: values.ownerIdNumber,
        nationalityId: values?.ownerNationalityId,
        taxNumber: null,
        passportNumber: values?.ownerPassportNumber,
        name: values.ownerName,
        surname: values.ownerSurname,
        birthDate: formatDateWithSlashes(
          values.ownerBirthDate as unknown as string
        ),
        birthDateUnformatted: values.ownerBirthDate,
        genderId: values.ownerGenderId,
        relationTypeId: "F",
        motherName: null,
        fatherName: values?.ownerFatherName,
        birthPlace: values.ownerNationalityId,
        professionId: '',
        planId: 1,
        iks: null,
        startDate: new Date()
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

       if(createProposalPersonEndpointResponse.status !== 201) {
          throw new Error('createProposalPersonEndpointResponse was not successful')
        }

      router.push(`/${locale}/prices/${createProposalPersonEndpointData?.proposalId}`)
        
      async function getPricesData () {
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
      const getPricesInterval = setInterval(async () => {
        const prices = await getPricesData()
        console.log('this is the prices form setINterval: ', prices)
          if(prices.IsSuccess) {
            clearPricesIntercal()
          }
      }, 1000)

      function clearPricesIntercal () {
        clearInterval(getPricesInterval)
      }
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
      setStepsSubmitButtons
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
      setStepsSubmitButtons
    ]
  );
  return (
    <TamamlayiciInsuranceStepsContext.Provider value={value}>
      {children}
    </TamamlayiciInsuranceStepsContext.Provider>
  );
};

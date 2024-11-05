import { formatDateWithSlashes, removeCountryCode } from "@/utils/helpers";
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
import { notifications } from '@mantine/notifications';
import ProductPlansType from "@/utils/types/productPlansType";

interface StepsSubmitButtonsObjectType {
  id: number,
  submitButtonRef: React.RefObject<HTMLButtonElement>
}

interface SagilikTurizmiStepsValuesType extends YabanciSagilikStepsValuesType{
  selectedPlans?: ProductPlansType[]
  selectedPlanCategory?: string,
}

interface SaglikTurizmInsuranceStepsContextType {
  values: SagilikTurizmiStepsValuesType;
  setValues: React.Dispatch<
    React.SetStateAction<SagilikTurizmiStepsValuesType | undefined>
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

const initialValues: SagilikTurizmiStepsValuesType = {
  // IDPassNumber: '',
  // birthDate: new Date(),
  // phoneNo: '',
  // insuranceDuration: 1,
};

export const SaglikTurizmInsuranceStepsContext =
  // @ts-ignore
  React.createContext<SaglikTurizmInsuranceStepsContextType>({
    values: initialValues,
  });

export const useSaglikTurizmStepsContext = () => {
  return useContext(SaglikTurizmInsuranceStepsContext);
};

type SaglikTurizmInsuranceStepsProviderType = {
  children: ReactNode;
  branchId: string,
  productId: string,
  productTarifId: string,
  productVersionId: string,
  paymentPlanId: string,
  paymentTypeId: string,
};


export const SaglikTurizmInsuranceStepsProvider: FC<
  SaglikTurizmInsuranceStepsProviderType
> = ({ children, branchId, paymentPlanId, paymentTypeId, productId, productTarifId, productVersionId }) => {
  const [values, setValues] =
    useState<SagilikTurizmiStepsValuesType>(initialValues);
  const [activeStep, setActiveStep] = useState(0);
  const [stepsValidation, setStepsValidation] = useState({});
  const [canGoToTheNextStep, setCanGoToTheNextStep] = useState(false);
  const [stepsSubmitButtons, setStepsSubmitButtons] = useState<StepsSubmitButtonsObjectType[]>([])
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
      branchId,
      productId,
      productTarifId,
      productVersionId,
      paymentPlanId,
      paymentTypeId
     
    }));
  }, [ 
    branchId,
    productId,
    productTarifId,
    productVersionId,
    paymentPlanId,
    paymentTypeId]);

  useEffect(() => {
    console.log("values changed: ", values);
  }, [values]);

  const createProposals = async () => {
    const planIdsRes = await fetch(`${process.env.NEXT_PUBLIC_PUBLIC_APIS_BASE_URL}demir-hayat/getPlanList/${productTarifId}`)
    // const planIds: getPlanListReType = await planIdsRes.json()
    const createdpPoposalIds: any = []
    // console.log('these are the planIds: ', planIds)

    let promises: Promise<getPlanListReType>[] = []

    const planIdsWithDifferentDurations = new Set();

// Filter the array to keep only unique plans based on "Gun" property
// const uniquePlans = planIds.Result.filter(plan => {
//   if (planIdsWithDifferentDurations.has(plan.Gun)) {
//     return false; // Duplicate, skip this plan
//   } else {
//     planIdsWithDifferentDurations.add(plan.Gun); // Add "Gun" value to the set
//     return true; // Unique, keep this plan
//   }
// });

  // console.log('this is the uniquePlans', uniquePlans)

  console.log('here are the values: ', values)
  
  values.selectedPlans?.map((plan, index) => {
    
      DemirHayatCreateProposal(plan.PlanNo, productId, plan?.TarifeNo, plan?.VerNo, plan?.Gun, plan?.Aciklama, index)
    }
    )

    Promise.all(promises).then(([items, contactlist, itemgroup]) => {

    }).catch((err) => {
      console.log(err);
    });


    async function DemirHayatCreateProposal(
      planId: number, 
      productId: string,
      productTarifId: string,
      productVersionId: string,
      days: string,
      description: string,
      index: number
      ) {
        // TODO: make the paymentPlanId dynamic
      const createPsoposalEndpointRequestBody = {
        branchId: branchId,
        productId: productId,
        productTarifId: productTarifId,
        productVersionId: productVersionId,
        paymentPlanId: paymentPlanId,
        paymentTypeId: paymentTypeId,
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
        ownerAddress: "Adress",
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
      if(!createProposalEndpointdata.IsSuccess) {
        notifications.show({
          color: 'red',
          title: 'Teklif Oluşurken bir hata oluştu (createProposal)',
          message: createProposalEndpointdata?.ErrorMessage,
          
        })
        throw new Error(`erorr createProposalEndpointdata: ${createProposalEndpointdata?.ErrorMessage}`)
      }
      createdpPoposalIds.push(createProposalEndpointdata?.Result)
      // if(res.status )
      const createProposalPersonEndpointRequestBody = {
        branchId: branchId,
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
        planNo: planId,
        iks: null,
        startDate: values.startDate,
        productId: productId,
        productTarifId: productTarifId,
        productVersionId: productVersionId,
        days: days,
        description: description,
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
      if(!createProposalPersonEndpointData.IsSuccess) {
        notifications.show({
          color: 'red',
          title: 'Teklif Oluşurken bir hata oluştu (createProposalPerson)',
          message: createProposalPersonEndpointData?.ErrorMessage,
          
        })}
      if (createProposalPersonEndpointResponse.status !== 201) {
        throw new Error('createProposalPersonEndpointResponse was not successful')
      }
      // createdpPoposalIds.push(createProposalPersonEndpointData?.proposalId)
      console.log('this is the values!.selectedPlans', values!.selectedPlans)
      if(index === (values!.selectedPlans!.length - 1) ) {
        console.log('this is the createdpPoposalIds before pushing: ', createdpPoposalIds)
        router.push(`/${locale}/prices/${createdpPoposalIds}`)
      }

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
              branchId: branchId,
              proposalId: createProposalEndpointdata.Result,
            }),
          }
        );

        const pricesData = await getPricesRes.json();

        console.log("getPricesData", pricesData);
        return pricesData

      }
      let count = 0;
      const getPricesInterval = setInterval(async () => {
        const prices = await getPricesData()
        console.log('this is the prices form setINterval: ', prices)
        count++;
        if (prices.IsSuccess || count === 3) {
          clearPricesIntercal()
        }
      }, 1000)

      function clearPricesIntercal() {
        clearInterval(getPricesInterval)
      }
      return createProposalPersonEndpointData;
    };
    // DemirHayatCreateProposal();
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
    <SaglikTurizmInsuranceStepsContext.Provider value={value}>
      {children}
    </SaglikTurizmInsuranceStepsContext.Provider>
  );
};

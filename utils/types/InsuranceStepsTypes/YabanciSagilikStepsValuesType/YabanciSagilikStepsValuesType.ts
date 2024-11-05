interface YabanciSagilikStepsValuesType {
    ownerIdNumber?: string,
    ownerPassportNumber?: string,
    ownerBirthDate?: Date,
    phoneNo?: string, 
    insuranceDuration?: 1 | 2,
    ownerName?: string,
    ownerSurname?: string,
    ownerFatherName?: string,
    ownerGenderId?: "E" | "K",
    startDate?: Date,
    ownerNationalityId?: string, 
    ownerCityId?: string | null,
    ownerDistrictId?: string,
    neighbourhood?: string,
    buildingNo?: string,
    doorNo?: string,
    ticariElectronicChecked?: boolean,
    termsOfServiceAccepted?: boolean
    IAcceptToCreateAnAccount?: boolean,
    currentStepValidationFunction?: () => any
} 

export default YabanciSagilikStepsValuesType
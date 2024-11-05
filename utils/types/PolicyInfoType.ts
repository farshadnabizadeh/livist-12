export interface PolicyInfoType {
  id: number
  proposalId: number
  proposalPersonId: number
  isBought: boolean
  passportNo: any
  TCIdNo: string
  birthDate: string
  name: string
  surname: string
  policyStartDate: string
  price: number
  branchId: string
  productId: string
  productTarifId: string
  productVersionId: string
  planNo: any
  days: string
  description: string
  createdAt: string
  OutPolicyNo: any
  OutStartDate: any
  OutEndDate: any
  OutIssueDate: any
  OutPolicyPremium: any
  premiumParams: PremiumParams
  benefits: Benefits
}

export interface PremiumParams {
  Result: Result
  ErrorCode: string
  ErrorMessage: string
  IsSuccess: boolean
}

export interface Result {
  AgentBonusAmount: number
  AgentBonusDiscount: number
  Premium: number
  AgentAmount: number
  MaxAgentBonusAmount: number
  MaxAgentBonusDiscount: number
}

export interface Benefits {
  Result: Result2[]
  ErrorCode: string
  ErrorMessage: string
  IsSuccess: boolean
}

export interface Result2 {
  planId: string
  planName: string
  planDescription: string
  benefitCode: string
  benefitSubCode: string
  benefitName: string
  limit: string
  companyParticipation: string
  limit2: string
  companyParticipation2: string
}

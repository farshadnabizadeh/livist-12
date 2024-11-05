import UserType from "./UserType"

export interface PaymentSuccessResponse {
  id: number
  proposalId: number
  proposalPersonId: number
  isBought: boolean
  passportNo: string
  TCIdNo: any
  birthDate: string
  name: string
  surname: string
  policyStartDate: string
  price: number
  branchId: string
  createdAt: string
  OutPolicyNo: string
  OutStartDate: string
  OutEndDate: string
  OutIssueDate: string
  OutPolicyPremium: number
  proposal: Proposal
  downloadUrl: DownloadUrl
  order_no: string
  order_id: string
  invoice_id: string
  sipay_payment_method: string
  credit_card_no: string
  transaction_type: string
  auth_code: string
  hash_key: string
  created_at: string
  error: boolean
  user: UserType
}

export interface Proposal {
  id: number
  proposalId: number
  proposalPersonId: number
  isBought: boolean
  passportNo: string
  TCIdNo: any
  birthDate: string
  name: string
  surname: string

  policyStartDate: string
  price: number
  branchId: string
  createdAt: string
  OutPolicyNo: string
  OutStartDate: string
  OutEndDate: string
  OutIssueDate: string
  OutPolicyPremium: number
}

export interface DownloadUrl {
  Result: string
  ErrorCode: string
  ErrorMessage: string
  IsSuccess: boolean
}

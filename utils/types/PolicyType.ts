export default interface Policy {
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
    policyAgencyInfo?: {
      agencyName: string,
      agencyImage: string, 
    },
    policyType?: string
    OutPolicyNo: any
    OutStartDate: any
    OutEndDate: any
    OutIssueDate: any
    OutPolicyPremium: any
  }
  
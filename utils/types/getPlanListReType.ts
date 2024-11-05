export interface getPlanListReType {
   Result: {
        VerNo: string
        PlanNo: number
        Kod: string
        Gun: string
        OdePlanSeq: number
        TarifeNo: string
        Aciklama: string
        DefaultNetwork: string
   }[],
   "ErrorCode": string,
   "ErrorMessage": string,
   "IsSuccess": boolean
  }
  
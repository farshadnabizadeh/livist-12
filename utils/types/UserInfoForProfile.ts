import { PolicyType } from "./index"



export default interface UserInfoForProfileType {
  id: number
  name?:string
  birthDate?: Date
  TCIdNo: any
  passprtNo: any
  phoneNo: string
  smsCode: number
  isVarified: boolean
  smsCodeUpdatedAt: string
  createdAt: string
  policies: PolicyType[]
}


import { NextResponse } from 'next/server'
import appConfig from '@/app.config'


export async function POST(request: Request) {
    // console.log(request)
    const body = await request.json()

    // console.log('the getPaymentPlanList function called: ', body)
//   const id = searchParams.get('id')
  const res = await fetch(`${appConfig.centralInsurranceCompaniesAPIBaseUrls.demirHayat}/GetPaymentPlanList`, {
    method: 'POST',
    body: JSON.stringify({
        "branchId": body?.branchId,
        "productId": body?.productId,
        "productTariffId": body?.productTariffId,
        "productversionId": body?.productversionId,
        "salesManId": process.env.DEMIR_HAYAT_SALESMAN_ID
    }),
    headers: {
      'Content-Type': 'application/json',
      'userName': process.env.DEMIR_HAYAT_USER_NAME!,
      'password': process.env.DEMIR_HAYAT_PASSWORD!,
      },
  })
  const plansList = await res.json()
 
  return NextResponse.json({plansList})
}
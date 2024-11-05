import { NextResponse } from 'next/server'
import appConfig from '@/app.config'


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  // console.log('the get function called: ')
//   const id = searchParams.get('id')
  const res = await fetch(`${appConfig.centralInsurranceCompaniesAPIBaseUrls.demirHayat}/GetProductList`, {
    method: 'POST',
    body: JSON.stringify({
      "branchId":"S",
      "salesManId": process.env.DEMIR_HAYAT_SALESMAN_ID
    }),
    headers: {
      'Content-Type': 'application/json',
      'userName': process.env.DEMIR_HAYAT_USER_NAME!,
      'password': process.env.DEMIR_HAYAT_PASSWORD!,
      },
  })
  const product = await res.json()
 
  return NextResponse.json({ product })
}
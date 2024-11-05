import { NextResponse } from 'next/server'
import appConfig from '@/app.config'


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
//   const tarifeNo = searchParams.tarifeno

  // console.log('the get function called: ')
  const tarifeno = searchParams.get('tarifeno')
  const res = await fetch(`${appConfig.centralInsurranceCompaniesAPIBaseUrls.demirHayat}/GetPlanList?tarifeno=${tarifeno}`, {
   
    headers: {
      'Content-Type': 'application/json',
      'userName': process.env.DEMIR_HAYAT_USER_NAME!,
      'password': process.env.DEMIR_HAYAT_PASSWORD!,
      },
  })
  const PlanList = await res.json()
 
  return NextResponse.json({ PlanList })
}
import { NextResponse } from "next/server";
import appConfig from "@/app.config";

export async function POST(request: Request) {
  const body = await request.json();
  //   const id = searchParams.get('id')
  const res = await fetch(
    `${appConfig.centralInsurranceCompaniesAPIBaseUrls.demirHayat}/CreateProposal`,
    {
      method: "POST",
      body: JSON.stringify({
        branchId: body?.branchId,
        productId: body?.productId,
        productTarifId: body?.productTarifId,
        productVersionId: body?.productVersionId,
        paymentPlanId: body?.paymentPlanId,
        paymentTypeId: body?.paymentTypeId ?? "H",
        startDate: body?.startDate,
        ownerIdNumber: body?.ownerIdNumber ?? "",
        ownerNationalityId: body?.ownerNationalityId,
        ownerPassportNumber: body?.ownerPassportNumber,
        ownerTaxNumber: null,
        ownerTaxOffice: null,
        ownerTypeId: "G",
        ownerName: body?.ownerName,
        ownerSurname: body?.ownerSurname,
        ownerFatherName: body?.ownerFatherName,
        ownerBirthDate: body?.ownerBirthDate,
        ownerGenderId: body?.ownerGenderId,
        ownerAddress: body?.ownerAddress,
        ownerDistrictId: body?.ownerDistrictId,
        ownerCityId: body.ownerCityId,
        ownerPhone: body?.ownerPhone,
        ownerGsm: body?.ownerGsm ?? "",
        ownerEmail: body?.ownerEmail,
        ownerProfessionId: body?.ownerProfessionId,
        ownerBirthPlace: body?.ownerBirthPlace,
        salesManId: process.env.DEMIR_HAYAT_SALESMAN_ID,
      }),

      headers: {
        "Content-Type": "application/json",
        userName: process.env.DEMIR_HAYAT_USER_NAME!,
        password: process.env.DEMIR_HAYAT_PASSWORD!,
      },
    }
  );
  const proposal = await res.json();

  return NextResponse.json({ proposal });
}

// the working one :
// "branchId": "S",
//     "productId": "SES",
//     "productTarifId": "72",
//     "productVersionId": "012",
//     "paymentPlanId": 9629,
//     "paymentTypeId": "H",
//     "startDate": "25/09/2023",
//     "ownerIdNumber": "",
//     "ownerNationalityId": "AF",
//  "ownerPassportNumber": "XEP0127106",
//     "ownerTaxNumber": null,
//     "ownerTaxOffice": null,
//     "ownerTypeId": "G",
//  "ownerName": "Mohammad Jawad",
//     "ownerSurname": "Rezaeı",
//     "ownerFatherName": "sayed hassan",
//     "ownerBirthDate": "30/09/1999",
//     "ownerGenderId": "E",
//  "ownerAddress": "",
//     "ownerDistrictId": "",
//  "ownerCityId": "",
//  "ownerPhone": 5439277697,
//     "ownerGsm": "5439277697",
//     "ownerEmail": "mjsweb.sitesend@gmail.com",
//     "ownerProfessionId": "1",
//  "ownerBirthPlace": "AF",
//     "salesManId": "103"

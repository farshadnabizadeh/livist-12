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
        proposalId: body?.proposalId,
        idNumber: body?.idNumber,
        nationalityId: body?.nationalityId,
        taxNumber: body?.taxNumber,
        passportNumber: body?.passportNumber,
        name: body?.name,
        surname: body?.surname,
        birthDate: body?.birthDate,
        genderId: body?.genderId,
        relationTypeId: body?.relationTypeId ?? "F",
        motherName: body?.motherName,
        fatherName: body?.fatherName,
        birthPlace: body?.birthPlace,
        professionId: body?.professionId,
        planId: body?.planId,
        iks: body?.iks,
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

'use client'
import React, { ReactElement, useEffect, useState } from 'react'
import { createHash, createDecipheriv, createCipheriv } from 'crypto';
import PaymentSuccessPage from '@/components/Pages/Payments/PaymentSuccess';
import ClientLayout from '@/components/Layouts/ClientLayout';
import { useRouter } from 'next/router';


// This function can run for a maximum of 5 seconds
// export const config = {
//   maxDuration: 50,
// };

export async function getServerSideProps(context: any) {
// const query = context?.query;
// console.log('this is the query', query)

// const encryptedValue = query?.hash_key;
// // console.log('this is the encryptedValue', encryptedValue)
// const appSecret = process.env.APP_SECRET!;
// console.log('this is the appSecret:', appSecret)

// // TODO: validate the hash coming inside the query
// const decryptedValue = validateHashKey(encryptedValue, appSecret);
// console.log('decryptedValue: ', decryptedValue)
// if (!decryptedValue) throw new Error('Could not dycrypt!')
// const decryptedValues = { installment: decryptedValue[0], total: decryptedValue[1], proposalId: decryptedValue[2], orderNo: decryptedValue[3], currency: [4] }
// console.log('here is the secret: ', appSecret)
// const body = {

//   ...query,
//   // ...decryptedValues

// }
// console.log('this is the body being sent: ', body)
// // TODO: make this call only when a user is authenticated and authorized
// const res = await fetch(`${process.env.NEXT_PUBLIC_PUBLIC_APIS_BASE_URL}payment/confirmPayment` , {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(body) 
// })

//   console.log('this is the status code: ', res.status)

//   const data = await res.json()
// console.log('this is the data', data)
//   let pageProps = data;
//   if(res.status == 200 || res.status == 201){
//     pageProps.error = false
//   } else {
//     pageProps.error = true;
//   }
//   return { props: {...pageProps} }
  return {props: {}}
}






const PaymentSuccess = (props: any) => {

  const [isLoading, setIsLoading] = useState(true)
  const [pageProps, setPageProps] = useState<any>({})
  // console.log('here is the pageProps', props)
  const router = useRouter()


  const getPaymentStatus = async () => {
    const query = router.query;
    console.log('this is the query bro:',router )
    const body = {

      ...query,
      // ...decryptedValues

    }

    // TODO: make this call only when a user is authenticated and authorized
    const res = await fetch(`${process.env.NEXT_PUBLIC_PUBLIC_APIS_BASE_URL}payment/confirmPayment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
    console.log('this is the status code: ', res.status)

    const data = await res.json()
    console.log('this is the data', data)
    let pageInfo = data;
    if (res.status == 200 || res.status == 201) {
      pageInfo.error = false
    } else {
      pageInfo.error = true;
    }
    setPageProps(pageInfo)
    setIsLoading(false)
  }


  useEffect(() => {
    getPaymentStatus()
  },
    [])


  return (
    <>
      {isLoading && <h1>Loading ...</h1>}
      {
        !isLoading && pageProps.error && <h1> Bir Hata Oluştu </h1>
      }
      {!isLoading && !pageProps.error && <div>
        <PaymentSuccessPage {...pageProps} />
      </div>}



    </>
  )
}




function validateHashKey(hashKey: string, secretKey: string) {
  //hashKey, secretKey
  //"cd1cdd3dab290d94:cd1c:RIYCJWFNLU+__5iazt+lvQg==","asa"
  let status = "";
  let currencyCode = ""
  let total = 0
  let invoiceId = 0;
  let orderId = 0;

  if (hashKey) {
    let password = hashString('sha1', secretKey)

    let components = hashKey.split(":")
    if (components.length > 2) {
      let iv = components[0] !== null ? components[0] : "";
      let salt = components[1] !== null ? components[1] : "";
      let encryptdata = components[2] !== null ? components[2] : "";
      console.log('this is the encryptdata ', encryptdata);
      let cryptkey = hashString('sha256', password + salt);
      // @ts-ignore
      let decrypted = decrypt(cryptkey, iv, new Buffer.from(encryptdata.replace('__', '/'), 'base64'));
      //console.log(decrypted.toString('utf8'));
      decrypted = decrypted.toString('utf8') as unknown as Buffer;
      console.log('this is the decrypted', decrypted)
      if (decrypted.includes("|")) {
        // @ts-ignore
        let array = decrypted.split("|");
        status = array[0] != null ? array[0] : 0;
        total = array[1] != null ? array[1] : 0;
        invoiceId = array[2] != null ? array[2] : "0";
        orderId = array[3] != null ? array[3] : 0;
        currencyCode = array[4] != null ? array[4] : 0;
      }
    }
    return [status, total, invoiceId, orderId, currencyCode];
  } else {
    return null;
  }
}

function encrypt(plainText: string, Algorithm: string, key: string, iv: string) {
  let encipher = createCipheriv(Algorithm, key.substring(0, 32), iv);
  return Buffer.concat([
    encipher.update(plainText),
    encipher.final()
  ]);
}

function decrypt(key: string, iv: string, encryptdata: any) {
  console.log('this is the data from decrypt;', "key:", key)
  console.log('iv:', iv)
  console.log('encryptdata:', encryptdata)
  var decipher = createDecipheriv('aes-256-cbc', key.substring(0, 32), iv);
  return Buffer.concat([
    decipher.update(encryptdata),
    decipher.final()
  ]);
}



// function decryptHashKey(encryptedData: string, appSecret: string): string {
//   encryptedData = encryptedData.replace(/__/g, '/');
//   console.log('this is the encryptedData', encryptedData)
//   console.log("this is the appSecret", appSecret)
//   // Split the encrypted bundle into parts
//   const [iv, salt, encrypted] = encryptedData.split(':');

//   console.log('IV:', iv);
//   console.log('Salt:', salt);
//   console.log('Encrypted:', encrypted);

//   // Calculate the salted password
//   const password = hashString('sha1', appSecret);
//   const saltWithPassword = hashString('sha256', password + salt);

//   console.log('Salted Password:', saltWithPassword);

//   // Decrypt the data using AES-256-CBC
//   const decipher = createDecipheriv('aes-256-cbc', Buffer.from(saltWithPassword, 'hex'), Buffer.from(iv, 'hex'));  let decrypted = decipher.update(encrypted, 'base64', 'utf-8');
//   decrypted += decipher.final('utf-8');

//   return decrypted;
// }

// Helper function to hash a string using a specific algorithm
function hashString(algorithm: string, data: string): string {
  return createHash(algorithm).update(data).digest('hex');
}


PaymentSuccess.getLayout = function getLayout(page: ReactElement) {
  return (

    <ClientLayout>{page}</ClientLayout>

  )
}


export default PaymentSuccess;



// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
var axios = require('axios');

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // oneToN()
  function oneToN() {

    var data = JSON.stringify({
      "api_id": "", // api kullanici adi
      "api_key": "", //Size özel verilmiş olan api kullanici sifre
      "sender": "SMS TEST", //Gönderici ad
      "message_type": "normal", //trkçe sms göndermek için turkce yaziniz
      "message": "Bu bir test mesajıdır. For MJ",
      "message_content_type": "bilgi", // ticari smsler için "ticari"
      "phones": [
          "5439277697",
      ], //Telefon numaralarını , ile ayırarak ekleyebilirsiniz.
    });
  
    var config = {
      method: 'post',
      url: 'https://api.vatansms.net/api/v1/1toN',
      headers: {
          'Content-Type': 'application/json',
      },
      data: data
    };
  
    axios(config)
      .then(function (response: any) {
          console.log(JSON.stringify(response.data));
      })
      .catch(function (error: any) {
          console.log(error);
      });
  }                            
  res.status(200).json({ name: 'John Doe' })
}

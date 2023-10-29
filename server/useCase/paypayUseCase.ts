import { PAYPAY_CLIENT_ID, PAYPAY_CLIENT_SECRET, PAYPAY_MERCHANT_ID } from '$/service/envValues';
import PayPaySDK from '@paypayopa/paypayopa-sdk-node';

PayPaySDK.Configure({
  clientId: PAYPAY_CLIENT_ID,
  clientSecret: PAYPAY_CLIENT_SECRET,
  merchantId: PAYPAY_MERCHANT_ID,
  productionMode: false,
});

type ResultInfo = {
  code: string;
  message: string;
};

const user = 'test';
const amount = 100;

// export const generateQRCode = async () => {
//   const paymentDetails = {
//     merchantPaymentId: `${user}ヘの${amount}円の支払い(${Date.now()})})`,
//     amount: {
//       amount,
//       currency: 'JPY',
//     },
//     codeType: 'ORDER_QR',
//     redirectUrl: 'https://paypay.ne.jp/',
//     redirectType: 'WEB_LINK',
//     orderDescription: `${user}ヘの${amount}円の支払い(${Date.now()})})`,
//     isAuthorization: false,
//   };


//   try {
//     const response = await PayPaySDK.QRCodeCreate(paymentDetails);
//     console.log('PayPay Response:', response);
//     if ('resultInfo' in response) {
//       const resultInfo = response.resultInfo as ResultInfo;
//       if (resultInfo.code === 'SUCCESS' && 'data' in response) {
//         return  response.data ;
//       } else {
//         return  resultInfo.message ;
//       }
//     } else {
//       return 'Unexpected response';
//     }
//   } catch (error) {
//     console.error('PayPay Error:', error);
//     if (error instanceof Error) {
//       return error.message;
//     } else {
//       return 'An unknown error occurred.';
//     }
//   }
// };



export const generateQRCode = async () => {
  console.log('client id:', PAYPAY_CLIENT_ID);
  console.log('merchant id:', PAYPAY_MERCHANT_ID);
  console.log('client secret:', PAYPAY_CLIENT_SECRET);

  const paymentDetails = {
    merchantPaymentId: `${user}ヘの${amount}円の支払い(${Date.now()})})`,
    amount: {
      amount,
      currency: 'JPY',
    },
    codeType: 'ORDER_QR',
    redirectUrl: 'https://paypay.ne.jp/',
    redirectType: 'WEB_LINK',
    orderDescription: `${user}ヘの${amount}円の支払い(${Date.now()})})`,
    isAuthorization: false,
  };

  console.log('paymentDetails:', paymentDetails);

  try {
    const response = await PayPaySDK.QRCodeCreate(paymentDetails);
    console.log('PayPay Response:', response);
    return response;
  } catch (error) {
    console.error('PayPay Error:', error);
    return error;
  }
};

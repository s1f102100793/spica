import { PAYPAY_CLIENT_ID, PAYPAY_CLIENT_SECRET, PAYPAY_MERCHANT_ID } from '$/service/envValues';
import PayPaySDK from '@paypayopa/paypayopa-sdk-node';
import type {
  HttpsClientError,
  HttpsClientSuccess,
} from '@paypayopa/paypayopa-sdk-node/dist/lib/httpsClient';

PayPaySDK.Configure({
  clientId: PAYPAY_CLIENT_ID,
  clientSecret: PAYPAY_CLIENT_SECRET,
  merchantId: PAYPAY_MERCHANT_ID,
  productionMode: false,
});

const user = 'test';
const amount = 100;

type QRCodeData = {
  url: string;
};

type ExtendedHttpsClientSuccess = HttpsClientSuccess & {
  BODY: {
    data: QRCodeData;
  };
};

export const generateQRCode = async () => {
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

    if ('STATUS' in response && response.STATUS === 201) {
      const successResponse = response as ExtendedHttpsClientSuccess;
      if (
        successResponse.BODY !== null &&
        successResponse.BODY.data !== null &&
        successResponse.BODY.data.url
      ) {
        return successResponse.BODY.data.url;
      } else {
        throw new Error('Unexpected response format');
      }
    } else if ('ERROR' in response) {
      const errorResponse = response as HttpsClientError;
      if ('ERROR' in errorResponse && typeof errorResponse.ERROR === 'string') {
        throw new Error(errorResponse.ERROR);
      } else {
        throw new Error('PayPay API error');
      }
    } else {
      throw new Error('Unexpected response format');
    }
  } catch (error) {
    console.error('PayPay Error:', error);
    throw error;
  }
};

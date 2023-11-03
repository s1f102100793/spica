import { PAYPAY_CLIENT_ID, PAYPAY_CLIENT_SECRET, PAYPAY_MERCHANT_ID } from '$/service/envValues';
import PayPaySDK from '@paypayopa/paypayopa-sdk-node';
import type {
  HttpsClientError,
  HttpsClientSuccess,
} from '@paypayopa/paypayopa-sdk-node/dist/lib/httpsClient';

PayPaySDK.Configure({
  env: 'STAGING',
  clientId: PAYPAY_CLIENT_ID,
  clientSecret: PAYPAY_CLIENT_SECRET,
  merchantId: PAYPAY_MERCHANT_ID,
  productionMode: false,
});

type QRCodeData = {
  url: string;
};

type ExtendedHttpsClientSuccess = HttpsClientSuccess & {
  BODY: {
    data: QRCodeData;
  };
};

export const generateQRCode = async (company_id: string, user_id: string, amount: number) => {
  const paymentDetails = {
    merchantPaymentId: `${company_id}-${user_id}-${Date.now()}`,
    amount: {
      amount,
      currency: 'JPY',
    },
    codeType: 'ORDER_QR',
    redirectUrl: 'https://paypay.ne.jp/',
    redirectType: 'WEB_LINK',
    orderDescription: `${company_id}の${user_id}ヘの${amount}円のチップ`,
    isAuthorization: false,
  };

  try {
    const response = await PayPaySDK.QRCodeCreate(paymentDetails);

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

export const createPayPayPayment = async (amount: number, feedback: string) => {
  const paymentDetails = {
    merchantPaymentId: `Payment for ${feedback} (${Date.now()})`,
    amount: {
      amount,
      currency: 'JPY',
    },
    orderDescription: `Payment for ${feedback} (${Date.now()})`,
    isAuthorization: false,
  };

  try {
    const response = await PayPaySDK.CreatePayment(paymentDetails);
    console.log(response);

    if ('STATUS' in response && response.STATUS === 201) {
      const successResponse = response as ExtendedHttpsClientSuccess;
      return successResponse.BODY.data;
    } else if ('ERROR' in response) {
      const errorResponse = response as HttpsClientError;
      throw new Error(errorResponse.ERROR);
    } else {
      throw new Error('Unexpected response format');
    }
  } catch (error) {
    console.error('PayPay Error:', error);
    throw error;
  }
};

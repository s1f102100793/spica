import dotenv from 'dotenv';

dotenv.config();

const PORT = +(process.env.PORT ?? '8080');
const API_BASE_PATH = process.env.API_BASE_PATH ?? '';
const API_ORIGIN = process.env.API_ORIGIN ?? '';
const CORS_ORIGIN = process.env.CORS_ORIGIN ?? '';
const FIREBASE_AUTH_EMULATOR_HOST = process.env.FIREBASE_AUTH_EMULATOR_HOST;
const FIREBASE_SERVER_KEY = process.env.FIREBASE_SERVER_KEY ?? '';
const S3_ENDPOINT = process.env.S3_ENDPOINT ?? '';
const S3_BUCKET = process.env.S3_BUCKET ?? '';
const S3_ACCESS_KEY = process.env.S3_ACCESS_KEY ?? '';
const S3_SECRET_KEY = process.env.S3_SECRET_KEY ?? '';
const S3_REGION = process.env.S3_REGION ?? '';
const MAILADDRESS = process.env.MAILADDRESS ?? '';
const MAILPASSWORD = process.env.MAILPASSWORD ?? '';
const PAYPAY_CLIENT_ID = process.env.PAYPAY_CLIENT_ID ?? '';
const PAYPAY_CLIENT_SECRET = process.env.PAYPAY_CLIENT_SECRET ?? '';
const PAYPAY_MERCHANT_ID = process.env.PAYPAY_MERCHANT_ID ?? '';

export {
  API_BASE_PATH,
  API_ORIGIN,
  CORS_ORIGIN,
  FIREBASE_AUTH_EMULATOR_HOST,
  FIREBASE_SERVER_KEY,
  MAILADDRESS,
  MAILPASSWORD,
  PAYPAY_CLIENT_ID,
  PAYPAY_CLIENT_SECRET,
  PAYPAY_MERCHANT_ID,
  PORT,
  S3_ACCESS_KEY,
  S3_BUCKET,
  S3_ENDPOINT,
  S3_REGION,
  S3_SECRET_KEY,
};

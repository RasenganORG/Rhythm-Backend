"use strict";
const dotenv = require("dotenv");
const assert = require("assert");

dotenv.config();

const {
  PORT,
  HOST,
  HOST_URL,
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} = process.env;

assert(PORT, "PORT is required");
assert(HOST, "HOST is required");

module.exports = {
  port: PORT,
  host: HOST,
  url: HOST_URL,
  firebaseConfig: {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
  },
//   serviceKeyAccount: {
//         type: "service_account",
//         project_id: "rhythmapi",
//         private_key_id: "45cde8fba4f78d1c26f1b080aa4db5b6ea8e6a06",
//         private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDRfIn7Odh7ejFz\nUMAC86TnqsSWZvyaFqlTDN1u8Pch67ZUN3tIrOHHYj/gCurHjuZXVbe34WfMU/j3\n5H76XUacMPgSy11oFfvF/MM74L44JIY+MxifG9iEzPXivHLbwAXfCPojDsF+PVUE\nu3xRl2IGatmD3o1vWxMoAhv1m1IJ3hIChXd6/PxBHwjtu24EBiPiSXCJqVKdNkpf\n9srU0lNx8T13xEgaKiuCFqzDqb4zN88jRm44y/ChGSmByeO0dW+XgOzaaAq/0NT1\nRPZbQhrSgcxCP59+LQTXigFSrsCc6ozNTy4fDkAUaJaka4cQoRNysjjBuYLPieud\nRtqnE8S7AgMBAAECggEAUqcKA+LHXLSSBTcDg0ahNjyE0viwSpWNWjS1u1t8jlgj\neKfpTvvTGylTHXEBQBpMHII3+eeH3jD1hs0TInIh9WdGwZeWc4ZU78FyQFJEiv8y\nLiFX4hMJAyChFUQYJ0bkqiKvGpzsUAQf4r2cZ87MQM7wolxxPlHXRY5LfMS7AiPy\n5Wd+P17ptmINGsClcWSiSUcrCiAXS7O+z28spp2rtVUI95XnugZ5sTqlInl5V7Jb\nXzZuDHG/ugrp/na0VN49KoebpOiTClo1iqUq2SuS7E9Y3vKo8E1WbrYVwjCU4hSh\nK74PZSwwviBGMjsjE3yk90RpS9BBxcgKT5BX9xkVjQKBgQDweCdqNCKsWoT0bozP\nnonfmGWMl9n2KQgGjjr7k8VJqkOJGBGG71Tu2tA7Hqy5bPX1onE8X+otjupDFPb9\n3kFJKEd/8zOWZRxUQBI1v30i3XKt8KFDGvEftVthEUdchQ9uyEsFyw12BFcrzyE2\navN76GB9RugMbzyxu/ZiwoL4hwKBgQDfBB+xTaIK0pm1fAV5wnHR7geWkeX/zYbQ\nac3d+mS30H4Q1mpYQ2EImZbmqARNXhfNR87wpPD8tVc1kz7QedJ9+eqhl85tILN2\n2ndfSfubqWrN7K249juL1M9p+897tYKQwbxVZwVb88CvpqGb4RQSVgbH1pRmlu8b\nXG8y7VeDLQKBgHp+OlW3SRJS6fc5eTEpqUHk95WupLDoJdZxDUqp842a1dw4DnWV\n5MXnYLs83O93ubLulJAUq82ZR2v0efzIAqmpgwKCeHzb9JpWKPCIIs5nz8sbEIqG\nZt2oHGxNyPQwM7RTAyRoUusTOvRuBpUZ1f4AWWZ3gC0VXO2Mue2E+AJxAoGBAL5D\nXmZ9vQlOsyRKMsG2SjS3xnGG95pNVf7oxWHkBZlsnqDuzLuQgHA92KfgIAuBgvz3\njm1vyslOTKDAho6F4DbpyGskgFBJ3dJAgCcjjy02VJBqo6txJ0wcuvfIhTMdn86v\n+mVCByhzxKgWmTnLxLv/+Lj1MJZ1nnjRW20vX8HhAoGAV0z6fixJy8YEIAorb97V\nTC3UaUNKqxB5/QVbaTrPs8X9aXsZTyRxJd4UaO7dveOEECtEyReSn+2i5g6wbGQW\nopOL0v2X64G48nu0JKyGHzRJdrkF4Hy6awU039Ta2BgfZyhxwCrDRCbnwtXoc8ox\ns/O5Rz5PmQ+aS3SeX/ZZrDk=\n-----END PRIVATE KEY-----\n",
//         client_email: "rhythm@rhythmapi.iam.gserviceaccount.com",
//         client_id: "102376929810759460469",
//         auth_uri: "https://accounts.google.com/o/oauth2/auth",
//         token_uri: "https://oauth2.googleapis.com/token",
//         auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
//         client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/rhythm%40rhythmapi.iam.gserviceaccount.com"   
//   }
};


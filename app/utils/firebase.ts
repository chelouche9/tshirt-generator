// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, setUserId } from "firebase/analytics";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

export const firebaseConfig = {
  apiKey: "AIzaSyBvtnXfPCs5y3A6x3ezGXw1_nqyeDrcTZU",
  authDomain: "tshirt-generator.firebaseapp.com",
  projectId: "tshirt-generator",
  storageBucket: "tshirt-generator.appspot.com",
  messagingSenderId: "430451629726",
  appId: "1:430451629726:web:a3ce11c7afaf472823258f",
  measurementId: "G-SZ7EKGRSDH",
};

// Initialize Firebase

if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  (self as any).FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}
export const app = initializeApp(firebaseConfig);

// disable analytics in development
export const analytics =
  typeof window !== "undefined" ? getAnalytics(app) : null;

export const setAnalyticsUserId = (userId: string) => {
  if (analytics) {
    setUserId(analytics, userId);
  }
};

if (typeof window !== "undefined") {
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(
      "6Lcsu-EpAAAAAA6PTfPeBCTCr8xgW7zEr4H4Pg2f"
    ),

    // Optional argument. If true, the SDK automatically refreshes App Check
    // tokens as needed.
    isTokenAutoRefreshEnabled: true,
  });
}
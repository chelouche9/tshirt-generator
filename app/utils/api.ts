import {
  getFunctions,
  httpsCallable,
  connectFunctionsEmulator,
} from "firebase/functions";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadString,
} from "firebase/storage";
import { nanoid } from "nanoid";

import { app } from "./firebase";

// Initialize the Firebase Functions instance with the app.
const functions = getFunctions(app, "us-central1");

// Conditionally use the emulator for Functions only in development mode.
// Note: The `useEmulator` method is called directly on the `functions` instance, not as a function call.
if (process.env.NODE_ENV === "development") {
  connectFunctionsEmulator(functions, "localhost", 5001);
}

// Define a callable function.
export const generateImages = httpsCallable<any, any>(
  functions,
  "generateImages"
);

export const order = httpsCallable<any, any>(functions, "order");

export const saveImage = async (image: string) => {
  const storage = getStorage();
  const id = nanoid();
  const storageRef = ref(storage, `images/${id}`);
  const res = await uploadString(storageRef, image, "data_url");
  return res.metadata.fullPath;
};

export const getImage = async (path: string) => {
  const storage = getStorage();
  const storageRef = ref(storage, path);
  const url = await getDownloadURL(storageRef);
  return url;
};

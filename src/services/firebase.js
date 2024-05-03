import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: "feminnova-7e547.firebaseapp.com",
  projectId: "feminnova-7e547",
  storageBucket: "feminnova-7e547.appspot.com",
  messagingSenderId: "870523501177",
  appId: "1:870523501177:web:dc4a1b248987c5459b32a8",
  measurementId: "G-4FSJCJ2KPV",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Función para cargar archivos
export async function uploadFile(file) {
  const storageRef = ref(storage, uuidv4());
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef)
  return url
}

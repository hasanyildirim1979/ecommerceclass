//// burada google firebase ile etkileşime buradan girilecek.

import { initializeApp } from "firebase/app";

//authentication işlemleri için giriş ve yetkilendirme
import {getAuth} from "firebase/auth"

//firestore database erişimi için(verilerin kayıt yeri)
import {getFirestore} from "firebase/firestore"

//storage erişimi için (resim kayıt yeri)
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAl_M41bc7XdBv5RR23Xv_7ZmsIaXe0UOk",
  authDomain: "ecommerceclass-5263c.firebaseapp.com",
  projectId: "ecommerceclass-5263c",
  storageBucket: "ecommerceclass-5263c.appspot.com",
  messagingSenderId: "152180711417",
  appId: "1:152180711417:web:e959ee57ecff45d583e728"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAh8blLGmnMFSgidhE5BxMyuTTGrvpLzso",
  authDomain: "my-money-tracker-77bad.firebaseapp.com",
  projectId: "my-money-tracker-77bad",
  storageBucket: "my-money-tracker-77bad.appspot.com",
  messagingSenderId: "456582604565",
  appId: "1:456582604565:web:42a41371f5f401ff2aab1c"
};

// init firebase 
initializeApp(firebaseConfig)

// init firestore
const db = getFirestore()

export { db }
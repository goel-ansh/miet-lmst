// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDocs, collection } from "firebase/firestore";

// import { getFirestore, collection, getDocs } from "./src/utils/firebase-app.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDeqbBw-Ij52gCMhDToNCU0cbJ02glj2x0",
    authDomain: "library-auth-603bf.firebaseapp.com",
    projectId: "library-auth-603bf",
    storageBucket: "library-auth-603bf.firebasestorage.app",
    messagingSenderId: "885543404077",
    appId: "1:885543404077:web:b1a23806b272e05c3aeea4",
    measurementId: "G-T0QYGSSY9X"
  };

// Ansh's Firebase config
// const firebaseConfig = {
//     apiKey: "AIzaSyCWzNtojk98fhlwJMhf_6bKYweEKpFzIvs",
//     authDomain: "miet-lmst.firebaseapp.com",
//     databaseURL: "https://miet-lmst-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "miet-lmst",
//     storageBucket: "miet-lmst.firebasestorage.app",
//     messagingSenderId: "45988430388",
//     appId: "1:45988430388:web:960605e9e92df07d5cc061"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const colStudent = collection(db, "Student Details")

getDocs(colStudent).then((snapshot) => {
        // console.log(snapshot.docs)

        let studentdata = []
            snapshot.docs.forEach((doc) => {
                studentdata.push({ ...doc.data(), id: doc.id})
            })

            console.log(studentdata)
    })
    
const colBook = collection(db, "Book Details")

    getDocs(colBook).then((snapshot) => {
            // console.log(snapshot.docs)
    
            let bookdata = []
                snapshot.docs.forEach((doc) => {
                    bookdata.push({ ...doc.data(), id: doc.id})
                })
    
                console.log(bookdata)
        })
    
// const docRef = doc(db, "cities", "SF");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
// } else {
//     // docSnap.data() will be undefined in this case
//     console.log("No such document!");
// }
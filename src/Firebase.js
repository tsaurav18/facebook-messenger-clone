import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyBB42JtlKZfbYrv9R3wgi3jNt7iItKciiI",
    authDomain: "facebook-messenger-clone-eaafd.firebaseapp.com",
    projectId: "facebook-messenger-clone-eaafd",
    storageBucket: "facebook-messenger-clone-eaafd.appspot.com",
    messagingSenderId: "794966029839",
    appId: "1:794966029839:web:597abdad2c3d63da13157a",
    measurementId: "G-PKS3QPVY79"
  });
//   const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db= firebaseApp.firestore()
  export default db;
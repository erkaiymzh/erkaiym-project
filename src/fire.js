import fire from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTQ1Zb-qFDCa2KPh1IJll6-I8S3WdJqyw",
  authDomain: "erkaiym-personal-project.firebaseapp.com",
  projectId: "erkaiym-personal-project",
  storageBucket: "erkaiym-personal-project.appspot.com",
  messagingSenderId: "288012567323",
  appId: "1:288012567323:web:13227215c909e56ecf49be",
};

export default fire.initializeApp(firebaseConfig);

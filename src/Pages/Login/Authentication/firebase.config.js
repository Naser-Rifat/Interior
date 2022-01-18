

// const firebaseConfig = {
//   apiKey: "AIzaSyD6aaq8YvO7SUWdUYFU_eSW3ZfJN6qKz78",
//   authDomain: "interior-design-3f53b.firebaseapp.com",
//   projectId: "interior-design-3f53b",
//   storageBucket: "interior-design-3f53b.appspot.com",
//   messagingSenderId: "304620262728",
//   appId: "1:304620262728:web:6a9782f186741d50c64f7d"
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

export default firebaseConfig;

//  const firebaseConfig = {
//   apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId:process.env.REACT_APP_FIREBASE_APP_ID
// };

// export default firebaseConfig;
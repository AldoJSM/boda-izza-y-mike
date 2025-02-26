// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDypljLRIlbl2Lp96WNTKxTmtZk6TZQpC4",
  authDomain: "boda-4c725.firebaseapp.com",
  databaseURL: "https://boda-4c725-default-rtdb.firebaseio.com",
  projectId: "boda-4c725",
  storageBucket: "boda-4c725.firebasestorage.app",
  messagingSenderId: "1019310234493",
  appId: "1:1019310234493:web:0ee898df0e8af2b71a0a14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function writeUserData(name, message) {
  try {
    set(ref(db, 'users/' + name), {
      username: name,
      message: message,
    });
    alert("Mensjae enviado");
    location.reload();
  } catch (error) {
    alert(error)
  }
}

export async function getUsersData() {
  const dbRef = ref(db);
  try {
    const snapshot = await get(child(dbRef, `users/`));
    if (snapshot.exists()) {
      return snapshot.val(); // Retorna los datos correctamente
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
} 
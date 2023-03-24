import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: "AIzaSyDQNrNSJa5ghTKf3YR_q2k1pMux6e8PKso",
	authDomain: "hack-3f12c.firebaseapp.com",
	databaseURL: "https://hack-3f12c-default-rtdb.firebaseio.com",
	projectId: "hack-3f12c",
	storageBucket: "hack-3f12c.appspot.com",
	messagingSenderId: "120040383859",
	appId: "1:120040383859:web:1c61badf84ccb8202f9106",
	measurementId: "G-E52N85YY8S"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);

export const signInWithGoogle = () => {
	signInWithPopup(auth, new GoogleAuthProvider())
		.then(res => console.log('Sign In with Google done!'))
		.catch(err => console.log(err)
	);
}

export const signOut = () => {
	auth.signOut()
		.then(res => console.log('Successfully Sign Out.'))
		.catch(err => console.log(err)
	);
}
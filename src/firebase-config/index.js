import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { environments } from '../lib/constants'

import { collection, doc } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: environments.FIREBASE_CONFIG_API_KEY,
	authDomain: environments.FIREBASE_CONFIG_AUTH_DOMAIN,
	projectId: environments.FIREBASE_CONFIG_PROJECT_ID,
	storageBucket: environments.FIREBASE_CONFIG_STORAGE_BUCKET,
	messagingSenderId: environments.FIREBASE_CONFIG_MESSAGING_SENDER_ID,
	appId: environments.FIREBASE_CONFIG_APP_ID,
}

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()

const collections = {
	PLANNING_COLLECTION: collection(db, 'planning-tables'),
	SYSTEMS_COLLECTION: collection(db, 'voting-systems'),
}

const documents = {
	PLANNING_DOCUMENT_BY_ID: (planningId) => doc(db, 'planning-tables', planningId),
}

export { app, db, collections, documents }

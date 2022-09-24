import { addDoc } from 'firebase/firestore'
import { collections } from '../firebase-config'

const { PLANNING_COLLECTION } = collections

export const addPlanning = async (payload) => addDoc(PLANNING_COLLECTION, payload)

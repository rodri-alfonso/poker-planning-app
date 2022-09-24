import { useState, useEffect } from 'preact/hooks'
import { getDoc, getDocs } from 'firebase/firestore'
import { documents, collections } from '../firebase-config'

const { PLANNING_DOCUMENT_BY_ID } = documents
const { PLANNING_COLLECTION } = collections

export function usePlanning(planningId) {
	const [response, setResponse] = useState({
		loading: true,
		error: false,
		data: null,
	})

	useEffect(() => {
		getDoc(PLANNING_DOCUMENT_BY_ID(planningId))
			.then((doc) => {
				setResponse({
					data: doc.data(),
					loading: false,
				})
			})
			.catch(() => setResponse({ error: true }))
	}, [])

	return response
}

export function usePlannings() {
	const [response, setResponse] = useState({
		loading: true,
		error: false,
		data: [],
	})

	useEffect(() => {
		getDocs(PLANNING_COLLECTION)
			.then((docs) => {
				//revisar esto
				let planningsList = []
				docs.forEach((doc) => {
					planningsList.push({ ...doc.data(), id: doc.id })
				})

				setResponse({
					data: planningsList,
					loading: false,
				})
			})
			.catch(() => setResponse({ error: true }))
	}, [])

	return response
}

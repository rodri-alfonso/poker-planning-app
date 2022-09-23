function Input({ value, onChange, placeholder }) {
	return <input className='bg-pink p-4' type='text' value={value} onChange={onChange} placeholder={placeholder} />
}

export default Input

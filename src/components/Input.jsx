function Input({ value, onChange, placeholder }) {
	return (
		<input className='input w-full max-w-xs' type='text' value={value} onChange={onChange} placeholder={placeholder} />
	)
}

export default Input

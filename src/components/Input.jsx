function Input({ value, onChange, placeholder, className, ...rest }) {
	return (
		<input
			className={`input w-full max-w-xs ${className}`}
			type='text'
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			{...rest}
		/>
	)
}

export default Input

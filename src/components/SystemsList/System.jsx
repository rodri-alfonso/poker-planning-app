export default function System({ text, system, onClick, isSelected }) {
	function handleClick() {
		if (onClick) onClick()
	}

	return (
		<button
			onClick={handleClick}
			className={`tooltip tooltip-bottom btn ${isSelected ? 'btn-active' : ''}`}
			data-tip={system}
		>
			{text}
		</button>
	)
}

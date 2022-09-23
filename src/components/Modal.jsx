function Modal({ isOpen, onClose, children }) {
	if (!isOpen) return

	return (
		<dialog
			className='bg-gray-dark bg-opacity-60 grid place-items-center right-0 top-0 left-0 bottom-0 w-full h-full'
			open={isOpen}
		>
			<div className='bg-gray-light rounded-md p-5 max-w-md z-10'>
				{children}
				<button onClick={onClose}>Close</button>
			</div>
		</dialog>
	)
}

export default Modal

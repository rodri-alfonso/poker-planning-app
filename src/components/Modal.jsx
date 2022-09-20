function Modal({ isOpen, onClose }) {
	return (
		<dialog className='bg-pink absolute right-0 top-0 left-0 bottom-0 w-full h-full' open={isOpen}>
			<button onClick={onClose}>Close</button>
			<h1>I'm the Modal</h1>
		</dialog>
	)
}

export default Modal

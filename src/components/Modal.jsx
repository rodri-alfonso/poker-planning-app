export default function Modal({
	onClickPrimary,
	onClickSecondary,
	labelPrimary,
	labelSecondary,
	disabledPrimary,
	label,
	title,
	disabledLabel,
	description,
	children,
}) {
	return (
		<>
			<label disabled={disabledLabel} htmlFor='my-modal' className='btn modal-button'>
				{label}
			</label>

			<input type='checkbox' id='my-modal' className='modal-toggle' />
			<div className='modal'>
				<div className='modal-box'>
					{title && <h3 className='font-bold text-lg'>{title}</h3>}
					{description && <p className='py-4'>{description}</p>}
					<div className='pt-6'>{children}</div>
					<div className='modal-action'>
						{labelSecondary && (
							<label onClick={onClickSecondary} htmlFor='my-modal' className='btn'>
								{labelSecondary}
							</label>
						)}
						<label onClick={onClickPrimary} disabled={disabledPrimary} htmlFor='my-modal' className='btn btn-primary'>
							{labelPrimary}
						</label>
					</div>
				</div>
			</div>
		</>
	)
}

/*



*/

import React from 'react'
type SectionItemProps = {
	title: string
	description: string
	img: string
	btnText: string
}
function SectionItem({ title, description, img, btnText }: SectionItemProps) {
	return (
		<div
			data-theme="emerald"
			className="card lg:card-side shadow-xl max-w-3xl m-8"
		>
			<figure className="lg:ml-4">
				<img src={img} alt="Album" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p>{description}</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">{btnText}</button>
				</div>
			</div>
		</div>
	)
}

export default SectionItem

import Navbar from '@/components/Navbar'
import React from 'react'

type UpdatePageProps = {
	params: {}
}
function UpdatePage({ params }: UpdatePageProps) {
	console.log('the params', params)
	return (
		<div>
			<Navbar auth />
			this page is similar to the new/page.tsx file. they will likely share the
			same form component.
		</div>
	)
}

export default UpdatePage

import Navbar from '@/components/Navbar'
import { cookiesClient } from '@/utils/amplifyServertils'
import React from 'react'

async function ListPage() {
	const { data: messages } = await cookiesClient.models.Message.list()
	console.log('the messages', messages)
	return (
		<div>
			<Navbar auth />
			this is likely where you want to show a list of stuff from an API.
		</div>
	)
}

export default ListPage

import Navbar from '@/components/Navbar'
import { revalidatePath } from 'next/cache'
import React from 'react'

function NewThingPage() {
	async function createNewThing(formData: FormData) {
		'use server'

		const rawFormData = {
			customerId: formData.get('name'),
		}
		console.log(rawFormData)
		//todo:  mutate data

		// revalidate cache
		revalidatePath('/things')
	}
	return (
		<div>
			<Navbar auth />
			New thing. Probably want to add a reusable form here.
			<form action={createNewThing}>
				<input name="name" type="text" />
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}

export default NewThingPage

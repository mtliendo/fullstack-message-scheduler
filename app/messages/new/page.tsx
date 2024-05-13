import Navbar from '@/components/Navbar'
import authGetCurrentUserServer, {
	cookiesClient,
} from '@/utils/amplifyServertils'
import { revalidatePath } from 'next/cache'
import React from 'react'
import { redirect } from 'next/navigation'
import SubmitButton from '@/components/SubmitButton'
import { AuthUser } from 'aws-amplify/auth'

async function NewThingPage() {
	const user = (await authGetCurrentUserServer()) as AuthUser

	async function createNewThing(formData: FormData) {
		'use server'

		const rawFormData = {
			message: formData.get('message') as string,
			deliveryDate: formData.get('date') as string,
			email: formData.get('email') as string,
			timezone: formData.get('timezone') as string,
			title: formData.get('title') as string,
		}
		console.log(rawFormData)

		//mutate the data
		try {
			const res = await cookiesClient.mutations.createMessageSchedule(
				rawFormData
			)
			console.log(res)
		} catch (e) {
			console.log(e)
		}

		// revalidate cache and redirect to list page
		revalidatePath('/messages')
		redirect('/messages')
	}
	const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
	console.log(userTimeZone)
	return (
		<div>
			<Navbar auth />
			<p className="text-center">
				Messages will be sent based on your browsers current timezone.
			</p>

			<div className="flex justify-center content-center">
				<form action={createNewThing}>
					<div className="label">
						<span className="label-text">Enter a title</span>
					</div>
					<input
						required
						className="input input-accent"
						name="title"
						type="text"
					/>
					<div className="label">
						<span className="label-text">Enter a message</span>
					</div>
					<textarea required className="input input-accent" name="message" />
					<div className="label">
						<span className="label-text">Enter a delivery time</span>
					</div>
					<input
						required
						className="input input-accent"
						name="date"
						type="datetime-local"
					/>
					<input required type="hidden" name="timezone" value={userTimeZone} />
					<input
						required
						type="hidden"
						name="email"
						value={user?.signInDetails?.loginId}
					/>
					<div>
						<SubmitButton />
					</div>
				</form>
			</div>
		</div>
	)
}

export default NewThingPage

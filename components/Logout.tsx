'use client'

import { signOut } from 'aws-amplify/auth'
import { useRouter } from 'next/navigation'

export default function Logout() {
	const router = useRouter()

	return (
		<button
			onClick={async () => {
				await signOut()
				router.replace('/')
			}}
			className="px-2 text-lg"
		>
			Sign Out
		</button>
	)
}

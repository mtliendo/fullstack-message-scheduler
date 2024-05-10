import { createServerRunner } from '@aws-amplify/adapter-nextjs'
import outputs from '@/amplify_outputs.json'
import { cookies } from 'next/headers'
import { type Schema } from '@/amplify/data/resource'
import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api'
import { getCurrentUser } from 'aws-amplify/auth/server'

export const { runWithAmplifyServerContext } = createServerRunner({
	config: outputs,
})

export const cookiesClient = generateServerClientUsingCookies<Schema>({
	config: outputs,
	cookies,
})

export default async function authGetCurrentUserServer() {
	try {
		const currentUser = await runWithAmplifyServerContext({
			nextServerContext: { cookies },
			operation: (contextSpec) => getCurrentUser(contextSpec),
		})

		return currentUser
	} catch (error) {
		return { noUser: true }
	}
}

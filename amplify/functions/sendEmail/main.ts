import { type Schema } from '../../data/resource'
import { generateClient } from 'aws-amplify/data'
import { getMessage } from './graphql/queries'
import { configureAmplify } from './configureAmplify'

export const handler = async (event: { messageId: string }) => {
	await configureAmplify()
	const client = generateClient<Schema>({
		authMode: 'iam',
	})

	const data = await client.graphql({
		query: getMessage,
		variables: { id: event.messageId },
	})

	console.log('the data from the request', data)
	// your function code goes here
	return 'Hello, World!'
}

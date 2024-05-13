import { type ClientSchema, a, defineData } from '@aws-amplify/backend'
import { sendSESEmailFunc } from '../functions/sendEmail/resource'
import { title } from 'process'

const schema = a
	.schema({
		Message: a
			.model({
				message: a.string().required(),
				//2024-05-09T18:58 is what I need but a.datetime() needs ISO (with timezone)
				deliveryDate: a.string().required(),
				email: a.email().required(),
				timezone: a.string().required(),
				title: a.string().required(),
			})
			.authorization((allow) => [allow.owner()]),
		createMessageSchedule: a
			.mutation()
			.arguments({
				message: a.string().required(),
				deliveryDate: a.string().required(),
				email: a.email().required(),
				timezone: a.string().required(),
				title: a.string().required(),
			})
			.returns(
				a.customType({
					message: a.string().required(),
				})
			)
			.authorization((allow) => [allow.authenticated()])
			.handler([
				a.handler.custom({
					dataSource: a.ref('Message'),
					entry: './createMessage.js',
				}),
				a.handler.custom({
					dataSource: 'ebSchedulerDS',
					entry: './scheduleMessage.js',
				}),
			]),
	})
	.authorization((allow) => [allow.resource(sendSESEmailFunc).to(['query'])])

export type Schema = ClientSchema<typeof schema>

export const data = defineData({
	schema,
	authorizationModes: {
		defaultAuthorizationMode: 'userPool',
	},
})

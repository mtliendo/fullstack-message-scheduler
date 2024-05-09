'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Authenticator } from '@aws-amplify/ui-react'
import { redirect } from 'next/navigation'
import React from 'react'

function AuthPage() {
	return (
		<>
			<div className="h-screen flex flex-col">
				<Navbar />

				<div className="flex-1 content-center">
					<Authenticator>
						{() => {
							// I'm sure there's some slick way of doing this, but whatevs
							redirect('/things')
						}}
					</Authenticator>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default AuthPage

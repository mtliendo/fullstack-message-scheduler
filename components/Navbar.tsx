import Link from 'next/link'
import React from 'react'
import Logout from './Logout'

function Navbar({ auth }: { auth?: boolean }) {
	return (
		<div className="navbar">
			<div className="flex-1">
				<Link href="/" className="btn btn-ghost text-2xl">
					Focus Otter Scheduler
				</Link>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link href={'/messages'} className="text-lg">
							View Messages
						</Link>
					</li>
					<li>
						<Link href={'/messages/new'} className="text-lg">
							Create New Message
						</Link>
					</li>
					{auth && (
						<li>
							<Logout />
						</li>
					)}
				</ul>
			</div>
		</div>
	)
}

export default Navbar

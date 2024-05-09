import Link from 'next/link'
import React from 'react'
import Logout from './Logout'

function Navbar({ auth }: { auth?: boolean }) {
	return (
		<div className="navbar">
			<div className="flex-1">
				<Link href="/" className="btn btn-ghost text-2xl">
					Focus Otter
				</Link>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link href={'/things'} className="text-lg">
							List Things
						</Link>
					</li>
					<li>
						<Link href={'/things/new'} className="text-lg">
							New Thing
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

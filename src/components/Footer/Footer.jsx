import React from 'react'
import Logo from '../Logo'
import { Link } from 'react-router-dom'

function Footer() {

	let date = new Date()

	return (
		<section className="relative overflow-hidden py-10 bg-cornsilk border border-t-2 border-tiger-yellow">
			<div className="relative z-10 mx-auto max-w-7xl px-4  ">
				<div className="-m-6 flex flex-wrap ">
					<div className=" p-6 md:w-1/2 lg:w-5/12">
						<div className="h-full">
							<div className="mb-4 inline-flex items-center">
								<Logo width='300' />
							</div>
						</div>
					</div>
					<div className="w-full p-6 md:w-1/2 lg:w-2/12">
						<div className="h-full">
							<h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
								Company
							</h3>
							<ul>
								<li className="mb-4">
									<a
										className=" text-base font-medium text-gray-900 hover:text-gray-700"
										href='#features'
									>
										Features
									</a>
								</li>
								<li className="mb-4">
									<a
										className=" text-base font-medium text-gray-900 hover:text-gray-700"
										href='#pricing'
									>
										Pricing
									</a>
								</li>
								<li className="mb-4">
									<Link
										className=" text-base font-medium text-gray-900 hover:text-gray-700"
										to="/"
									>
										Affiliate Program
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="w-full p-6 md:w-1/2 lg:w-3/12">
						<div className="h-full">
							<h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
								Legals
							</h3>
							<ul>
								<li className="mb-4">
									<Link
										className=" text-base font-medium text-gray-900 hover:text-gray-500"
										to="/terms"
									>
										Terms &amp; Conditions
									</Link>
								</li>
								<li className="mb-4">
									<Link
										className=" text-base font-medium text-gray-900 hover:text-gray-500"
										to="/terms"
									>
										Privacy Policy
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="w-full p-6 md:w-1/2 lg:w-2/12">
						<div className="h-full">
							<div>
								<p className="text-sm text-tiger-yellow">
									&copy; Copyright {date.getFullYear()}. <br />All Rights Reserved by Drone.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Footer
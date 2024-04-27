import React from 'react'
import { Button } from '../components'
import { Link } from 'react-router-dom'

function LandingPage() {
    return (
        <>
            <div className=' grid grid-cols-2 sm:grid-cols-3'>
                <img src="src\assets\blogwrite-landing.png" alt="blogwrite-logo" className='col-span-2 sm:col-span-1' />
                <div className='col-span-2 sm:mt-32'>
                    <p className=' my-3 text-2xl font-semibold text-center sm:text-3xl' >Write Puns & Paragraphs ...<br className='sm:hidden' /> <span className='text-tiger-yellow'>Where Words Get Cozy</span></p>
                    <p className=' text-lg font-semibold text-center my-3'>Because life needs more 
                    <a href="https://www.google.com/search?sca_esv=6512afbb6cf57869&sca_upv=1&q=ellipsis&spell=1&sa=X&ved=2ahUKEwiymtuQ1eKFAxV2yDgGHYznAyEQBSgAegQIBhAC&biw=1463&bih=746&dpr=1.75" target='_blank' className='underline decoration-tiger-yellow'> ellipses…</a> 😄</p>
                    <Link to='/signup' className='flex justify-center'>
                        <Button className='my-3 text-xl '> Get started</Button>
                    </Link>
                </div>

                <section id="features" className="col-span-2 sm:col-span-3 py-10 bg-cornsilk rounded-lg sm:py-16 lg:py-24">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12">
                            <div className="transition-all duration-200 bg-white hover:shadow-xl">
                                <div className="py-10 px-9 rounded-md">
                                    <svg className="w-16 h-16 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="cornsilk" viewBox="0 0 24 24" stroke="#bc6c25ff">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <h3 className="mt-8 text-lg font-semibold text-black">Control</h3>
                                    <p className="mt-4 text-base text-gray-600">You are in control. Write articles, blogs or whatever. Choose to keep them public or private, and update them on the go</p>
                                </div>
                            </div>

                            <div className="transition-all duration-200 bg-white hover:shadow-xl">
                                <div className="py-10 px-9 rounded-md">
                                    <svg className="w-16 h-16 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="cornsilk" viewBox="0 0 24 24" stroke="#bc6c25ff">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                    </svg>
                                    <h3 className="mt-8 text-lg font-semibold text-black">Filter</h3>
                                    <p className="mt-4 text-base text-gray-600">Dedicated section to view or edit all the posts that you have created. Signup to see more</p>
                                </div>
                            </div>

                            <div className="transition-all duration-200 bg-white hover:shadow-xl">
                                <div className="py-10 px-9 rounded-md">
                                    <svg className="w-16 h-16 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="cornsilk" viewBox="0 0 24 24" stroke="#bc6c25ff">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    <h3 className="mt-8 text-lg font-semibold text-black">Secured </h3>
                                    <p className="mt-4 text-base text-gray-600">Your thoughts are safe with Blogwrite. Trust me fam !</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="col-span-2 sm:col-span-3 py-10 bg-white sm:py-16 sm:text-center lg:py-24 ">
                    <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>

                        <div className="flow-root mt-12 sm:mt-16">
                            <div className="divide-y divide-gray--200 -my-9">
                                <div className="py-9">
                                    <p className="text-xl font-semibold text-black">How to create an account?</p>
                                    <p className="mt-3 text-base text-gray-600">Creating an account on a website is like baking a digital cake – .</p>
                                    <p className="mt-3 text-base text-gray-600">In the registration form, pour in your email address. Stir gently to avoid typos. <br />
                                        Add the password. Remember, it’s not “password123” – that’s like serving a plain rice cake at a party. <br />
                                        Sprinkle your chosen username. Avoid names like “JohnDoe123” – be more creative. How about “CaptainQuirk”?.</p>
                                </div>

                                <div className="py-9" id="pricing">
                                    <p className="text-xl font-semibold text-black">What payment method do you support?</p>
                                    <p className="mt-3 text-base text-gray-600">Currenty accepting only cakes ! <br />
                                        However you can negotiate it own to a toffee. <br />
                                        kidding...ITS FREE Y'ALL</p>
                                </div>

                                <div className="py-9">
                                    <p className="text-xl font-semibold text-black">How do you provide support?</p>
                                    <p className="mt-3 text-base text-gray-600">
                                        Support can be found at your nearest and dearest friend. Alternatively , contact me via github. <br />
                                        Please do not sob in the blog articles for not getting enough of it
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Link to='/signup' className='flex justify-center col-span-3'>
                    <Button className=' my-3 mb-10'> Whatcha waitin for ?</Button>
                </Link>

            </div>
        </>
    )
}

export default LandingPage


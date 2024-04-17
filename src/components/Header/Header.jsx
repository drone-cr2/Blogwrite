import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

// a very user specific component (optional) as different things are displayed if user is logged in


function Header() {

  //firstly find out if user is logged in or not through state
  const authStatus = useSelector((state) => state.auth.status)

  //usually navbar is an array of objects(containing some related values) which is looped over, coz its east to add/remove items
  //(a way of coding PRoDucTioN gRadE)
  const navigate = useNavigate() // takes an URL and navigates to it, thats it
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus, // why to show login if user is already logged in
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    }
  ]

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container childen={
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/' >
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex ml-auto'>

            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                    onClick={() => navigate(item.slug)}>
                    {item.name}</button>
                </li>
              ) : (null)
            )}

            {authStatus && (<li>
              <LogoutBtn className={'inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'} />
            </li>)}
            {/* syntax {variable && (jsx)}
            jsx is always true-thy value, hence if the variable is true then the jsx will be rendered
            conditional rendering syntax */}

          </ul>
        </nav>
      } />
      {/* close container */}
    </header>
  )
}

export default Header
import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

// a very user specific component (optional) as different things are displayed if user is logged in


function Header() {

  //firstly find out if user is logged in or not through state
  const authStatus = useSelector((state) => state.auth.status)
  const userData = useSelector(state => state.auth.userData)

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
      name: "My Posts",
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
    <header className='py-2 shadows bg-cornsilk border border-b-2 border-tiger-yellow'>
      <nav className='flex'>
        <div className='ml-16 hidden sm:inline-block'>
          <Link to='/' >
            <Logo width='70px' />
          </Link>
        </div>
        <ul className='flex items-center mx-auto '>

          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <button
                  className='inline-bock px-6 py-2 duration-200 hover:bg-earth-yellow rounded-full'
                  onClick={() => navigate(item.slug)}>
                  {item.name}</button>
              </li>
            ) : (null)
          )}
        </ul>

        {/* syntax {variable && (jsx)}
          jsx is always true-thy value, hence if the variable is true then the jsx will be rendered
          conditional rendering syntax */}
        {authStatus && (
          <div className='mr-16 flex items-center'>
            <span className='mr-2  font-semibold text-tiger-yellow hidden sm:inline-block'>{userData.name}</span>
            <img src="src\assets\account_circle_FILL0_wght400_GRAD0_opsz24.svg" alt="person-off" width="30px" className='hidden sm:inline-block'/>
            <LogoutBtn className={'inline-bock px-6 py-2 duration-200 hover:bg-tiger-yellow hover:text-cornsilk rounded-full'} />
          </div>
        )}
        {!authStatus && (
          <img src="src\assets\person_off_FILL0_wght400_GRAD0_opsz24.svg" alt="person-off" width="30px" className='mr-16' />
        )}
      </nav>
    </header>
  )
}

export default Header
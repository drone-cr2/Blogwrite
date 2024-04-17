import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/Auth'
import { useEffect, useState } from 'react';
import { login, logout } from "./store/authSlice"
import { Header,Footer } from './components/index';
import { Outlet } from 'react-router-dom';

function App() {

  const [loading, setLoading] = useState(true)
  //the loading state is used to show loading screen when some database request is being processed
  //initial value true coz we use useEffect to load data as the app loads

  const dispach = useDispatch()

  // on loading the application, we will ask BaaS for user, if it exists then we will store userData via "login" action
  // else if the user does not exist then we will dispatch logout action
  //this way the state/store always remains updated
  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispach(login(userData));
        }
        else {
          dispach(logout());
        }
      }).catch((error) => {
        console.log("error in useEffect in getting data ", error);
      }).finally(() => {
        setLoading(false);  // the work is done finally
      });
  }, [])

  return !loading ? (
    <>
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div className='w-full block'>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  ) : (
    <>
      <h1>loading...</h1>
    </>
  )
}

export default App

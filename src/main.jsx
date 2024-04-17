import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthLayout } from './components/index.js'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import AddPostPage from './pages/AddPostPage'
import AllPostsPage from './pages/AllPostsPage'
import EditPostPage from './pages/EditPostPage'
import Post from './pages/Post'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/Login",
        element: (
          <AuthLayout authentication={false} children={
            <LoginPage />
          } />
        )
      },
      {
        path: "/Signup",
        element: (
          <AuthLayout authentication={false} children={
            <SignupPage />
          } />
        )
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication={true} children={
            <AllPostsPage />
          } />
        )
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication={true} children={
            <AddPostPage />
          } />
        )
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication={true} children={
            <EditPostPage />
          } />
        )
      },
      {
        path: "/post/:slug",
        element: (
          <Post />
        )
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

### links to the documentation of tech used

https://appwrite.io/docs/quick-starts/react 
npm install appwrite@13.0.2

https://redux-toolkit.js.org/introduction/getting-started
npm install @reduxjs/toolkit
npm install react-redux

https://www.npmjs.com/package/react-router-dom
npm i react-router-dom

https://www.npmjs.com/package/tinymce-react
npm i @tinymce/tinymce-react

https://react-hook-form.com/get-started
npm install react-hook-form

https://www.npmjs.com/package/html-react-parser
npm i html-react-parser

### env
.ev to be in root directory and to be ignored from git
access to env is different ... in case of vite its https://vitejs.dev/guide/env-and-mode

###conf.js
why it exists ?....coz its easy to access env using it and helps get String vlaues coz we parse it that way
production grade shit
vite syntax : (import.meta.env.VITE_APPWRITE_URL)
our syntax : (conf.appwriteURL)

### service
basically a class (we have it in the appwrite folder)
we declare all the backend related service logic there and expose it via some methods
due to this the remaining app need not care about the backend services 
also it decouples and abstracts shit ... helping in avoiding vendor locking coz what happens under the hood is only known by this class/file
also once the logic is written, you can kinda use the same logic in other apps too as the services used remain same

this applies to all services like auth, database, collection

### redux store
pretty simple , 
the auth slice contains reducers used to know if user if logged in and set data as per it in the store

### components
we take component specific approach...smol smol things are components


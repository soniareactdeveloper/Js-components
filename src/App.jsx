
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Help from './pages/Help'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'



function App() {
 const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/help' element={<Help/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='*' element={<NotFound/>} />
    </Route>
  )
 )

  return (
    <>
     <RouterProvider router={route}/>




    </>
  )
}

export default App

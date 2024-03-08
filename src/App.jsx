import { Routes, Route } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import HomePage from './pages/Homepage'
import BookListPage from './pages/BookListPage'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import About from './components/About'
import AddBookPage from './pages/AddBookPage'



function App() {

  return (

    <main>
    <Navbar/>
    <About />
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route> 
        <Route path="/booklistpage" element={<BookListPage/>}></Route>
        <Route path="/addbookpage" element={<AddBookPage/>}></Route>
      </Routes>
    </main>
  )
}

export default App

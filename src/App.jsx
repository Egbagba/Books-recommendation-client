import { Routes, Route } from 'react-router-dom';
import './App.css'
import { useState } from 'react';
import Signup from './pages/Signup'
import BookListPage from './pages/BookListPage'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import About from './components/About'
import AddBookPage from './pages/AddBookPage'
import BookListDetailPage from './pages/BookListDetailPage'
import ErrorHandling from './pages/ErrorHandling'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import DeleteBookPage from './pages/DeleteBookPage'
import Footer from './components/Footer'
import UserPage from './pages/UserPage'
import UpdateBookPage from './pages/UpdateBookPage';
import HomePage from './pages/Homepage'

function App() {
  const [user, setUser] = useState(true);

  return (
    <main>.
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path="/"
          element={user ? <UserPage user={user} /> : <HomePage />}
        />
        <Route path="/errorhandling" element={<ErrorHandling />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/booklistpage" element={<BookListPage />} />
        <Route path="/books/:id" element={<BookListDetailPage />} />
        <Route path="/addbookpage" element={<AddBookPage />} />
        <Route path="/deletebookpage/:bookId" element={<DeleteBookPage />} />
        <Route path="/updatebookpage/:id" element={<UpdateBookPage />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="*" element={<ErrorHandling />} />
      </Routes>
    </main>
  );
}

export default App;

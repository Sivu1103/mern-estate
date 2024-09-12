import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <route path="/" element={<Home />} />
      <route path="/sign-in" element={<SignIn />} />
      <route path="/sign-up" element={<SignUp />} />
      <route path="/about" element={<About />} />
      <route path="/profile" element={<Profile />} />
    </Routes>
    </BrowserRouter>
  )
}


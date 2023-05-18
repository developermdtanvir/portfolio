import 'aos/dist/aos.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Routes/Main';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Project from './components/Project';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/project',
          element: <Project />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    }
  ])
  return (
    <div style={{ backgroundColor: 'rgba(0, 0, 0,1.5)' }}>
      <div className=' container mx-auto'>
        <RouterProvider router={router} ></RouterProvider>
      </div>
    </div>
  )
}

export default App;

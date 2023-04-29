import { Suspense } from 'react'
import './App.css'
import Mutable from './components/Mutable'
import Quote from './components/swr/Quote'

function App() {
  return (
    <div>
      <Mutable />
      <Suspense
        fallback={<h1>Loading.........</h1>}
      ><Quote /></Suspense>
    </div>
  )
}

export default App

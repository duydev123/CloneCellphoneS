import Home from './homepage/Home'
import { Routes,Route } from 'react-router-dom'
import ListDisplay from './components/ListDisplay/ListDisplay'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/card' element={<ListDisplay />} />
    </Routes>
  )
}

export default App

import './App.css'
import Authentication from './pages/Authentication'
import HomePage from './pages/HomePage'

function App() {
  const user = true
  return (
    <div>
      {
        user ? <HomePage /> : <Authentication />
      }
    </div>
  )
}

export default App

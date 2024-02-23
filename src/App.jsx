import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/MainContent/Main'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Toaster></Toaster>
      <Header></Header>
      <Main></Main>
    </>
  )
}

export default App

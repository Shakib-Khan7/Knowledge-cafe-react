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
      <div className='container'>
      <h2>Difference between props and state</h2>
      <p>Props are inputs to a react component that are passed from its parent component.Props are immutable</p>
      <p>State is used to represent the internal state of a component and can be changed by the component itself.It is mutable and changes triggers a re-render of the component only to update the ui</p>
      <h2>How does use state works</h2>
      <p>useState is a react hook.It returns an array with two element.First element is the current state value and second element is a function used to update the value.It stores value that could change in future and reassign the value after changes.It re-renders the component after every changes.</p>
      <h2>Uses of useEffect</h2>
      <p>Update something after a condition which is dependencies</p>
      <p>useEffect can be used to check the authentication status when a component mounts and take appropriate actions.</p>
      <h2>how react works</h2>
      <p>React application are built using components.component is reusable,similar in look different in data,self contained piece of code that can be composed to create complex user interfaces
        <br />
        react uses virtual DOM to efficiently update the ui.
        <br />
        after a change request react updates actual dom only where the changes are required and not the whole page
        <br />React is unidirectional means data is passed from parent component to child component
      </p>
      </div>
    </>
  )
}

export default App

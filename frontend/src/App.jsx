import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes,setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((res)=>{
      console.log(res.data)
      setJokes(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <>
      <h1>Chai aur fullstack</h1>
      <p>Jokes: {jokes.length}</p>

      {
        jokes.map((joke)=>(
          <div key={joke.id}>
            <h3>{joke.id}</h3>
            <h3>{joke.setup}</h3>
            <h3>{joke.punchline}</h3>
          </div>
        ))
      }
    </>
  )
}

export default App

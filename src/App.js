import React from 'react'
import Joke from './components/Joke'
import Jokesdata from './components/Jokesdata'
const App = () => {
  const Jokeelement = Jokesdata.map((joke,index)=>{
    return <Joke setup={joke.setup} Punchline={joke.punchline}/>
  })
  return (
    <>
      <h1>Jokes</h1>
      {Jokeelement}
    </>
  )
}

{/* <Joke
  setup="I got my daughter a fridge for her birthday."
/>
<Joke
  Punchline="I can't wait to see her face light up when she opens it."
/>
<Joke
  setup="I got my daughter a fridge for her birthday."
  Punchline="I can't wait to see her face light up when she opens it."
/>
<Joke
  setup="What's the best thing about Switzerland?"
  Punchline=" I don't know, but the flag is a big plus!"
/>
<Joke
  setup="How did the hacker escape the police?"
  Punchline=" He just ransomware!"
/>
<Joke
  setup=" Why don't pirates travel on mountain roads?"
  Punchline="Scurvy."
/>
<Joke
  setup="Why do bees stay in the hive in the winter?"
  Punchline="Swarm."
/> */}
export default App
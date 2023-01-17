import React from 'react'

const Joke = (props) => {
  return (
    <>
        <div>
            {props.setup && <h2>Setup-{props.setup}</h2>}
            <p style={{display: props.Punchline ? "block" : 'none'}}>Punchline-{props.Punchline}</p>
            <hr/>
        </div>
    </>
  )
}

export default Joke
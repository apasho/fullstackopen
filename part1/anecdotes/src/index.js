import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  console.log(props)
  return (
      <button onClick={props.button.onClick}>
        {props.button.name}
      </button>      
  )
}

const App = () => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(6).fill(0))
  const setNextAnecdote = (value) => setSelected(value)  
  const setVoteAt = (value) => setPoints(value)
  console.log(selected, points)
  
const button = {
     name : 'next anecdote',
     onClick: () => setNextAnecdote(Math.floor((Math.random() * 5) + 0))
   }
const vote_button = {
     name : 'vote',
     onClick: () => setVoteAt(AddPoint(selected))
   }
   
const AddPoint = (index) => {
    let copy = [...points];
    copy[index]++;
      return copy;
   }   
    
   const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

  const most_popular = (points) => {
    var max = 0
    var max_index = 0
    var i = 0
    while(i < points.length) {
      if(points[i] > max) {
        max = points[i] 
        max_index = i
      }  
      i++  
    }
    return max_index 
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
	  <Button button={vote_button}/>
      <Button button={button}/>
      <h2>Anecdote with the most votes</h2>
      <p>{anecdotes[most_popular(points)]}</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
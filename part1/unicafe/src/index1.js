import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  console.log(props)
  return (
      <button onClick={props.onClick}>
        {props.name}
      </button>      
  )
}

const Feedback = (props) => {
  console.log(props)
  const all = props.feedback.good_count + props.feedback.neutral_count + props.feedback.bad_count
  const average = (props.feedback.good_count + props.feedback.neutral_count + props.feedback.bad_count)/3
  var positive = 0;
  if((!isNaN(props.feedback.good_count/all)*100))
    positive = (props.feedback.good_count/all)*100;
  
  //if(positive == ) 
  return (
    <>
      <h2>{props.feedback.title}</h2>
      <Button 
        onClick={props.feedback.buttons[0].onClick}      
        name={props.feedback.buttons[0].name}/>
      <Button 
        onClick={props.feedback.buttons[1].onClick}      
        name={props.feedback.buttons[1].name}/>
      <Button 
        onClick={props.feedback.buttons[2].onClick}      
        name={props.feedback.buttons[2].name}/>
      <h2>{props.feedback.subtitle}</h2>
      <p>good {props.feedback.good_count}</p>
      <p>neutral {props.feedback.neutral_count}</p>
      <p>bad {props.feedback.bad_count}</p>
      <p>all {all}</p>
      <p>average {average.toFixed(2)}</p>
      <p>positive {positive.toFixed(0)}%</p>
    </>  
  )
}



const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const setToGood = (value) => setGood(value)
  const setToNeutral = (value) => setNeutral(value)
  const setToBad = (value) => setBad(value)
  
const feedback = {
    title: 'give feedback',
    subtitle: 'statistics',
    good_count : good,
    neutral_count : neutral,
    bad_count : bad,
    buttons: [
      {
        name: 'good', 
        onClick: () => setToGood(good + 1)
      },
      {
        name: 'neutral',
        onClick: () => setToNeutral(neutral + 1)
      },
      {
        name: 'bad',
        onClick: () => setToBad(bad + 1)
      }
    ]
  }
  

  return (
    <div>
      <Feedback feedback={feedback} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
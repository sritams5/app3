import React from "react"

function Joke(props){
  return(
    <div>
      <h3 style={{display:props.question ? "block":"none",color:!props.punchLine && "green"}}>Question: {props.question}</h3>
      <h3 style={{display:!props.punchLine && "none",color:!props.question && "red"}}>Answer: {props.punchLine}</h3>
      <hr/>
    </div>
  );
}

export default Joke

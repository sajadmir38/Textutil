import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  // Function for converting text to UpperCase
const handleUpCase=()=>{
let newText = text.toUpperCase();
setText(newText)
props.showAlert("Coverted to Upper Case","success")
}
    // Function for converting text to LowerCase
    const handleLoCase=()=>{
      let newText = text.toLowerCase()
      setText(newText)
      props.showAlert("Coverted to Lower Case","success")
      }
    // Function for clearing the text
    const handleClearCase=()=>{
      let newText = ''
      setText(newText)
      }
    // Function for copy the text
    const handleCopyCase=()=>{ 
      navigator.clipboard.writeText(text)
      }
       // Function for copy the text
    const handlePastCase=()=>{ 
      var pretext= document.getElementById('myBox');
      navigator.clipboard.readText().then((text)=>{
          setText(pretext.value + text)
      })
      }
  // delecration of Text change function
  const handleTextChange=(event)=>{
    setText(event.target.value)
  }

  //Function to Remove Extra spaces
  const handleRemoveCase=()=>{
    let str= text.replace(/ +/g, " ");
    setText(str.split(" ").join(" "))

  }
    const [text, setText]=useState("Enter your text here")

  
  // Function to check string length
  const strnLength=()=>{
  const newStrn=text.trim()
  if(newStrn.trim().length===0)
  {
     return(0)
  }
  else
  {
     return(newStrn.split(' ').length)

  }

  }
    return (
      <>
      <div>
            <h1 style={{color:props.mode==='dark'?'white':'black'}}> {props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control"  id="myBox" rows="8" value={text}  onChange={handleTextChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
          <button className="btn  btn-primary my-3 mx-3 " style={{border: '2px solid white'}}  onClick={handleUpCase} >Convert to Upper</button>
          <button className="btn  btn-primary  mx-3" style={{border: '2px solid white'}} onClick={handleLoCase}>Convert to Lower</button>
          <button className="btn  btn-primary  mx-3" style={{border: '2px solid white'}} onClick={handleClearCase}>Clear</button>
          <button className="btn  btn-primary  mx-3" style={{border: '2px solid white'}} onClick={handleCopyCase}>Copy Text</button>
          <button className="btn  btn-primary  mx-3" style={{border: '2px solid white'}} onClick={handlePastCase}>Past Text</button>
          <button className="btn  btn-primary  mx-3" style={{border: '2px solid white'}} onClick={handleRemoveCase}>Remove Extra Spaces</button>
      </div>
      </div>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Text Summery</h2>
      <p>Words Count = {strnLength()}</p>
      <p>Number of Characters = {text.trim().length}</p>
      <p> Estimated Time to Read The Text ={text.split(' ').length * 0.008} Minutes </p>
      <h2>Text Preview</h2>
      <p>{text}</p>
      </div>
     </>
    )
    
  }



  TextForm.propType={
              heading: PropTypes.string.isrequired,
              mode:  PropTypes.string.isrequired
  }
  
  TextForm.defaultProps={
    heading: "Default text"
    
  }
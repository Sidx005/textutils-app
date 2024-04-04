import React,{useEffect, useState} from 'react'

export default function TextForm(props) {
const [text,setText]=useState('');

// useEffect(()=>{setText("Hello");
// },[]);

const handleUpClick=()=>{
    // console.log("uppercase" + text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");

}
const handleOnChange=(event)=>{
    // console.log("uppercase");
    setText(event.target.value)
}
const onLowercase=()=>{
  // let lowerText=text.toLocaleLowerCase();
  // setText(text.toLocaleLowerCase())
  let lowerText=text.toLocaleLowerCase();
  setText(lowerText);
  props.showAlert("Converted to lowercase","success");

}
const cleartext=()=>{
  // let lowerText=text.toLocaleLowerCase();
  // setText(text.toLocaleLowerCase())
  setText(" ");
}
const copyText = () => {
  var cpytxt=document.getElementById('myBox');
  cpytxt.select();
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log('Text copied to clipboard successfully');
    })
    .catch((error) => {
      console.error('Failed to copy text to clipboard:', error);
    });
    props.showAlert("Copied to clipboard","success");
};

const boldText = () => {
  const textarea = document.getElementById('myBox');
  const isBold = textarea.style.fontWeight === 'bold';
  if(isBold){
    textarea.style.fontWeight='normal';

  }else{
    textarea.style.fontWeight='bold';
  }
};
const reverse=()=>{
  let reversetext='';
  for(let i=text.length-1;i>=0;i--){
      reversetext+=text[i];
  }

  setText(reversetext);
}
function audio() {
  if (text) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }else{
    const utter= new SpeechSynthesisUtterance("First enter text");
    window.speechSynthesis.speak(utter);
  }
  
}
return (
   <>
    <div className='container'  >
  <h1>{props.heading}</h1>
<div className="mb-3" >
    <textarea  className="form-control" placeholder='Enter text' value={text} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
      </div>
     <div className=" container buttons ">
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to  uppercase</button>
      <button className="btn btn-primary my-1 mx-5" onClick={onLowercase}>Convert to  lowercase</button>
      <button className="btn btn-primary my-1 mx-1 w-100px " onClick={boldText} id='bold'><b>B</b></button>
      <button className="btn btn-primary my-1 mx-1 w-100px " onClick={cleartext} id='clr'>clear</button>
      <button className="btn btn-primary my-1              " onClick={copyText}>Copy</button>
      <button className="btn btn-primary my-1 mx-1"  onClick={reverse}>Reverse</button>
      <button className="btn btn-primary my-1 mx-1" onClick={audio}><span role="img" aria-label="speaker">🔊</span></button>      
    </div>
    </div>
    <div className="container">
      <h1>Your text summary</h1>
      <p>{text.split(" ").filter((a)=>{return a.length!=0}).length} words and {text.length} characters</p>
      <p>{(1/125)*(text.split(/\s+/).length)} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter some text to preview it"}</p>
    </div>
    </>
  )
}

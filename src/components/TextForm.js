import React,{ useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");
    const upper = ()=>{
        console.log("btn clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const lower = ()=>{
        console.log("btn clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clear = ()=>{
      setText('');
    }
    const capitalizeFirstChar = ()=>{
      let newText = text.toString().split('. ');
      let ans = "";
      for (let i = 0; i < newText.length; i++) {
        // Capitalize the first character and concatenate the rest of the string
        ans += newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
        if(i !== newText.length-1)
          ans += '. ';
      }
      setText(ans);
    }
    const valueOnChange = (event)=>{
        console.log("Onchange occured");
        setText(event.target.value);
    }
  return (
    <>
    <div style={{color:props.mode ==='light'?'black':'white'}}>
      <div>
          <h1>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" value={text} style={{backgroundColor:props.mode ==='light'?'lightgrey':'light'}} onChange={valueOnChange} id="box1" rows="8"></textarea>
          </div>
          <button className="btn btn-primary my-3" onClick={upper}>Convert to UpperCase</button>
          <button className="btn btn-primary my-3 mx-2" onClick={lower}>Convert to LowerCase</button>
          <button className="btn btn-primary my-3 mx-2" onClick={clear}>Clear Text</button>
          <button className="btn btn-primary my-3 mx-2" onClick={capitalizeFirstChar}>Capitalize First Character</button>

      </div>
      <div className='container py-2 px-0'>
        <h3> Your text summary</h3>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Words & {text.length} Characters.</p>
        <p>{0.008 * text.split(" ").length} minutes read.</p>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </div>
    </>
  )
}

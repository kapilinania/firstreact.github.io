import React, {useState} from 'react'

export default function Textfrom(props) {
    const handleclick =()=>{
        //console.log("uppercase is clickerd"+text);
        let newText  = text.toUpperCase();
        console.log(newText)
        setText(newText)
    }
    const handlovclick =()=>{
        //console.log("uppercase is clickerd"+text);
        let newText  = text.toLowerCase();
        console.log(newText)
        setText(newText)
    }
    const handleonchange =(event)=>{
        console.log("handleonchange is clickerd")
        setText(event.target.value);
    }
    const [text, setText] = useState('enter your text');
   // setText("i am chnageing");
    return (
        <>
               
                <div className='container'>
                    <div className='row'>
                        <h3>{props.heading}</h3>
                        <div className="input-group pt-4">
                            <textarea className="form-control" onChange={handleonchange} value={text} id='mybox' aria-label="With textarea" rows="8"></textarea>
                        </div>
                        </div>
                        <button type='button' className='btn btn-warning mt-3  mx-2' onClick={handleclick}>Click text to uppercase</button>
                        <button type='button' className='btn btn-warning mt-3 mx-2' onClick={handlovclick}>Click text to lovercase</button>

                
                </div>
                <div className='container my-3'>
                    <h3>your paragraph summart</h3>
                    <p>{text.split(" ").length} character AND {text.length} WORD</p>
                    <p>{0.008 * text.split(" ").length }Minute read</p>
                    <h3>Preview</h3>
                    <p>{text}</p>
                </div>

        </>
    )
}

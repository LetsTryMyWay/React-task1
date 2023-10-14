import React , {useState}  from 'react'

export default function Textform(props) {

    const handleOnChange = (event)=>
    {
        // console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState("Start from here");


  return (
    <>
    <div class = "container">
     <h1>{props.name}</h1>
<div class="mb-3">
  <textarea class="form-control" value={text}  onChange = {handleOnChange}  id="mine" rows="8"></textarea>
</div>

    </div>

    <div class = "conatainer my-3<> ">
          <p> {text.split(" ").length}  words  and {text.length} characters</p>
    </div>

    </>
  )
}





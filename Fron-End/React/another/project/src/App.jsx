import { useState } from 'react'

import './App.css'

function App() {
  const [file, setfile] = useState(null)
  
  const handelChange=(e)=>{
    console.log(e.target.files);

    setfile(URL.createObjectURL(e.target.files[0]))
   
    
  }
  return (
    <section>
    
      <div>
        <input onChange={handelChange} type="file" name="" id="" />
         {file && <img src={file} alt="Uploaded preview" />}
      </div>
    </section>
  )
}

export default App

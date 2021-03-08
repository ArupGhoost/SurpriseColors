import React, { useState } from 'react'
import './Color.css'
import Color1 from './Color1';

function Color() {
     const white = 'white';
     const [bg1, setBg] = useState(white);
     const [name,setName] = useState('#FFFF00')

     const backChange1 = () =>{
       let newBg = '#FFFF00';
       setBg(newBg);
       setName('Yellow')
     }
     const prevchange1 = () =>{
         setBg(white);
         setName('white')
     }
     const white1 = 'white';
     const [bg2, setbg2] = useState(white1)
     const [name2, setName2] = useState('#008000')

     const backChange2 = () => {
       let newBg1 = '#008000';
       setbg2(newBg1);
       setName2('Green')
     }
     const prevchange2 = () =>{
           setbg2(white)
           setName2('white')
     }
     const setChanger = () =>{
      alert('I have used hooks for this project')
    }

    return (
        <>
        <div >
            <input value="Click on Buttons to Change background Colors" style={{fontSize:'50px'}}></input>
            <button style={{position:'absolute',top:'70px',right:'628px'}} onClick={setChanger}>Tap to Know</button>
            <div style={{backgroundColor:bg1, fontSize:'100px'}}>
            
            <button  onClick={backChange1} onDoubleClick={prevchange1}>{name}</button>
            </div>
            <br></br>
            <br></br>
            <div style={{backgroundColor:bg2, fontSize:'100px'}}>
              <button onClick={backChange2} onDoubleClick={prevchange2}>{name2}</button>
            </div>
            <br>

            </br>
            <br></br>
            <Color1 />

        </div>
        </>
            )

            
}

export default Color

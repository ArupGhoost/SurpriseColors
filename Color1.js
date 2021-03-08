import React, { useState } from 'react'
import './Color.css'

function Color1() {
    const white3 = 'white';
    const [bg3, setBg3] = useState(white3)
    const [name3, setName3] = useState('#FF0000')

    const backChange3 = () =>{
        let newBg3 = '#FF0000';
        setBg3(newBg3);
        setName3('Red')
    }
    const prevChange3 = () =>{
        setBg3(white3);
        setName3('White');

    }
    const white4 = 'white';
    const [bg4, setBg4] = useState(white4)
    const [name4, setName4] = useState('#0000FF')

    const backChange4 = () =>{
        let newBg4 = '#0000FF';
        setBg4(newBg4);
        setName4('Blue')
    }
    const prevChange4 = () => {
        setBg4(white4);
        setName4('White')
    }

    return (
        <div>
            <div style={{backgroundColor:bg3, fontSize:'100px'}}>
               <button onClick={backChange3} onDoubleClick={prevChange3}>{name3}</button>
            </div>
            <br></br>
            <br></br>
            <div style={{backgroundColor:bg4, fontSize:'100px'}}>
                <button onClick={backChange4} onDoubleClick={prevChange4}>{name4}</button>
            </div>
            <div className='para'>
                <p>*Single click to get Color</p>
                <p>*Double Click to get White</p>
                <p>*Reload the page to get color Codes</p>
            </div>
        </div>
    )
}

export default Color1

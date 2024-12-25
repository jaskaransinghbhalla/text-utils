// import React, { useState } from 'react'

export default function AboutUs(props) {
    const myStyle = {
        // color: props.mode === 'dark' ? 'black' : 'black',
        backgroundColor: props.mode === 'dark' ? '#D3D3D3' : 'white',
        border: '2px solid',
        borderColor: props.mode === 'dark' ? 'black' : 'grey'
    }

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // }
    // )
    // const [btncolor, setColor] = useState("Dark");

    // const handleClick = () => {
    //     if (myStyle.color === 'white') {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             border: '2px solid white'
    //         })
    //         setColor("Dark")
    //     } else {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setColor("White") 
    //     }


    // }
    return (
        <div className='container my-2 mx-5 py-2 px-2'>
            <div className='container' >
                <div class="accordion" id="accordionExample"  >
                    <div class="accordion-item" style={myStyle}>
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: '#D3D3D3' }}>
                                Free to Use
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is free to use.</strong>Use it well.</div>
                        </div>
                    </div>
                    <div class="accordion-item" style={myStyle}>
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: '#D3D3D3' }}>
                                Browser Compatible
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Compatible with all browsers and devices.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" style={myStyle}>

                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ backgroundColor: '#D3D3D3' }}>
                                Analyse your text well
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>Many Options</strong></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

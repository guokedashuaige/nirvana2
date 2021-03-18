import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const Section1 = () => {
    return(
        <section style={{backgroundColor:`red`, height:'100vh', position:"relative"}}>
            <video src="/horizonindex.mp4" type="video/mp4" preload
                   autoPlay loop playsInline style={{objectFit: "cover", width:`100%`, height: `100%`, zIndex:-10}}>
                   muted>
            </video>
       <div style={{display: "flex", justifyContent: "center",
           alignItems: "center", textAlign:"center", position:"absolute", height:"100%",width:"100%", top:"0", left:"0", zIndex:100}}>
           <h1 style={{color: `white`, fontSize: '6rem'}}>Hello</h1>
       </div>
        </section>
    )
}


export default Section1;

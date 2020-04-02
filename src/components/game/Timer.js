import React from "react";
import styled from "styled-components";

const TimeoutBox = styled.div`
width: 100vw;
height:550px;
display:flex;
justify-content:center;
align-items:center;
background-color:white;
border-radius: 40px;
font-size:20px;
text-align:center;
box-shadow: inset -6px -6px 15px rgba(145, 160, 180, 0.45),
    30px 30px 40px rgba(118, 146, 180, 0.18);
`;

const RestartBox = styled.a`
text-decoration:none;`;



const Timer = ()=>{

    const [ counter, setCounter] = React.useState(15);
    React.useEffect(()=>{
        const timeSet = counter > 0 && setInterval(()=>setCounter(counter-1),1000)
        return () => {
            clearInterval(timeSet);
        }
    },[counter]);

  
    return(
            <div>{counter!==0 ? counter :
            <TimeoutBox>
               <RestartBox href = "/">Time out ... Please Restart Game!</RestartBox>
           </TimeoutBox> 
            }</div>
    )
}

export default Timer;
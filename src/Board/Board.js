import React, {useState} from "react";
import "./Board.css";
import "./Board.css";

function Square({value, onclick, index}){
    return (
        <>
        <div
        onClick={()=>onclick(index)}
        className='square'
        >
            <p>{value}</p>
        </div>
        </>

    );
}
var count=0;
export default function Board(){   
    const [square, setsquare] = useState("X");
    const [isNext, setisNext] = useState(true); 
    const [squares_arr, setsquares_arr] = useState([]); 
    
    function handleClick(i){        
        if(!squares_arr[i]){
        if(!isNext){
            setsquare("X");
            setisNext(!isNext);
        }
        else{
            setsquare("O");
            setisNext(!isNext);
        }        
        count++;
        setsquares_arr(prev=>{
            let update_array = [...prev];
            update_array[i]=square;
            return update_array;
        });
        if (count>=9){
            setsquare("");
        }
        }
        
    }
    
    return(
        <>
        <div>
            <h1>Current Turn for :{square}</h1>
        </div>
        <div className="row">
            <Square  value={squares_arr[0]} onclick={handleClick} index={0}/>
            <Square  value={squares_arr[1]} onclick={handleClick} index={1}/>
            <Square  value={squares_arr[2]} onclick={handleClick} index={2}/>
        </div>
        <div className="row">
            <Square  value={squares_arr[3]} onclick={handleClick} index={3}/>
            <Square  value={squares_arr[4]} onclick={handleClick} index={4}/>
            <Square  value={squares_arr[5]} onclick={handleClick} index={5}/>
        </div>
        <div className="row">
            <Square value={squares_arr[6]} onclick={handleClick} index={6}/>
            <Square value={squares_arr[7]} onclick={handleClick} index={7}/>
            <Square value={squares_arr[8]} onclick={handleClick} index={8}/>
        </div>
        </>
    );
}
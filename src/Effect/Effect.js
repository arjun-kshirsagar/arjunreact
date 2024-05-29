import { useState } from "react";
// function increment(e){
//     setCount
// }
function Effect(){
    const[count, setCount] = useState(0);
    const[count1, setCount1] = useState(0);
    return (
        <div>
            <button onClick={() => {setCount(count+1)}}>Add</button>
            <p>{count}</p>
            <button onClick={() => {setCount1(count1+1)}}>Add1</button>
            <p>{count1}</p>
        </div>
    );
}

export default Effect;
import './ProductCard.css';
import { useRef, useState } from 'react';
import Effect from './Effect/Effect';
// import logo1 from '../../assests/logo1.png';
function ProductCard({ title, price }) {
  let pRef = useRef(0);
  let iRef = useRef(0);
  let oRef = useRef(0);
  let [inputV, setInputV] = useState('Class');
  function printTitle() {
    console.log("printTitle");
    console.log(pRef.current.innerText);
    if (pRef.current.style.display === "none") {
      pRef.current.style.display = "block";
    } else {
      pRef.current.style.display = "none";
    }
  }
  console.log("rerendered" + inputV);
  function displayOutput(e){ // event listner
    // console.log(iRef.current);
    // console.log(oRef.current);
    // oRef.current.innerText = `Output from textbox - ${iRef.current.value}`;

    setInputV(e.target.value);
  }
  
  return (
    <div className="product-card">
      <p onClick={printTitle}> {title}</p>
      <p ref={pRef}> {price}</p>
      {/* <img src={logo1} /> */}
      <input type="text" onChange={displayOutput} ref = {iRef} value={inputV}/>
      <p ref={oRef}> Output from textbox - {inputV} </p>
      <Effect></Effect>
    </div>
    )
  }
  
export default ProductCard;
  

//ProductCard()

// useState
// useRef
// useEffect

// custom hooks 
// default hooks
// they should not render a ui 
// they should be on the top of a function 
// they should be not in any conditon or loops 


// state variabel - whenever a state  variable is set, it would cause a rerender of the componenet
// and the value would be retained on rerendering

// function or componenet called for the first time => mounting

// useState(default value)
// returns (stateVar, setterFn);

// In most of the cases, you use controlled component

// useEffect(fun, [])
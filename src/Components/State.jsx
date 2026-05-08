import { useState } from "react"

const State = () => {
    let [count, setCount] = useState(0);
    // count = count + 1
    let increase = () => {
        setCount(count + 1)


    }
    let decrease = () => {
        count > 0 && setCount(count - 1)
        
    }
    
    console.log("Render");
    return (

        <div className="border bg-amber-900 text-white h-screen text-center" >
            <h2>Use State</h2>
            <h3>Counter App</h3>
            <p>{count}</p>
            {/* <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button> */}
            <button className="border bg-blue-600 text-white rounded-2xl p-2"  onClick={() => setCount (count + 1)}>Increase</button>
            <br />
            <button className="border bg-orange-600 text-white rounded-2xl p-2" onClick={() => count > 0 && setCount (count - 1)}>Decrease</button>
            <br />
            <button  className="border bg-red-600 text-white rounded-2xl p-2" onClick={() => count > 0 && setCount (count = 0)} >Reset</button>
        </div>

)

}
export default State;

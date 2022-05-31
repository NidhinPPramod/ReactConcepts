import {useState} from "react";
// import Employee from "./components/Employee";

import Counter1 from "./components/Counter1";

function App() {

    const [state, setState] = useState(false)

    //
    // const addCount = () => {
    //     setCount(count + 1)
    // }

    // let emp = [{name: 'Nidhin', age: 15},
    //     {name: 'Sai', age: 13},
    // ]

    return (
        <div>

            {/*{*/}
            {/*    emp.map((obj) => {*/}
            {/*        return (*/}
            {/*            <Employee name={obj.name} age={obj.age}/>*/}
            {/*        )*/}

            {/*    })*/}
            {/*}*/}
            <button onClick={() => setState(!state)}>Show/Hide</button>
            {state ? <Counter1/> : null}
        </div>
    );
}

export default App;

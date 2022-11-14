import React from "react";
import "./scss/app.scss";
import { UseEffectExamp, UseStateExamp } from "./components";
import UseRefExamp from "./components/UseRefExamp";

export default function App(props) {
    let [isVisible, setVisible] = React.useState(true);

    function toggleElem(params) {
        setVisible((visible) => !visible);
    }
    return (
        <>
            <h2>useState</h2>

            <UseStateExamp />
            <hr />
            <h2>useEffect</h2>

            {isVisible && <UseEffectExamp />}
            <button onClick={toggleElem}>Visible / Hidden</button>
            <hr />
            <h2>useRef</h2>
            <UseRefExamp />
            <hr />
        </>
    );
}

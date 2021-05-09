import React, { useState } from "react";
import "../styles/App.css";
import Welcome from "./Welcome";

const App = () => {
    const [name, setName] = useState("");
    const [showMsg, setShowMsg] = useState(false);
    const onChangeInput = (e) => {
        setName(e.target.value);
    };
    const onClickBtn = () => {
        setShowMsg(true);
    };
    return (
        <React.Fragment>
            <form>
                <input type="text" onChange={(e) => onChangeInput(e)} placeholder="Enter name" />
                <button type="button" onClick={() => onClickBtn()}>
                    click me
                </button>
            </form>
            {showMsg ? <Welcome name={name} /> : ""}
        </React.Fragment>
    );
};

export default App;

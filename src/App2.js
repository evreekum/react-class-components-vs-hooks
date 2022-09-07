import React from "react";
import './App.css';

function App() {
    const [lightValue, setLightValue] = React.useState(true);

    function handleClick(e) {
        setLightValue(e.target.value);

    }

    return (
        <div>
            <button
                type="button"
                name="button"
                className={lightValue ? 'AAN' : 'UIT'}
                value={lightValue}
                onClick={() => handleClick}
            >

            </button>
        </div>
    )
}

export default App;
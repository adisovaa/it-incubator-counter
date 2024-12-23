import React, {useState, ChangeEvent} from "react";
import './App.css'
import {Box, Container} from "@mui/material";


function App() {
    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5);
    const [currentValue, setCurrentValue] = useState<number | null>(null);
    const [error, setError] = useState<boolean>(false);

    const handleStartValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        setStartValue(value);
        setError(value < 0 || value >= maxValue);
    };
    const handleMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        setMaxValue(value);
        setError(value <= startValue || startValue < 0);
    };
    const handleSet = () => {
        if (!error) {
            setCurrentValue(startValue);
        }
    };
    const handleIncrement = () => {
        if (currentValue !== null && currentValue < maxValue) {
            setCurrentValue(currentValue + 1);
        }
    };
    const handleReset = () => {
        setStartValue(0);
        setMaxValue(5);
        setCurrentValue(null);
        setError(false);
    };


    return (
        <div className="app">
            <Container className='container'>
                <Box className='boxValue'>
                    <div className="inputs">
                        <div className='input'>
                            <label>Max Value:</label>
                            <input
                                type="number"
                                value={maxValue}
                                onChange={handleMaxValueChange}
                                className={error ? "error" : ""}
                            />
                        </div>
                        <div className='input'>
                            <label>Start Value:</label>
                            <input
                                type="number"
                                value={startValue}
                                onChange={handleStartValueChange}
                                className={error ? "error" : ""}
                            />
                        </div>
                    </div>

                    <div className='buttons'>
                        <button onClick={handleSet} disabled={error}>
                            Set
                        </button>
                    </div>
                </Box>

                <Box className='boxValue'>
                    <div className="display">
                        {error ? (
                            <span className="error-message">NO</span>
                        ) : currentValue !== null ? (
                            <span>{currentValue}</span>
                        ) : (
                            <span>enter values and press 'Set'</span>
                        )}
                    </div>

                    <div className="controls">
                        <button onClick={handleIncrement}
                                disabled={currentValue === null || currentValue >= maxValue}>
                            Inc
                        </button>
                        <button onClick={handleReset}>Reset</button>
                    </div>
                </Box>

            </Container>
        </div>
    );
};

export default App
import React, {ChangeEvent, useState} from 'react';
import './App.css';

function App() {
    const [maxValue, setMaxValue] = useState(0)
    const [startValue, setStartValue] = useState(0)
    const [values, setValues] = useState<number | string>('Please click the inc button')
    const [isSetClicked, setIsSetClicked] = useState(false)

    const maxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.currentTarget.value, 10);
        if (!isNaN(newValue) && newValue >= startValue) {
            setMaxValue(newValue);
        }
    }

    const startValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.currentTarget.value, 10);
        if (!isNaN(newValue) && newValue >= 0 && newValue <= maxValue) {
            setStartValue(newValue);
            setValues(newValue);
        }
    };
    const setHandler = () => {
        setIsSetClicked(true);
        setValues(values);
    }


    const incHandler = () => {
        if (isSetClicked) {
            setValues(startValue)
        }
    };

    const resetHandler = () => {
        setValues('Please click the set button')
        setIsSetClicked(false);
    };


    return (
        <div className="App">
            <div>
                <div>
                    <div>
                        <p>max value</p>
                        <input type={"number"} onChange={maxValueHandler} value={maxValue}/>
                    </div>
                    <div>
                        <p>min value</p>
                        <input type={"number"} onChange={startValueHandler} value={startValue}/>
                    </div>
                </div>
                <div>
                    <button onClick={setHandler}>set</button>
                </div>
            </div>

            <div>
                <h5>{values}</h5>
                <button onClick={incHandler} disabled={values >= maxValue}>inc</button>
                <button onClick={resetHandler}>reset</button>
            </div>
        </div>
    );
}

export default App;
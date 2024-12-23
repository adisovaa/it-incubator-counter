import {Box} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {ChangeEvent} from "react";
import {
    changeMaxValueAC,
    changeStartValueAC,
    counterHandleSetAC,
    counterResetAC,
    handleIncrementAC
} from "../model/counter-reducer";
import {RootState} from "../app/store";


export type CounterType = {
    startValue: number
    maxValue: number
    currentValue: number | null
    error: boolean
}

export const Counter = () => {

    const counter = useSelector<RootState, CounterType>(state => state.CounterReducer)

    const dispatch = useDispatch()
    const handleStartValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value)) {
            dispatch(changeStartValueAC({value}))
        }
    }
    const handleMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value)) {
            dispatch(changeMaxValueAC({value}))
        }
    }
    const handleSet = (startValue: number, error: boolean) => {
        if (!error) {
            dispatch(counterHandleSetAC({startValue}))
        }
    };
    const handleIncrement = (currentValue: number | null, maxValue: number) => {
        if (currentValue !== null && currentValue < maxValue) {
            dispatch(handleIncrementAC({currentValue}))
        }
    };
    const handleReset = () => {
        dispatch(
            counterResetAC({
                startValue: counter.startValue,
                maxValue: counter.maxValue,
                currentValue: null,
                error: false,
            })
        )
    };

    return (
        <>
            <Box className='boxValue'>
                <div className="inputs">
                    <div className='input'>
                        <label>Max Value:</label>
                        <input
                            type="number"
                            value={counter.maxValue}
                            onChange={handleMaxValueChange}
                            className={counter.error ? "error" : ""}
                        />
                    </div>
                    <div className='input'>
                        <label>Start Value:</label>
                        <input
                            type="number"
                            value={counter.startValue}
                            onChange={handleStartValueChange}
                            className={counter.error ? "error" : ""}
                        />
                    </div>
                </div>

                <div className='buttons'>
                    <button onClick={() => handleSet(counter.startValue, counter.error)} disabled={counter.error}>
                        Set
                    </button>
                </div>
            </Box>

            <Box className='boxValue'>
                <div className="display">
                    {counter.error ? (
                        <span className="error-message">NO</span>
                    ) : counter.currentValue !== null ? (
                        <span>{counter.currentValue}</span>
                    ) : (
                        <span>enter values and press 'Set'</span>
                    )}
                </div>

                <div className="controls">
                    <button onClick={() => handleIncrement(counter.currentValue, counter.maxValue)}
                            disabled={counter.currentValue === null || counter.currentValue >= counter.maxValue}>
                        Inc
                    </button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </Box>
        </>
    )
}
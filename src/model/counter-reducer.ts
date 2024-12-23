import {CounterType} from "../features/Counter";

const initialState: CounterType = {
    startValue: 0,
    maxValue: 0,
    currentValue: null,
    error: false,
}

export const CounterReducer = (state: CounterType = initialState, action: ActionType): CounterType => {
    switch (action.type) {
        case 'CHANGE_START_VALUE': {
            return {...state, startValue: action.payload.value}
        }
        case 'CHANGE_MAX_VALUE': {
            return {...state, maxValue: action.payload.value}
        }
        case 'COUNTER_HANDLE_SET': {
            return {...state, currentValue: action.payload.startValue}
        }
        case 'HANDLE_INCREMENT': {
            return {
                ...state,
                currentValue: action.payload.currentValue !== null ? action.payload.currentValue + 1 : null
            }
        }
        case 'COUNTER_RESET': {
            return {
                ...state,
                startValue: action.payload.startValue,
                maxValue: action.payload.maxValue,
                currentValue: action.payload.currentValue,
                error: action.payload.error
            }
        }
        default:
            return state
    }
}

export const changeStartValueAC = (payload: { value: number }) => {
    return {
        type: 'CHANGE_START_VALUE',
        payload
    } as const
}
export const changeMaxValueAC = (payload: { value: number }) => {
    return {
        type: 'CHANGE_MAX_VALUE',
        payload
    } as const
}
export const counterHandleSetAC = (payload: { startValue: number }) => {
    return {
        type: 'COUNTER_HANDLE_SET',
        payload
    } as const
}
export const handleIncrementAC = (payload: { currentValue: number }) => {
    return {
        type: 'HANDLE_INCREMENT',
        payload
    } as const
}
export const counterResetAC = (payload: { startValue: number, maxValue: number, currentValue: null, error: false }) => {
    return {
        type: 'COUNTER_RESET',
        payload
    } as const
}

export type ChangeStartValueActionType = ReturnType<typeof changeStartValueAC>
export type ChangeMaxValueActionType = ReturnType<typeof changeMaxValueAC>
export type CounterHandleSetActionType = ReturnType<typeof counterHandleSetAC>
export type HandleIncrementActionType = ReturnType<typeof handleIncrementAC>
export type CounterResetActionType = ReturnType<typeof counterResetAC>

type ActionType = ChangeStartValueActionType
    | ChangeMaxValueActionType
    | CounterHandleSetActionType
    | HandleIncrementActionType
    | CounterResetActionType
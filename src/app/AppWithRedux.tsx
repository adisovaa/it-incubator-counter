import './App.css'
import {Container} from "@mui/material";
import {Counter} from "../features/Counter";


function AppWithRedux() {
    return (
        <div className="app">
            <Container className='container'>
                <Counter />
            </Container>
        </div>
    );
};

export default AppWithRedux
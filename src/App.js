import {Badge, Button, Container} from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";
import {asyncDecrementCreator, asyncIncrementCreator} from "./actions/counterAction";

const App = () => {
    const count = useSelector(state => state.countReducer.count);
    const dispatch = useDispatch();

    return (
    <div className="App">
        <Container maxWidth="sm">
            <Badge color="secondary">{count}</Badge>
            <Button onClick={() => dispatch(asyncIncrementCreator())} variant="contained" color="primary">increment</Button>
            <Button onClick={() => dispatch(asyncDecrementCreator())} variant="contained" color="secondary">decrement</Button>
        </Container>
    </div>
    );
}

export default App;

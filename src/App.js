import { Button, Container } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";
import { getPeopleStart } from "./actions/peopleAction";

const App = () => {
    const people = useSelector(state => state.peopleReducer.people);
    const dispatch = useDispatch();
    console.log(people);

    return (
    <div className="App">
        <Container maxWidth="sm">
            <Button onClick={() => dispatch(getPeopleStart())} variant="contained" color="secondary">people</Button>
        </Container>
    </div>
    );
}

export default App;

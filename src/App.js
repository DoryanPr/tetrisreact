import './App.css';
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./reducers";
import ScoreList from "./components/ScoreList";
import Tetris from "./components/Tetris";

const store = createStore(reducers)

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Tetris</h1>
                </header>
                <div className={'content'}>

                <Tetris/>

                <ScoreList/>
                </div>
            </div>
        </Provider>
    );
}

export default App;

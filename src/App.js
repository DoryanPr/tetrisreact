import './App.css';
import GridBoard from "./components/GridBoard";
import NextBlock from "./components/NextBlock";
import ScoreBoard from "./components/ScoreBoard";
import Controls from "./components/Controls";
import MessagePopup from "./components/MessagePopup";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./reducers";
import ScoreList from "./components/ScoreList";

const store = createStore(reducers)

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Tetris</h1>
                </header>
                <GridBoard/>
                <NextBlock/>
                <ScoreBoard/>
                <Controls/>
                <MessagePopup/>

                <ScoreList />
            </div>
        </Provider>
    );
}

export default App;

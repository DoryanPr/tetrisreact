import { combineReducers } from 'redux'
import gameReducer from './gameReducer'

// The state handled by `gameReducer` will be stored with the property name `game` on the Redux store.
const reducers = combineReducers({
    game: gameReducer
})

export default reducers
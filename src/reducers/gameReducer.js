import {GAME_OVER, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT, PAUSE, RESTART, RESUME, ROTATE} from "../actions";

const gameReducer = (state = {}, action) => {

    // compare le type d'action
    switch(action.type) {
        case ROTATE:

            return state

        case MOVE_RIGHT:

            return state

        case MOVE_LEFT:

            return state

        case MOVE_DOWN:

            return state

        case RESUME:

            return state

        case PAUSE:

            return state

        case GAME_OVER:

            return state

        case RESTART:

            return state

        default:
            return state
    }
}

export default gameReducer
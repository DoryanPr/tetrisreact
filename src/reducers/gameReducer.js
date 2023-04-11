import {GAME_OVER, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT, PAUSE, RESTART, RESUME, ROTATE} from "../actions";
import {canMoveTo, defaultState, nextRotation} from "../utils/index";

const gameReducer = (state = defaultState(), action) => {
    const { shape, grid, x, y, rotation, nextShape, score, isRunning } = state

    // compare le type d'action
    switch(action.type) {
        case ROTATE:
            const newRotation = nextRotation(shape, rotation)
            if (canMoveTo(shape, grid, x, y, newRotation)) {
                return { ...state, rotation: newRotation }
            }
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
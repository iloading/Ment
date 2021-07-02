import { combineReducers } from "redux";
import dashboardReducer from './dashboardReducer'

const rootReducer = combineReducers({
    dashBoard: dashboardReducer,
})

export default rootReducer;
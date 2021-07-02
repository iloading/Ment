import { combineReducers } from "redux";
import dashboardReducer from './dashboardReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    user: userReducer,
})

export default rootReducer;
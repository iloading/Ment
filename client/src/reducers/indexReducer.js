import { combineReducers } from "redux";
import bancoReducer from "./bancoReducer";
import dashboardReducer from './dashboardReducer'
import userReducer from './userReducer'
import feedbackReducer from './feedbackReducer'

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    user: userReducer,
    banco: bancoReducer,
    feedback: feedbackReducer,
})

export default rootReducer;
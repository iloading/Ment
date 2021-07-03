import { combineReducers } from "redux";
import bancoReducer from "./bancoReducer";
import dashboardReducer from './dashboardReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    user: userReducer,
    banco: bancoReducer,
})

export default rootReducer;
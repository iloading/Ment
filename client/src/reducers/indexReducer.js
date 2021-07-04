import { combineReducers } from "redux";
import bancoReducer from "./bancoReducer";
import dashboardReducer from './dashboardReducer'
import userReducer from './userReducer'
import destaqueReducer from './destaqueReducer'
import perfilequipaReducer from './perfilequipaReducer'
import feedbackReducer from './feedbackReducer'

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    user: userReducer,
    banco: bancoReducer,
    destaque: destaqueReducer,
    perfilequipa: perfilequipaReducer,
    feedback: feedbackReducer,
})

export default rootReducer;
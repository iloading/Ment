import { combineReducers } from "redux";
import bancoReducer from "./bancoReducer";
import dashboardReducer from './dashboardReducer'
import userReducer from './userReducer'
import destaqueReducer from './destaqueReducer'
import perfilequipaReducer from './perfilequipaReducer'
import feedbackReducer from './feedbackReducer'
import criarSessaoReducer from './criacaoSessaoReducer'
import sessaoReducer from './sessaoReducer'
import minhasEquipasReducer from './minhasEquipasReducer'
import criarEquipaReducer from './criacaoEquipaReducer'

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    user: userReducer,
    banco: bancoReducer,
    destaque: destaqueReducer,
    perfilequipa: perfilequipaReducer,
    feedback: feedbackReducer,
    criarSessao: criarSessaoReducer,
    sessao: sessaoReducer,
    minhasEquipas: minhasEquipasReducer,
    criarEquipa: criarEquipaReducer,
})

export default rootReducer;
const initState = {
    dadosPreenchidos: { nome: '', alias: '', descricao: '', school: [], mentores: [] },
}

const criarEquipaReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_MINHAS_EQUIPAS':
            return { ...state, minhasEquipas: { ...state.minhasEquipas, equipas: action.payload.minhasEquipas, status: 'completed' } }
        case 'PREENCHER_NOME_EQUIPA':
            return { ...state, dadosPreenchidos: { ...state.dadosPreenchidos, nome: action.payload.nome } }
        case 'PREENCHER_ALIAS_EQUIPA':
            return { ...state, dadosPreenchidos: { ...state.dadosPreenchidos, alias: action.payload.alias } }
        case 'PREENCHER_DESCRICAO_EQUIPA':
            return { ...state, dadosPreenchidos: { ...state.dadosPreenchidos, descricao: action.payload.descricao } }
        case 'MUDAR_ESCOLA_EQUIPA':
            return { ...state, dadosPreenchidos: { ...state.dadosPreenchidos, school: [{ id: action.payload.school.value, name: action.payload.school.label }] } }
        case 'CARREGAR_ESCOLA_OWNER':
            return { ...state, dadosPreenchidos: { ...state.dadosPreenchidos, school: action.payload.school } }
        case 'LOAD_MENTORES_ESCOLA':
            return { ...state, mentores: { mentores: action.payload.mentores } }
        case 'SELECIONAR_MENTOR':
            return { ...state, dadosPreenchidos: { ...state.dadosPreenchidos, mentores: action.payload.mentores_selecionados } }
        case 'ELIMINAR_MENTOR':
            state.dadosPreenchidos.mentores.splice(action.payload.mentor_eliminado, 1);
            return { ...state };



        default:
            return { ...state }
    }
}
export default criarEquipaReducer
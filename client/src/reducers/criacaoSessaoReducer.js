const initState = {
    dadosPreenchidos: { equipaEscolhida: null, grauEscolhido: null, DisciplinaEscolhida: null, nome: '', conteudos: '' },
    minhasEquipas: { equipas: null, status: 'idle' },
    grausDeEnsino: [],
    gruposDisciplinares: []
}

const criarSessaoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_MINHAS_EQUIPAS':
            return { ...state, minhasEquipas: { ...state.minhasEquipas, equipas: action.payload.minhasEquipas, status: 'completed' } }
        case 'LOADING_MINHAS_EQUIPAS':
            return { ...state, minhasEquipas: { ...state.minhasEquipas, status: 'loading' } }
        case 'ESCOLHER_EQUIPA':
            return { ...state, dadosPreenchidos: { ...state.dadosPreenchidos, equipaEscolhida: action.payload.id } }
        case 'ESCOLHER_GRAU':
            return { ...state, dadosPreenchidos: { ...state.dadosPreenchidos, grauEscolhido: action.payload.id } }
        case 'ESCOLHER_DISCIPLINA':
            return { ...state, dadosPreenchidos: { ...state.dadosPreenchidos, DisciplinaEscolhida: action.payload.id } }
        case 'PREENCHER_NOME':
            return { ...state, dadosPreenchidos: { ...state.dadosPreenchidos, nome: action.payload.nome } }
        case 'PREENCHER_CONTEUDOS':
            return { ...state, dadosPreenchidos: { ...state.dadosPreenchidos, conteudos: action.payload.conteudos } }
        case 'FETCH_INFO':
            return { ...state, grausDeEnsino: action.payload.grausEnsino, gruposDisciplinares: action.payload.disciplinas }


        default:
            return { ...state }
    }
}
export default criarSessaoReducer
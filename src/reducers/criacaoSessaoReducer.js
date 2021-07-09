const initState = {
    dadosPreenchidos: { equipaEscolhida: null, grauEscolhido: null, DisciplinaEscolhida: null, nome: '', conteudos: '', descricao: '', situacao_problema: '', factos_reais: '', factos_fic: '', resultados_esperados: '', funcao_mentores: '', funcao_mentorandos: '' },
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
        case 'PREENCHER_DESCRICAO':
            return { ...state, dadosPreenchidos: { ...state.dadosPreenchidos, descricao: action.payload.descricao } }
        case 'PREENCHER_SITUACAO_PROBLEMA':
            return { ...state, dadosPreenchidos: { ...state.dadosPreenchidos, situacao_problema: action.payload.situacao_problema } }
        case 'PREENCHER_REAIS':
            return { ...state, dadosPreenchidos: { ...state.dadosPreenchidos, factos_reais: action.payload.reais } }
        case 'PREENCHER_FICCIONAIS':
            return { ...state, dadosPreenchidos: { ...state.dadosPreenchidos, factos_fic: action.payload.ficcionais } }
        case 'PREENCHER_MENTORES':
            return { ...state, dadosPreenchidos: { ...state.dadosPreenchidos, funcao_mentores: action.payload.funcao_mentores } }
        case 'PREENCHER_MENTORANDOS':
            return { ...state, dadosPreenchidos: { ...state.dadosPreenchidos, funcao_mentorandos: action.payload.funcao_mentorandos } }
        case 'PREENCHER_RESULTADOS':
            return { ...state, dadosPreenchidos: { ...state.dadosPreenchidos, resultados_esperados: action.payload.resultados_esperados } }
        case 'FETCH_INFO':
            return { ...state, grausDeEnsino: action.payload.grausEnsino, gruposDisciplinares: action.payload.disciplinas }
        case 'CLEAR_SESSAO':
            return {
                ...state, dadosPreenchidos: { equipaEscolhida: null, grauEscolhido: null, DisciplinaEscolhida: null, nome: '', conteudos: '' },
                minhasEquipas: { equipas: null, status: 'idle' },
            }


        default:
            return { ...state }
    }
}
export default criarSessaoReducer
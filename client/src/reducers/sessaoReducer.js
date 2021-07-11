const initState = {
    sessaoInfo: { nome: null, descricao: null, subject: null, factos_ficcionais: null, factos_reais: null, situacao_problema: null, resultados_esperados: null, funcao_alunos_mentores: null, funcao_alunos_mentorandos: null, disciplina: null, disciplina_code: null, disciplina_level: null, disciplina_id: null, ano: null },
    status: 'idle',
    grausDeEnsino: [],
    gruposDisciplinares: []
}

const sessaoReducer = (state = initState, action) => {

    switch (action.type) {
        case 'FETCH_SESSAO':

            return { ...state, sessaoInfo: { nome: action.payload.name, descricao: action.payload.description, subject: action.payload.subject, factos_ficcionais: action.payload.factos_ficcionais, factos_reais: action.payload.factos_reais, situacao_problema: action.payload.situacao_problema, resultados_esperados: action.payload.resultados_esperados, funcao_alunos_mentores: action.payload.funcao_alunos_mentores, funcao_alunos_mentorandos: action.payload.funcao_alunos_mentorandos, disciplina: action.payload.disciplina, disciplina_code: action.payload.disciplina_code, disciplina_level: action.payload.disciplina_level, disciplina_id: action.payload.disciplina_id, nova_disciplina_id: action.payload.disciplina_id, ano: action.payload.year, ano_id: action.payload.ano_id }, status: 'completed' }
        case 'LOADING_SESSAO':
            return { ...state, status: 'loading' }
        case 'ALTERAR_NOME':
            return { ...state, sessaoInfo: { ...state.sessaoInfo, nome: action.payload.nome } }
        case 'ESCOLHER_GRAU':
            return { ...state, sessaoInfo: { ...state.sessaoInfo, grauEscolhido: action.payload.id } }
        case 'ALTERAR_GRAU':
            return { ...state, sessaoInfo: { ...state.sessaoInfo, grauEscolhido: action.payload.id, ano_id: action.payload.id.value } }
        case 'ESCOLHER_DISCIPLINA':
            return { ...state, sessaoInfo: { ...state.sessaoInfo, DisciplinaEscolhida: action.payload.id, disciplina_id: action.payload.id.value } }
        case 'ALTERAR_CONTEUDOS':
            return { ...state, sessaoInfo: { ...state.sessaoInfo, subject: action.payload.conteudos } }
        case 'ALTERAR_DESCRICAO':
            return { ...state, sessaoInfo: { ...state.sessaoInfo, descricao: action.payload.descricao } }
        case 'ALTERAR_SITUACAO_PROBLEMA':
            return { ...state, sessaoInfo: { ...state.sessaoInfo, situacao_problema: action.payload.situacao_problema } }
        case 'ALTERAR_REAIS':
            return { ...state, sessaoInfo: { ...state.sessaoInfo, factos_reais: action.payload.reais } }
        case 'ALTERAR_FICCIONAIS':
            return { ...state, sessaoInfo: { ...state.sessaoInfo, factos_ficcionais: action.payload.ficcionais } }
        case 'ALTERAR_DISCIPLINA':
            return { ...state, sessaoInfo: { ...state.sessaoInfo, nova_disciplina_id: action.payload.id.value, } }
        case 'ALTERAR_MENTORES':
            return { ...state, sessaoInfo: { ...state.sessaoInfo, funcao_alunos_mentores: action.payload.funcao_alunos_mentores } }
        case 'ALTERAR_MENTORANDOS':
            return { ...state, sessaoInfo: { ...state.sessaoInfo, funcao_alunos_mentorandos: action.payload.funcao_alunos_mentorandos } }
        case 'ALTERAR_RESULTADOS':
            return { ...state, sessaoInfo: { ...state.sessaoInfo, resultados_esperados: action.payload.resultados_esperados } }
        case 'FETCH_GRAUS_GRUPOS':
            return { ...state, grausDeEnsino: action.payload.grausDeEnsino, gruposDisciplinares: action.payload.disciplinas }


        default:
            return { ...state }
    }
}
export default sessaoReducer
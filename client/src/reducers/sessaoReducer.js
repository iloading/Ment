const initState = {
    sessaoInfo: { nome: null, descricao: null, subject: null, factos_ficcionais: null, factos_reais: null, situacao_problema: null, resultados_esperados: null, funcao_alunos_mentores: null, funcao_alunos_mentorandos: null, disciplina: null, ano: null },
    status: 'idle'
}

const sessaoReducer = (state = initState, action) => {

    switch (action.type) {
        case 'FETCH_SESSAO':

            return { ...state, sessaoInfo: { nome: action.payload.name, descricao: action.payload.description, subject: action.payload.subject, factos_ficcionais: action.payload.factos_ficcionais, factos_reais: action.payload.factos_reais, situacao_problema: action.payload.situacao_problema, resultados_esperados: action.payload.resultados_esperados, funcao_alunos_mentores: action.payload.funcao_alunos_mentores, funcao_alunos_mentorandos: action.payload.funcao_alunos_mentorandos, disciplina: action.payload.disciplina, ano: action.payload.year }, status: 'completed' }
        case 'LOADING_SESSAO':
            return { ...state, status: 'loading' }


        default:
            return { ...state }
    }
}
export default sessaoReducer
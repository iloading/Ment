const initState = {
    sessaoInfo: { nome: null, descricao: null, subject: null, factos_ficcionais: null, factos_reais: null, situacao_problema: null, resultados_esperados: null, funcao_alunos_mentores: null, funcao_alunos_mentorandos: null, disciplina: null, disciplina_code: null, disciplina_level: null, disciplina_id: null, ano: null, is_public: null, isOwner: null },
    status: 'idle',
    grausDeEnsino: [],
    gruposDisciplinares: []
}

const sessaoReducer = (state = initState, action) => {

    switch (action.type) {
        case 'FETCH_SESSAO':
            let { sessao } = action.payload;
            console.log(sessao[0]);
            return { ...state, sessaoInfo: { ...state.sessaoInfo, nome: sessao[0].name, descricao: sessao[0].description, subject: sessao[0].subject, factos_ficcionais: sessao[0].factos_ficcionais, factos_reais: sessao[0].factos_reais, situacao_problema: sessao[0].situacao_problema, resultados_esperados: sessao[0].resultados_esperados, funcao_alunos_mentores: sessao[0].funcao_alunos_mentores, funcao_alunos_mentorandos: sessao[0].funcao_alunos_mentorandos, disciplina: sessao[0].disciplina, disciplina_code: sessao[0].disciplina_code, disciplina_level: sessao[0].disciplina_level, disciplina_id: sessao[0].disciplina_id, disciplina_url: sessao[0].disciplina_url, nova_disciplina_id: sessao[0].disciplina_id, ano: sessao[0].year, ano_id: sessao[0].ano_id, is_public: sessao[0].is_public }, status: 'completed' }
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
            return { ...state, sessaoInfo: { ...state.sessaoInfo, disciplina_url: action.payload.id.value, } }
        case 'ALTERAR_MENTORES':
            return { ...state, sessaoInfo: { ...state.sessaoInfo, funcao_alunos_mentores: action.payload.funcao_alunos_mentores } }
        case 'ALTERAR_MENTORANDOS':
            return { ...state, sessaoInfo: { ...state.sessaoInfo, funcao_alunos_mentorandos: action.payload.funcao_alunos_mentorandos } }
        case 'ALTERAR_RESULTADOS':
            return { ...state, sessaoInfo: { ...state.sessaoInfo, resultados_esperados: action.payload.resultados_esperados } }
        case 'FETCH_GRAUS_GRUPOS':
            return { ...state, grausDeEnsino: action.payload.grausDeEnsino, gruposDisciplinares: action.payload.disciplinas }
        case 'IS_OWNER':
            return { ...state, sessaoInfo: { ...state.sessaoInfo, isOwner: action.payload.is_owner } }
        case 'IS_PUBLIC':
            console.log(action.payload.is_public);
            return { ...state, sessaoInfo: { ...state.sessaoInfo, is_public: action.payload.is_public } }


        default:
            return { ...state }
    }
}
export default sessaoReducer
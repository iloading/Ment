const initState = {
    dadosPreenchidos: { equipaEscolhida: null, grauEscolhido: null, DisciplinaEscolhida: null, nome: '', conteudos: '', descricao: '', situacao_problema: '', factos_reais: '', factos_fic: '', resultados_esperados: '', funcao_mentores: '', funcao_mentorandos: '' },
    minhasEquipas: { equipas: null, status: 'idle' },
    grausDeEnsino: [],
    gruposDisciplinares: []
}

const editarSessaoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CLEAR_SESSAO':
            return {
                ...state, dadosPreenchidos: { equipaEscolhida: null, grauEscolhido: null, DisciplinaEscolhida: null, nome: '', conteudos: '', descricao: '', situacao_problema: '', factos_reais: '', factos_fic: '', resultados_esperados: '', funcao_mentores: '', funcao_mentorandos: '' },
                minhasEquipas: { equipas: null, status: 'idle' },
            }


        default:
            return { ...state }
    }
}
export default editarSessaoReducer
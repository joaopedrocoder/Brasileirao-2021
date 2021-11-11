import {createContext, useEffect, useState } from "react";
import { getCampeonato, getTabela } from "../services/get";

type campeonato = {
    campeonato_id: number,
    nome: string,
    nome_popular: string,
    status: string,
    logo: string
}

type tabela = {
    posicao: number,
    posntos: number,
    time: {
        time_id: number,
        nome_popular: string,
        sigla: string,
        escudo: string
    },
    jogos: number,
    vitorias: number,
    empates: number,
    derrotas: number,
    gols_pro: number,
    gols_contra: number
    aproveitamento: number,
    variacao_posicao: number,
    ultimos_jogos: []
}

export const GlobalContext = createContext({})

export const GlobalStorage = ({children}: any) =>{
    const [campeonato, setCampeonato] = useState<campeonato>()
    const [tabela, setTabela] = useState<tabela>()

    const novoCampeonato = campeonato && campeonato
    const novaTabela = tabela && tabela

    useEffect(()=>{
        getCampeonato(setCampeonato)
        getTabela(setTabela)
    },[])

    return(
        <GlobalContext.Provider value={{novoCampeonato, novaTabela}}>
            {children}
        </GlobalContext.Provider>
    )
}
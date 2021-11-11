import React, { useContext } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { GlobalContext } from "../../globalContext/GlobalContext";

import { Table, ContainerMain, Rodada } from "./style";

type tabela = {
    posicao: number,
    pontos: number,
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
    gols_contra: number,
    saldo_gols: number,
    aproveitamento: number,
    variacao_posicao: number,
    ultimos_jogos: []
}

export const TablePage = () => {
    const {novoCampeonato, novaTabela} = useContext<any>(GlobalContext)

    const renderVariation = (variation: number) =>{
        if(variation > 0){
            return <span style={{color: 'green'}}>+{variation}</span>
            
        }else if(variation < 0){
            return <span style={{color: 'red'}}>{variation}</span>
            
        }
    }

    const tabelaCompletarenderizada = novaTabela && novaTabela.map((item: tabela)=>{
        return(
            <tr key={item.time.time_id}>
                <td>{item.posicao}º - {item.time.nome_popular} {renderVariation(item.variacao_posicao)}</td>
                <td>{item.pontos}</td>
                <td>{item.jogos}</td>
                <td>{item.vitorias}</td>
                <td>{item.empates}</td>
                <td>{item.derrotas}</td>
                <td>{item.gols_pro}</td>
                <td>{item.gols_contra}</td>
                <td>{item.saldo_gols}</td>
                <td>{item.aproveitamento}%</td>
            </tr>
        )
    })

    return (
        <div>
            <Header />
            <ContainerMain>
                <h1>Tabela</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>Posição</th>
                            <th>Pts</th>
                            <th>J</th>
                            <th>V</th>
                            <th>E</th>
                            <th>D</th>
                            <th>GP</th>
                            <th>GC</th>
                            <th>SG</th>
                            <th>Aprov.</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {tabelaCompletarenderizada}
                    </tbody>
                </Table>

                <h1>Rodada - 27</h1>
                <Rodada>
                    <div>
                        <span>10/11/2021 - 17h</span>
                        <h4>SAN 0 X 2 AME(MG)</h4>
                        <span>Vila Belmiro, Santos - SP</span>
                    </div>

                    <div>
                        <span>10/11/2021 - 17h</span>
                        <h4>SAN 0 X 2 AME(MG)</h4>
                        <span>Vila Belmiro, Santos - SP</span>
                    </div>

                    <div>
                        <span>10/11/2021 - 17h</span>
                        <h4>SAN 0 X 2 AME(MG)</h4>
                        <span>Vila Belmiro, Santos - SP</span>
                    </div>

                    <div>
                        <span>10/11/2021 - 17h</span>
                        <h4>SAN 0 X 2 AME(MG)</h4>
                        <span>Vila Belmiro, Santos - SP</span>
                    </div>

                    <div>
                        <span>10/11/2021 - 17h</span>
                        <h4>SAN 0 X 2 AME(MG)</h4>
                        <span>Vila Belmiro, Santos - SP</span>
                    </div>

                    <div>
                        <span>10/11/2021 - 17h</span>
                        <h4>SAN 0 X 2 AME(MG)</h4>
                        <span>Vila Belmiro, Santos - SP</span>
                    </div>

                    <div>
                        <span>10/11/2021 - 17h</span>
                        <h4>SAN 0 X 2 AME(MG)</h4>
                        <span>Vila Belmiro, Santos - SP</span>
                    </div>

                    <div>
                        <span>10/11/2021 - 17h</span>
                        <h4>SAN 0 X 2 AME(MG)</h4>
                        <span>Vila Belmiro, Santos - SP</span>
                    </div>

                    <div>
                        <span>10/11/2021 - 17h</span>
                        <h4>SAN 0 X 2 AME(MG)</h4>
                        <span>Vila Belmiro, Santos - SP</span>
                    </div>

                    <div>
                        <span>10/11/2021 - 17h</span>
                        <h4>SAN 0 X 2 AME(MG)</h4>
                        <span>Vila Belmiro, Santos - SP</span>
                    </div>
                </Rodada>
            </ContainerMain>
            <Footer/>
        </div>
    );
};

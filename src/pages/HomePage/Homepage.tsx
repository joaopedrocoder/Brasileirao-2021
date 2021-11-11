import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { GlobalContext } from '../../globalContext/GlobalContext'
import { ContainerMain, Content, Games, ContainerTable, Table } from './style'

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

export const Homepage = () => {
    const {novoCampeonato, novaTabela} = useContext<any>(GlobalContext)

    const tabelaRenderizada = novaTabela && novaTabela.map((item: tabela, i: number)=>{
        if(i < 10){
            return(
                <tr key={item.time.time_id} title={item.time.sigla}>
                    <td>{item.posicao}º - {item.time.nome_popular}</td>
                    <td>{item.pontos}</td>
                    <td>{item.jogos}</td>
                    <td>{item.vitorias}</td>
                    <td>{item.empates}</td>
                    <td>{item.derrotas}</td>
                    <td>{item.gols_pro}</td>
                    <td>{item.gols_contra}</td>
                    <td>{item.saldo_gols}</td>
                </tr>
            )
        } 
    })
    
    return (
        <div>
           <Header/>
            <ContainerMain>
                <h1>Campeonato Brasileiro de Futebol - Seria A - 2021</h1>

                <Content>
                    <ContainerTable>
                        <h2>Tabela</h2>
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
                                </tr>
                            </thead>

                            <tbody>
                                {tabelaRenderizada}
                            </tbody>
                        </Table>

                        <Link to={'/tabela'}>Ver tabela completa</Link>
                    </ContainerTable>

                    <Games>
                        <h2>Jogos</h2>
                    </Games>
                </Content>
            </ContainerMain>

            <Footer/>
        </div>
    )
}

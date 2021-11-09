import { Link } from 'react-router-dom'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { ContainerMain, Content, Games, ContainerTable, Table } from './style'

export const Homepage = () => {
    const tableRender = () =>{
        
    }

    return (
        <div>
           <Header/>
            <ContainerMain>
                <h1>Campeonato Brasileiro de Futebol - Seria A - 2021</h1>

                <Content>
                    <ContainerTable>
                        <h2>Tabela</h2>
                        <Table>
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

                            <tr>
                                <td>1 - Atletico Mineiro</td>
                                <td>30</td>
                                <td>10</td>
                                <td>10</td>
                                <td>0</td>
                                <td>0</td>
                                <td>17</td>
                                <td>8</td>
                                <td>+9</td>
                            </tr>

                            <tr>
                                <td>2 - Fortaleza</td>
                                <td>25</td>
                                <td>10</td>
                                <td>8</td>
                                <td>1</td>
                                <td>1</td>
                                <td>15</td>
                                <td>9</td>
                                <td>+6</td>
                            </tr>

                            <tr>
                                <td>3 - Flamengo</td>
                                <td>22</td>
                                <td>10</td>
                                <td>7</td>
                                <td>1</td>
                                <td>3</td>
                                <td>18</td>
                                <td>13</td>
                                <td>+5</td>
                            </tr>
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

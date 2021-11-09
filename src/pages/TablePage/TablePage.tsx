import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";

import { Table, ContainerMain, Rodada } from "./style";

export const TablePage = () => {
  return (
    <div>
        <Header />
        <ContainerMain>
            <h1>Tabela</h1>
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
                    <th>Aprov.</th>

                </tr>

                <tr>
                    <td>+2 1 - Atletico Mineiro</td>
                    <td>30</td>
                    <td>10</td>
                    <td>10</td>
                    <td>0</td>
                    <td>0</td>
                    <td>17</td>
                    <td>8</td>
                    <td>+9</td>
                    <td>70.2%</td>
                </tr>

                <tr>
                    <td>+1 2 - Fortaleza</td>
                    <td>25</td>
                    <td>10</td>
                    <td>8</td>
                    <td>1</td>
                    <td>1</td>
                    <td>15</td>
                    <td>9</td>
                    <td>+6</td>
                    <td>68%</td>
                </tr>

                <tr>
                    <td>-2 3 - Flamengo</td>
                    <td>22</td>
                    <td>10</td>
                    <td>7</td>
                    <td>1</td>
                    <td>3</td>
                    <td>18</td>
                    <td>13</td>
                    <td>+5</td>
                    <td>65%</td>
                </tr>

                <tr>
                    <td>0 4 - Palmeiras</td>
                    <td>20</td>
                    <td>10</td>
                    <td>7</td>
                    <td>1</td>
                    <td>3</td>
                    <td>18</td>
                    <td>13</td>
                    <td>+5</td>
                    <td>65%</td>
                </tr>

                <tr>
                    <td>0 5 - Bragantino</td>
                    <td>19</td>
                    <td>10</td>
                    <td>7</td>
                    <td>1</td>
                    <td>3</td>
                    <td>18</td>
                    <td>13</td>
                    <td>+5</td>
                    <td>65%</td>
                </tr>
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

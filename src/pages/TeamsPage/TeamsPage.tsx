import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Team } from '../../components/Team/Team'
import { AllTeams, ContainerTeams, ContainerInfo, Red, Green } from './style'

export const TeamsPage = () => {
    return (
        <div>
            <Header/>
                <ContainerTeams>
                    <h1>Times</h1>

                    <AllTeams>
                        <Team/>
                        <Team/>
                        <Team/>
                        <Team/>
                        <Team/>
                        <Team/>
                        <Team/>
                        <Team/>
                        <Team/>
                        <Team/>
                        <Team/>
                        <Team/>
                        <Team/>
                        <Team/>
                        <Team/>
                        <Team/>
                        <Team/>
                        <Team/>
                        <Team/>
                        <Team/>
                    </AllTeams>

                    <ContainerInfo>
                        <h2><span>1º</span> Atletico Mineiro</h2>
                        <Green>20 vitorias</Green>
                        <Red>4 derrotas</Red>
                        <p>6 empates</p>
                        <Green>40 gols feitos</Green>
                        <Red>20 gols sofridos</Red>
                    </ContainerInfo> 
                </ContainerTeams>
            <Footer/>
        </div>
    )
}

import styled from "styled-components";
import { BLUE } from "../../constants/colors";

const ContainerTeams = styled.main`
    margin-top: 60px;
    padding: 0 120px;

    h1{
        color: ${BLUE};
        font-size: 26px;
    }
`

const AllTeams = styled.section`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
`

const ContainerInfo = styled.section`
    margin-top: 80px;
`

const Red = styled.p`
    color: red;
`

const Green = styled.p`
    color: green;
`

export{
    ContainerTeams,
    AllTeams,
    ContainerInfo,
    Red,
    Green
}
import styled from "styled-components";
import { BLUE, FONTCOLOR } from "../../constants/colors";

const ContainerMain = styled.main`
    margin-top: 60px;
    padding: 0 120px;

    h1{
        color: ${BLUE};
        font-size: 26px;
    }

    h2{
        font-size: 22px;
        color: ${BLUE};
    }
`

const Content = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    gap: 40px;
`

const ContainerTable = styled.section`
    flex: 3;
`

const Table = styled.table`
margin-top: 10px;
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);

    th, td{
        text-align: left;
        padding: 10px;        
    }

    th{
        color: ${FONTCOLOR};
    }

    tr:nth-child(even) {
        background-color: rgb(0, 57, 153, 0.1);
    }
`

const Games = styled.aside`
    flex: 1;
`

export {
    ContainerMain,
    Content,
    ContainerTable,
    Table,
    Games
}


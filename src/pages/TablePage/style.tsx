import styled from "styled-components";
import { BLUE, FONTCOLOR } from "../../constants/colors";

const ContainerMain = styled.main`
    margin-top: 50px;
    padding: 0 120px;

    h1{
        font-size: 26px;
        color: ${BLUE};
    }
`

const Table = styled.table`
    margin: 10px 0 40px 0;
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

    span{
        font-size: 14px;
    }
`

const Rodada = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    /* border: 1px solid #ddd; */
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);

    div{
        flex: 200px;
        border: 1px solid #ddd;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
    }
`
export {
    Table,
    ContainerMain,
    Rodada
}

import styled from "styled-components";
import { BLUE } from "../../constants/colors";

const ContainerHeader = styled.header`
    height: 84px;
    padding: 0 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
`

const Logo = styled.div`
    height: 90%;
    cursor: pointer;

    img{
        height: 100%;
    }
`

const ContainerMenu = styled.ul`
    display: flex;

    li{
        margin-left: 25px;

        a{  
            font-size: 18px;
            font-weight: 500;
            color: ${BLUE};
            transition: .2s;

            :hover{
                filter: opacity(0.8);
            }
        }
    }
`

export{
    ContainerHeader,
    Logo,
    ContainerMenu
}
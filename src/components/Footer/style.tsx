import styled from "styled-components";
import { GREEN, YELLOW } from "../../constants/colors";

const ContainerFooter = styled.footer`
    background-color: ${GREEN};
    height: 80px;
    padding: 0 120px;
    display: flex;
    align-items: center;
    color: white;

    p{
        font-size: 18px;
        font-weight: 500;

        a{
            color: ${YELLOW};
        }
    }
`

export{
    ContainerFooter
}
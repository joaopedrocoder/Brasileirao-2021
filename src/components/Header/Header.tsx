import { ContainerHeader, ContainerMenu, Logo } from "./style"

import LogoBrasileirao from '../../assets/img/brasileiraoLogo.png'
import { Link } from "react-router-dom"
export const Header = () => {
    return (
        <ContainerHeader>
            <Logo>
                <img src={LogoBrasileirao} alt="logo" />
            </Logo>

            <ContainerMenu>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/tabela'}>Tabela</Link></li>
                <li><Link to={'/times'}>Times</Link></li>
            </ContainerMenu>
        </ContainerHeader>
    )
}

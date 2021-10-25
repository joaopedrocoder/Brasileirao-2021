import React from 'react'
import { Link } from 'react-router-dom'
import { ContainerFooter } from './style'

export const Footer = () => {
    return (
        <ContainerFooter>
            <p>Desenvolvido por <Link to={'#'}>João Pedro Lopes Rodrigues.</Link></p>
        </ContainerFooter>
    )
}

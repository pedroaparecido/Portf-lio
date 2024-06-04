import styled from "styled-components"
import H3 from "../typography/H3"
import H6 from "../typography/H6"

const PrincipalDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 160px;
`

export default function CardSion() {
    return(
        <PrincipalDiv>
            <H3>Missão</H3>
            <H6 color="#5f5f5f">A missão é uma espécie de recompensa pela sua dedicação initerrupta para algo que você dedica sua vida, o desenvolvimento está junto comigo fazem 5 anos, sendo assim o meu mundo gira entorno de tecnologia cumprindo o propósito sobre ter todo esse tempo a programação comigo.</H6>
            <H3>Visão</H3>
            <H6 color="#5f5f5f">A visão gira entorno da programação no sistema do banco de dados como no sistema de backend assim também como no sistema de componetização, fazendo assim um código mais acessivel e legível</H6>
        </PrincipalDiv>
    )
}
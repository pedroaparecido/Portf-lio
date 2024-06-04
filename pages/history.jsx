import styled from "styled-components"

import Navbar from "../src/components/navbar/navbar"
import PrincipalImage from "../src/components/layout/PrincipalImage"
import H1 from "../src/components/typography/H1"
import H3 from '../src/components/typography/H3'
import MiniCard from "../src/components/card/MiniCard"
import CardSion from "../src/components/card/CardSion"
import Copy from "../src/components/typography/copy"

const PrincipalDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
`

const CardDiv = styled.div`
    padding-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const GreyDiv = styled.div`
    padding: 80px;
    display: flex;
    flex-direction: column;
    background-color: #e6e6e6;
    margin-bottom: 40px;
`

const FooterDiv = styled.div`
    width: 100%;
    height: 50vh;
    background-color: black;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 426px) {
        
    }
`

const FooterCopy = styled.div`
    width: 100%;
    height: 20vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function History() {
    return(
        <PrincipalDiv>
            <Navbar />
            <TextDiv>
                <H1 color="black">Nossa História</H1>
                <H3 pdb="10px">Transformando a experiência do usuário</H3>
                <H3 pdb="10px">Arquitetura de código, modularização de pastas e com código limpo</H3>
                <H3 pdb="40px">Conhecimento de internet e suas requisições, middlewares com conexões e validadores e modules com services</H3>
            </TextDiv>
            <PrincipalImage image="tecno.jpg" height="100vh" width="150vh" />
            <CardDiv>
                <MiniCard />
            </CardDiv>
            <GreyDiv>
                <CardSion />
            </GreyDiv>
            <FooterCopy>
                <Copy />
            </FooterCopy>
        </PrincipalDiv>
    )
}
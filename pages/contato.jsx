import styled from "styled-components"

import Navbar from '../src/components/navbar/navbar'
import H3 from '../src/components/typography/H3'
import Logo from '../src/components/layout/Logo'
import Copy from "../src/components/typography/copy"

const PrincipalDiv = styled.div`
    display: flex;
    flex-direction: column;
`

const MainDiv = styled.div`
    margin-top: 90px;
    background-color: black;
    height: 55vh;
    padding: 40px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: end;
    color: white;
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

export default function Contato() {
    return(
        <PrincipalDiv>
            <Navbar />
            <MainDiv>
                <H3>Github</H3>
                <a href="https://github.com/pedroaparecido" target="_blank"><Logo image="github-ico.png" height="50px" width="50px" /></a>
                <H3>Linkedin</H3>
                <a href="https://www.linkedin.com/in/pedro-aparecido-rodrigues-474ab3222" target="_blank"><Logo image="linkedin-ico.png" height="50px" width="50px" /></a>
            </MainDiv>
            <FooterCopy>
                <Copy />
            </FooterCopy>
        </PrincipalDiv>
    )
}
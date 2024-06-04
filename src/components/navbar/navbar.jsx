import styled from "styled-components"

import Link from "next/link"

const StyledDiv = styled.div`
    position: fixed;
    padding: 30px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: white;
`

const DivE = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    gap: 50px;
`

const H1 = styled.h1`
font-size: 28px;
`

const H2 = styled.h2`
    font-size: 18px;
    color: grey;
`

const ButtonH2 = styled.a`
    font-size: 18px;
    color: grey;
    background-color: white;
    border: none;
    text-decoration: none;
    cursor: pointer;
`

const DivD = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    gap: 30px;

`

export default function Navbar() {
    return(
        <StyledDiv>
            <DivE>
                <Link href="/" style={{"textDecoration": "none", "color": "black"}}><H1>PORTFÓLIO</H1></Link>
                <ButtonH2 href="#home">HOME</ButtonH2>
                <ButtonH2 href="#sobre">SOBRE</ButtonH2>
                <ButtonH2 href="#projects"> PROJETOS</ButtonH2>
            </DivE>
            <DivD>
                <Link href="/history" style={{"textDecoration": "none"}}><H2>NOSSA HISTÓRIA</H2></Link>
                <Link href="/contato" style={{"textDecoration": "none"}}><H2>CONTATO</H2></Link>
            </DivD>
        </StyledDiv>
    )
}
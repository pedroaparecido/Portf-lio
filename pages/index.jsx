import styled from "styled-components"

import Link from "next/link"

import Navbar from "../src/components/navbar/navbar"
import PrincipalImage from "../src/components/layout/PrincipalImage"
import H1 from "../src/components/typography/H1"
import H6 from "../src/components/typography/H6"
import ButtonPrincipal from "../src/components/forms/button/ButtonPrincipal"
import Logo from "../src/components/layout/Logo"
import H3 from "../src/components/typography/H3"
import Span from "../src/components/typography/span"
import StyleText from "../src/components/typography/styletext"
import Copy from "../src/components/typography/copy"

const PrincipalDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const ImageDiv = styled.div`
    display: flex;
    align-items: center;
    margin-left: 100px;
    gap: 25px;
    padding-top: 80px;
`

const LogoDiv = styled.div`
    padding: 20px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    box-shadow: 0 2px 0 0px rgba(0, 0, 0, 0.25);
`

const About = styled.div`
    padding-top: 100px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const AboutDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SaleDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 150px;
    
`

const GridDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
`

const ProductsDiv = styled.div`
    display: flex;
    gap: 60px;
`

const A = styled.a`
    cursor: pointer;
    text-decoration: none;
    z-index: 1;
`

const MarginDiv = styled.div`
    background-color: transparent;
    border: solid white;
    padding: 40px 40px 0 40px;
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

export default function Home() {
    return(
        <PrincipalDiv>
            <a name="home"></a>
            <Navbar />
            <PrincipalImage image='home.jpg' height="100vh" width="100%">
                <H1 color="white">Amor a construção</H1>
                <H1 color="white"> E o desenvolvimento!</H1>
                <H6 color="white">Desenvolvimento web, construindo e gerenciando web sites, aplicações otimizadas e com designs inteligente</H6>
                <H6 pdl="100px" color="white">Um desenvolvedor web apaixonado por tecnologia iniciando carreira</H6>
                <ImageDiv>
                    <ButtonPrincipal>SocialDev</ButtonPrincipal>
                    <ButtonPrincipal>Barbershop</ButtonPrincipal>
                </ImageDiv>
            </PrincipalImage>
            <LogoDiv>
                <Logo image='/socialdev.png' width="300px" height="100px"/>
                <Logo image='/jogodavelha.png' width="300px" height="100px"/>
                <Logo image='/barbershop.png' width="300px" height="100px"/>
                <Logo image='/portfolio.png' width="300px" height="100px"/>
            </LogoDiv>
            <a name="sobre"></a>
            <About>
            <Logo image='about.jpg' width="150vh" height="100vh" />
                <AboutDiv>
                    <StyleText>Sobre nós</StyleText>
                    <H3 pdb="40px" pdt="100px">Arquitetura selecionada para a sustentabilidade do site!</H3>
                    <H6 color="grey" pdl="">Pensado para projetar o gerenciamento de pastas e também componentização</H6>
                    <H6 color="grey" pdl="">Confiabilidade em boas práticas para manter a qualidade do código</H6>
                    <Span>LEIA MAIS</Span>
                </AboutDiv>
            </About>
            <a name="projects"></a>
            <SaleDiv>
                <H3 pdb="40px">Nossas melhores obras</H3>
                <GridDiv>
                    <Logo image="/barbershop.png" width="500px" height="500px" />
                    <Logo image="/socialdev.png" width="500px" height="500px" />
                </GridDiv>
            </SaleDiv>
            <ProductsDiv>
                <A href="https://barber-shop-rouge.vercel.app/" target="_blank"><Logo image="/barbershop.png" width="700px" height="400px"><MarginDiv><H3 color="#fff">BarberShop</H3></MarginDiv></Logo></A>
                <A href="https://social-dev-jet.vercel.app/login" target="_blank"><Logo image="/socialdev.png" width="700px" height="400px"><MarginDiv><H3 color="#fff">Socialdev</H3></MarginDiv></Logo></A>
            </ProductsDiv>
            <FooterCopy>
                <Copy />
            </FooterCopy>
        </PrincipalDiv>
    )
}
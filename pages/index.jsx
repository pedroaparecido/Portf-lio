import styled from "styled-components"

import Navbar from "../src/components/navbar/navbar"
import PrincipalImage from "../src/components/layout/PrincipalImage"
import H1 from "../src/components/layout/typography/H1"
import H6 from "../src/components/layout/typography/H6"
import ButtonPrincipal from "../src/components/forms/button/ButtonPrincipal"

const ImageDiv = styled.div`
    display: flex;
    align-items: center;
    margin-left: 100px;
    gap: 25px;
    padding-top: 80px;
`

export default function Home() {
    return(
        <div>
            <Navbar />
            <PrincipalImage image='/home.jpg' height="100vh" width="95%">
                <H1>Love the build</H1>
                <H1> and de Development!</H1>
                <H6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vero fuga aperiam illo ipsa?</H6>
                <H6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse minus nihil unde</H6>
                <ImageDiv>
                    <ButtonPrincipal>Men</ButtonPrincipal>
                    <ButtonPrincipal>Woman</ButtonPrincipal>
                </ImageDiv>
            </PrincipalImage>
        </div>
    )
}
import styled from "styled-components"

const StyledDiv = styled.div`
    background-color: #EFEFEF;
    padding: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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

const DivD = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    gap: 50px;
`

export default function Navbar() {
    return(
        <StyledDiv>
            <DivE>
                <H1>NAVBAR</H1>
                <H2>MEN</H2>
                <H2>WOMAN</H2>
                <H2> COLLECTION</H2>
                <H2>LOOKBOOK</H2>
                <H2>SALE</H2>
            </DivE>
            <DivD>
                <H2>OUR STORY</H2>
                <H2>CONTACT</H2>
            </DivD>
        </StyledDiv>
    )
}
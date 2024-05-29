import styled from "styled-components"

const Tittle = styled.h1`
    color: white;
    font-size: 70px;
    font-weight: bold;
    text-align: left;
    padding-left: 100px;
    padding-bottom: 40px;
`

export default function H1({ children }) {
    return(
        <Tittle>{children}</Tittle>
    )
}
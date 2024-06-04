import styled from "styled-components"

const StyledH1 = styled.h1`
    font-size: 16px;
    color: orange;
`

export default function StyleText({ children }) {
    return(
        <StyledH1>{children}</StyledH1>
    )
}
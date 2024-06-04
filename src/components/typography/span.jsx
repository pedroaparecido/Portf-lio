import styled from "styled-components"

const StyledSpan = styled.span`
    padding-top: 100px;
    font-size: 24px;
    font-weight: bold;
    box-shadow: 0 2px 0 0 rgb(255, 204, 0);
`

export default function Span({ children }) {
    return(
        <StyledSpan>{children}</StyledSpan>
    )
}
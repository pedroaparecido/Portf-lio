import styled from "styled-components"

const StyledTitle = styled.h3`
    color: ${props => props.color};
    font-size: 36px;
    font-weight: 500;
    text-align: center;
    padding-bottom: ${props => props.pdb};
    padding-top: ${props => props.pdt};
`

export default function H3({ children, pdt, pdb, color }) {
    return(
        <StyledTitle color={color} pdt={pdt} pdb={pdb}>{children}</StyledTitle>
    )
}
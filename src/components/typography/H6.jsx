import styled from "styled-components"

const Font = styled.div`
    color: ${props => props.color};
    font-size: 16px;
    text-align: left;
    padding-left: ${props => props.pdl};
    padding-bottom: 10px;
`

export default function H6({ children, color, pdl }) {
    return(
        <Font color={color} pdl={pdl}>{children}</Font>
    )
}
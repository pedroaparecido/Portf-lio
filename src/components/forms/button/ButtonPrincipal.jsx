import styled from "styled-components"

const PrincipalButton = styled.button`
    padding: 15px 20px;
    background-color: #fffffff0;
    width: 200px;
    margin-top: 10px;
    border: none;
`

export default function ButtonPrincipal({ children }) {
    return(
        <PrincipalButton>{children}</PrincipalButton>
    )
}
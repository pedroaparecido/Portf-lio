import styled from "styled-components"

const Font = styled.div`
    color: white;
    font-size: 16px;
    text-align: left;
    padding-left: 100px;
    padding-bottom: 10px;
`

export default function H6({ children }) {
    return(
        <Font>{children}</Font>
    )
}
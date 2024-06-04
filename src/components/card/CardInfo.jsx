import styled from "styled-components"

import H3 from "../typography/H3"
import H6 from "../typography/H6"

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 512px;
`

export default function CardInfo() {
    return(
        <StyledDiv>
            <H3>Com toda a versatilidade do React</H3>
            <H6 color="grey">Usando o sistema de componetização feito pelo React, sistema distribuidos de pastas, onde há possibilidades de usar o arquivo App e o Document, o App com as regras gerais de estilização e Document a componetização</H6>
        </StyledDiv>
    )
}
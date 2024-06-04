import styled from "styled-components"
import H6 from "../typography/H6"
import H3 from "../typography/H3"

const PrincipalDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 80%;
    gap: 30px;
    padding-bottom: 40px;
`

const ColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 1px 0 0 0 rgba(0, 0, 0, 0.25);
`

export default function MiniCard() {
    return(
        <PrincipalDiv>
            <ColumnDiv>
                <H3>Arquitetura</H3>
                <H6 color="grey">Arquitetura baseada no sistema de pastas do react, middlewares e modules com conexão e banco de dados, validadores e services. Componentes iguais ao App e o Document que além de ser arquivos são componentes react, para o estilo e a forma do componente do projeto.</H6>
            </ColumnDiv>
            <ColumnDiv>
                <H3>Clean Code</H3>
                <H6 color="grey">Tudo pensando em forma de componetização do documento, para ser facil de ver erros, corrigilos. Leitura simples e dinâmica.</H6>
            </ColumnDiv>
            <ColumnDiv>
                <H3>Requisições</H3>
                <H6 color="grey">Troca de informações entre API ou até mesmo consultando sua própria API, requerer dados do banco, como também fazer a amostragem do pedido, tudo com rapidez utilizando o virtualDOM do react</H6>
            </ColumnDiv>
        </PrincipalDiv>
    )
}
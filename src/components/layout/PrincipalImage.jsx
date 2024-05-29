import styled from "styled-components"

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
`

const StyledImage = styled.div`
    background-image: url('${props => props.image}');
    background-size: cover;
    background-repeat: no-repeat;
    width: ${props => props.width};
    height: ${props => props.height};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
`

export default function PrincipalImage({ image, width, height, ...props }) {
    return(
        <StyledDiv>
            <StyledImage image={image} width={width} height={height} {...props}>
                {props.children}
            </StyledImage>
        </StyledDiv>
    )
}
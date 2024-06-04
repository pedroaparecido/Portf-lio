import styled from "styled-components"

const StyledLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('${props => props.image}');
    background-size: contain;
    background-repeat: no-repeat;
    width: ${props => props.width};
    height: ${props => props.height};
`

export default function Logo({children, image, width, height, props}) {
    return(
        <StyledLogo height={height} width={width} image={image}>{children}</StyledLogo>
    )
}
import React from 'react'
import styled from 'styled-components'

const HeroContainer = styled.header`
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${props => props.image ? props.image : null });
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 125px;
    width: 100%;
    position: relative;
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0;
        height: 0;
        border-bottom: 22px solid white;
        border-left: 320px solid transparent;
    }

    @media screen and (max-width: 480px) {
        &::after {
            border-left: 300px solid transparent !important;
        }
    }
`;

// const Gif = styled.image`
//     background: url(${props => props.image})
//     // position: absolute;
//     // bottom: 0;
//     // right:0;
//     // width: 30px;
// `;

export default function Hero({ children, image }) {
    return (
        <HeroContainer image={image}>
            { children }
        </HeroContainer>
    )
}

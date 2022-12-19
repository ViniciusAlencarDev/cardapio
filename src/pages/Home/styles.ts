import styled, { css } from 'styled-components';
import { primaryColor, secundaryColor, tertiaryColor, quaternaryColor, textColor } from '../../config/colors.json';

import background from '../../assets/background.png';

interface IContent {
    ref: any
}

interface SubHeaderButtonProps {
    selected: boolean
}

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${background}) no-repeat;
    background-position: center;
    background-size: 40% 60%;
    background-color: ${quaternaryColor};
    background-attachment: fixed;
    position: absolute;
    left: 0;
    top: 0;
    overflow-x: hidden;
    color: ${textColor};

    @media (max-width: 768px) {
        background-size: 80% 40%;
    }
`

export const Header = styled.header`
    width: 100%;
    height: 100px;
    background-color: ${tertiaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    box-sizing: border-box;
    box-shadow: 1px 1px 10px 1px ${secundaryColor};
    position: fixed;
    
    @media (max-width: 768px) {
        height: 80px;
    }
`

export const HeaderImage = styled.img`
    width: 25x;
    height: 25px;
    margin-right: 5px;
`

export const HeaderTitle = styled.span`
    color: ${primaryColor};
    font-size: 30pt;
    font-family: cursive;
    font-weight: bold;
    text-shadow: 2px 2px 1px ${secundaryColor};
    text-transform: uppercase;
    display: flex;

    @media (max-width: 768px) {
        font-size: 16pt;
        text-shadow: 1px 1px 3px ${secundaryColor};
    }
`

export const SubHeader = styled.div`
    width: 100%;
    height: 70px;
    background-color: ${secundaryColor};
    margin-top: 100px;
    box-shadow: 1px 1px 1px ${tertiaryColor};
    display: flex;
    overflow-x: auto;
    color: ${tertiaryColor};

    @media (max-width: 768px) {
        margin-top: 80px;
        height: 50px;
    }
`

export const SubHeaderButton = styled.div<SubHeaderButtonProps>`
    cursor: pointer;
    font-size: 14pt;
    height: 100%;
    padding: 0 1px;
    border-right: 1px solid ${primaryColor};
    user-select: none;
    
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: italic;

    /* flex-basis: 100px; */
    min-width: 130px;

    /* width: 100px; */
    /* display: inline-flex; */

    ${props => props.selected && css`
        background-color: ${primaryColor};
    `}

    @media (max-width: 768px) {
        font-size: 10pt;
    }
`

export const Content = styled.div<IContent>`
    max-width: 1200px;
    height: auto;
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 100px;

    @media (max-width: 768px) {
        width: 100%;
        padding-top: 0px;
        padding-bottom: 50px;
    }
`

export const Box = styled.div`
    width: 100%;
    height: auto;
`

export const BoxTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    padding: 20px;
    margin-bottom: 10px;
    margin-top: 40px;

    @media (max-width: 768px) {
        padding: 10px;
    }
`

export const BoxTitleSpan = styled.span`
    font-size: 30pt;
    font-weight: bold;
    color: #fff;
    text-shadow: 1px 1px 1px ${secundaryColor};
    font-family: monospace;
    
    @media (max-width: 768px) {
        font-size: 20pt;
    }
`

export const BoxContent = styled.div`
    width: 100%;
`

export const BoxItem = styled.div`
    display: flex;
    padding: 10px 50px;
    font-style: italic;
    font-size: 12pt;

    @media (max-width: 768px) {
        padding: 5px 10px;
        font-size: 7pt;
    }
`

export const BoxItemDescription = styled.div`
    font-weight: bold;
`

export const BoxItemSpace = styled.div`
    flex: 1;
    overflow: hidden;
`

export const BoxItemPrice = styled.div`
    font-weight: bold;
`

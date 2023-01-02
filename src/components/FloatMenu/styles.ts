import styled, { css, keyframes } from 'styled-components';
import { primaryColor, secundaryColor, tertiaryColor } from '../../config/colors.json';

interface IBackgroundBlack {
    activate: boolean;
}

interface ICard {
    rotate: number;
    activate: boolean;
}

interface IButton {
    activate: boolean;
}

interface IButtonTabSimulation {
    selected: boolean;
}

export const Container = styled.div`
    z-index: 99;
`

export const BoxBackground = styled.div`
    width: 100%;
    height: 100%;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 2;
`

export const BackgroundBlack = styled.div<IBackgroundBlack>`
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.5;
    z-index: 2;

    ${props => !!props.activate && css`
        animation-name: ${animationBackgroundBlack};
        animation-duration: 0.5s;
        animation-iteration-count: initial;
    `}
`

const animationBackgroundBlack = keyframes`
    0% { opacity: 0 }
    100% { opacity: 0.5 }
`

export const Button = styled.div<IButton>`
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: fixed;
    z-index: 3;
    opacity: 0.7;
    padding: 0;
    font-size: 20pt;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${tertiaryColor};
    color: ${primaryColor};
    cursor: pointer;
    font-weight: bold;
    user-select: none;

    &:hover {
        background-color: ${secundaryColor};
        color: ${tertiaryColor};
    }

    ${props => !!props.activate && css`
        opacity: 1;
        background-color: ${secundaryColor};
        color: ${tertiaryColor};
        border: 1px solid gray;
    `}
`

export const Card = styled.div<ICard>`
    width: 170px;
    height: 40px;
    background-color: ${tertiaryColor};
    color: ${secundaryColor};
    font-weight: bold;
    position: absolute;
    bottom: 28px;
    right: 55px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    border-radius: 10px;
    z-index: 2;
    transform-origin: bottom right;
    border-bottom: 1px solid gray;
    cursor: pointer;
    position: fixed;
    transform: rotate(0deg);
    transition: 2s;

    &:hover {
        background-color: ${secundaryColor};
        color: ${tertiaryColor};
    }

    ${props => !!props.rotate && css`
        transform: rotate(${props.rotate}deg);
    `}

    ${props => !!props.activate && css`
        animation-name: ${animationCard(props.rotate)};
        animation-duration: 0.5s;
        animation-iteration-count: initial;
    `}
`

const animationCard = (rotate: number) => keyframes`
    0% { transform: rotate(0deg) }
    100% { transform: rotate(${rotate}deg) }
`

export const Box = styled.div`
    min-width: 290px;
    max-width: 95%;
    height: auto;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    padding: 40px 20px;
`

export const BoxTitle = styled.h1`
    font-size: 20pt;
    color: ${secundaryColor};
    text-shadow: 1px solid;
    margin-bottom: 30px;
`

export const BoxDescription = styled.span`
    font-size: 8pt;
    color: #333;
    display: block;
    font-weight: bold;
    cursor: pointer;
`

export const BoxDescriptionSimulation = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;

    div {
        width: 100%;
        display: flex;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const BoxSimulationListItens = styled.div`
    background-color: #f1f1f1;
    min-height: 200px;
    max-height: 400px;
    flex: 1;
    overflow-y: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`

export const BoxSimulationItem = styled.div`
    background-color: lightgray;
    margin-bottom: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;

    button {
        margin: 0 5px;
        background-color: ${secundaryColor};
    }

    div {
        display: flex;
        align-items: center;
    }

    div:nth-child(2) {
        flex: 1;
        
        @media (max-width: 768px) {
            display: flex;
            flex-direction: column;

            button {
                margin-top: 10px;
            }
        }
    }
`

export const BoxSimulationListItensInProcess = styled.div`
    background-color: #f1f1f1;
    min-height: 200px;
    max-height: 400px;
    flex: 1;
    overflow-y: auto;
    padding: 10px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;

    button {
        background-color: ${primaryColor};
    }

    div:nth-child(1) {
        display: flex;
        flex-direction: column;
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
    }

    div {
        flex: 1;
        padding: 10px;
        box-sizing: border-box;
    }
`

export const BoxSimulationItemInProcess = styled.div`
    background-color: lightgray;
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    border: 1px solid #fff;

    button {
        width: 100%;
        background-color: ${secundaryColor};
    }
`

export const BoxButtonClipboard = styled.input`
    margin-left: 10px;
    border: none;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    background-color: ${primaryColor};
    color: ${tertiaryColor};

    &:hover {
        background-color: ${secundaryColor};
    }
`

export const BoxImage = styled.img`
    width: 280px;
    height: 280px;
    margin: auto;
`

export const ButtonTabSimulation = styled.div<IButtonTabSimulation>`
    flex: 1;
    background: lightgray;
    border-radius: 0;
    padding: 10px;
    display: flex;
    justify-content: center;
    cursor: pointer;


    ${props => !!props.selected && css`
        background-color: ${primaryColor};
        color: #fff;
    `}

`
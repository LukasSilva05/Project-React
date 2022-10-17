import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: #f8f8f8;
    box-shadow: 0 0 5px rgba(0,0,0,0.9);
    height: 100vh;
    border-radius: 15px;
    margin: 20px;
    padding: 30px 40px;
    text-align: justify;

    div {
        display: flex;
        justify-content: space-between;
        gap: 15px;
    }
`

export const Caixa = styled.div`
    display: flex;
    flex-direction : column;
    justify-content: space-between;
    padding: 40px 40px;
    height: 70%;

    border-top: 6px solid #3fc73f;
    border-left: 1px solid #3fc73f;
    border-bottom: 1px solid #3fc73f;
    border-right: 1px solid #3fc73f;
    border-radius: 20px;

    box-shadow: 0 0 5px rgba(0,0,0,0.4);

    section {
        display: flex;
        flex-flow: column wrap;
            h1 {
                font-size: 45px;
                text-shadow: 0 0 5px rgba(0,0,0,0.4);
            }
            p {
                font-size: 20px;
                text-shadow: 0 0 5px rgba(0,0,0,0.4);
            }
    }

`

export const Button = styled.button`
    background: #e6e6e6;
    width: 230px;
    padding: 10px;

    font-family: 'JetBrains Mono', monospace;
    font-size: 25px;
    text-shadow: 0 0 5px rgba(0,0,0,0.4);

    border: none;
    border-bottom: 2px solid #3fc73f;
    border-right: 2px solid #3fc73f;
    box-shadow: 0 0 5px rgba(0,0,0,0.4);
    border-radius: 30px;
    
    cursor: pointer;

    :hover {
        filter: brightness(0.9);
    }
`

export const Buttons = styled.div`
    display: flex;
    flex-flow: row wrap;
    padding: 40px 30px;
    height: 6%;

    border-bottom: 6px solid #3fc73f;
    border-left: 1px solid #3fc73f;
    border-top: 1px solid #3fc73f;
    border-right: 1px solid #3fc73f;
    border-radius: 20px;

    box-shadow: 0 0 5px rgba(0,0,0,0.4);
`
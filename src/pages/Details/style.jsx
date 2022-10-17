import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #f8f8f8;

    border-radius: 15px;
    margin: 10px;
    height: 100vh;
    padding: 50px;

    text-align: justify;

    h1 {
        font-size: 45px;
    }
    p {
        padding-bottom: 50px;
        font-size: 20px;
    }

    div {
        display: flex;
        justify-content: space-between;

        a{
                margin-left: 10px;
            }
    }

`

export const Button = styled.button`
    background: #e6e6e6;
    width: 230px;
    padding: 10px;

    font-family: 'JetBrains Mono', monospace;
    font-size: 25px;

    border: none;
    border-bottom: 3px solid #3fc73f;
    border-right: 2px solid #3fc73f;
    border-radius: 30px;
    
    cursor: pointer;

    :hover {
        filter: brightness(0.9);
    }
`

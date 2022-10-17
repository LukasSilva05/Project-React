import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: #f8f8f8;
    box-shadow: 0 0 5px rgba(0,0,0,0.9);

    border-radius: 15px;
    margin: 20px;
    height: 100vh;
    padding: 0 50px;

    text-align: justify;
    
    section {
        display: flex;
        flex-direction: column;
            h1 {
                font-size: 45px;
                text-shadow: 0 0 5px rgba(0,0,0,0.4);
            }
            p {
                font-size: 20px;
                text-shadow: 0 0 5px rgba(0,0,0,0.4);
            }
    }

    
    div {
        display: flex;
        justify-content: space-between;

        a {
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

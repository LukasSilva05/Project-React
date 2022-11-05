import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    background: #f8f8f8;
    box-shadow: 0 0 5px rgba(0,0,0,0.9);
    border-radius: 15px;
    margin: 12px;
    padding: 20px;
    text-align: justify;

`

export const Caixa = styled.div`
    display: flex;
    flex-direction : column;
    justify-content: space-between;
    padding: 50px 40px;

    border-top: 6px solid #3fc73f;
    border-left: 1px solid #3fc73f;
    border-bottom: 1px solid #3fc73f;
    border-right: 1px solid #3fc73f;
    border-radius: 20px;

    box-shadow: 0 0 5px rgba(0,0,0,0.4);

    div {
        flex-direction : column;
        text-shadow: 0 0 5px rgba(0,0,0,0.4);
            h1 {
                font-size: 30px;        
            }
            p {
                font-size: 16px;
            }
    }

`

export const Button = styled.button`
    background: #e6e6e6;
    width: 200px;
    padding: 10px;

    font-family: 'JetBrains Mono', monospace;
    font-size: 18px;
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
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 40px 30px;

    border-bottom: 6px solid #3fc73f;
    border-left: 1px solid #3fc73f;
    border-top: 1px solid #3fc73f;
    border-right: 1px solid #3fc73f;
    border-radius: 20px;

    box-shadow: 0 0 5px rgba(0,0,0,0.4);

    #detailsButton {
        display: flex;
        justify-content: space-between;
        gap: 15px;
    }
`
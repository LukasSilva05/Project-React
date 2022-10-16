import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 15px;
    height: 100vh;
    margin: 15px;
    padding-top: 200px;
    background: #f8f8f8;
`
export const BoxContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    border-top: 5px solid #3fc73f;
    border-left: 2px solid #3fc73f;
    border-radius: 15px;

    width: 90%;
    padding: 18px 25px;
    margin-bottom: 50px;
`

export const Button = styled.button`
    border-radius: 10px;
    padding: 10px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 18px;
    border: none;
    border-bottom: 3px solid #3fc73f;
    border-right: 2px solid #3fc73f;
    background: #e6e6e6;

    :hover {
        filter: brightness(0.9);
    }
`
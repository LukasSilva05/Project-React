import styled from "styled-components";

export const BoxContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    text-shadow: 0 0 5px rgba(0,0,0,0.4);

    border-top: 6px solid #3fc73f;
    border-left: 1px solid #3fc73f;
    border-bottom: 1px solid #3fc73f;
    border-right: 1px solid #3fc73f;
    border-radius: 20px;

    box-shadow: 0 0 5px rgba(0,0,0,0.4);
    width: 93%;
    padding: 40px 30px;
    margin-bottom: 50px;
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
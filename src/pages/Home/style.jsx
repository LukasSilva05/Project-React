import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 15px;
    margin: 10px;
    padding-top: 200px;
    background: #f8f8f8;
`
export const BoxContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    border-top: 6px solid #3fc73f;
    border-left: 2px solid #3fc73f;
    border-bottom: 1px solid #3fc73f;
    border-radius: 20px;

    width: 93%;
    padding: 40px 30px;
    margin-bottom: 50px;
`

export const Button = styled.button`
    background: #e6e6e6;
    height: 55px;
    width: 250px;
    padding: 10px;

    font-family: 'JetBrains Mono', monospace;
    font-size: 18px;

    border: none;
    border-bottom: 3px solid #3fc73f;
    border-right: 2px solid #3fc73f;
    border-radius: 30px;

    cursor: pointer;
    
    :hover {
        filter: brightness(0.9);
    }
`
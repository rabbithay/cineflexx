/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

export const Background = styled.div`
    background-color: #1d1c26;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 67px 24px 110px 28px;
    font-family: 'Roboto Condensed';
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SubTitle = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
        color: #fff;
        font-size: 26px;
        font-weight: 500;
    }
`;

export const MoviesList = styled.div`
    width: 100%;
    display: inline-flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    
`;

export const Movie = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.heigth};
    padding: ${(props) => props.padding};
    border-radius: ${(props) => props.radius};
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    margin: ${(props) => props.margin};
    background-color: #ffe9f7;
    img {
        width: 100%;
        height: 100%;
    }
`;

export const SessionsList = styled.div`
    width: 100%;
    height: auto;
    p{
        font-size: 20px;
        color: #fff8fd;
    }
`;

export const Times = styled.div`
   display: flex;
   button {
        width: 83px;
        height: 43px;
        background-color: #e94692;
        border-radius: 5px;
        margin: 22px 10px 23px 0px;
        font-size: 18px;      
        color: #fff;
        font-weight: 500;
    }
`;
export const Form = styled.form`
    width: 100%;
    height: auto;
    margin-top: 42px;
    color: #0e0e13;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        font-size: 18px;
        margin-top: 7px;
        width: 100%;
        color: #fff8fd;

    }
    input{
        width:calc(100vw - 48px);
        height: 51px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 18px;
        display: flex;
        align-items: center;
        font-size: 18px;
        margin-top: 15px;

        ::placeholder {
            color: #46455b;
            font-style: italic;
        }
    }
   
`;
export const ConfirmButton = styled.button`
    width: 225px;
    height: 42px;
    background-color: #e94692;
    border-radius: 5px;
    color: #fff;
    font-size: 18px;
    margin-top: 30px;
    font-weight: 500;
    margin-bottom: 30px;
    .disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    :active {
      transform: translateX(1px);
      transform: translateY(1px);
    }
`;
export const SeatsList = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-gap: 7px;
    grid-template-columns: repeat(10, auto);
`;
export const SeatBox = styled.div`
    width: 26px;
    height: 26px;
    background-color: ${(props) => ((props.isAvailable) ? ((props.isSelected) ? '#8DD7CF' : '#C3CFD9') : '#FBE192')};
    border: 2px solid ${(props) => ((props.isAvailable) ? ((props.isSelected) ? 'rgba(212, 245, 241, 0.5)' : 'rgba(248, 252, 255, 0.5)') : 'rgba(245, 243, 236, 0.7)')};
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;

`;
export const Label = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: space-around;
    div {
    p{
        font-size: 13px;
        color: #fff8fd;

    }
    display: flex;
    flex-direction: column;
    align-items: center;
    }
`;
export const InfoTitle = styled.p`
    width: 100%;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    margin-top: 40px;
    color: #ffeab0;

`;
export const InfoDescription = styled.p`
    width: 100%;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.04em;
    color: #fff8fd;
`;
export const BottomBar = styled.div`
    width: 100%;
    height: 117px;
    background-color: #e94692;
    position: fixed;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: left;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    bottom: 0px;
    padding-left: 18px;
    .div {
        display: flex;
        flex-direction: column;

    }
    p {
        font-family: 'Roboto Condensed';
        font-size: 26px;
        color: #fff;
        margin-left: 14px;
        font-weight: 500;
    }
`;

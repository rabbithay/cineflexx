/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';

export default function SeatLabel() {
  return (
    <Label>
      <div>
        <SeatBox
          isAvailable
          isSelected
        />
        <p>Selecionado</p>
      </div>
      <div>
        <SeatBox
          isAvailable
          isSelected={false}
        />
        <p>Disponível</p>
      </div>
      <div>
        <SeatBox
          isAvailable={false}
          isSelected={false}
        />
        <p>Indisponível</p>
      </div>
    </Label>
  );
}
const Label = styled.div`
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

const SeatBox = styled.div`
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

/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';

export default function Seat({ setSeatList, seat, seatList }) {
  const {
    id, name, isAvailable, isSelected,
  } = seat;

  function SelectSeat() {
    const seats = seatList.map((s) => {
      if (s.id === id && s.isAvailable) {
        // eslint-disable-next-line no-param-reassign
        s.isSelected = !s.isSelected;
      }
      return s;
    });
    setSeatList(seats);
  }
  return (
    <SeatBox
      isAvailable={isAvailable}
      isSelected={isSelected}
      onClick={() => ((isAvailable) ? SelectSeat(id) : alert('Esse assento não está disponível!'))}
    >
      {name}

    </SeatBox>
  );
}
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

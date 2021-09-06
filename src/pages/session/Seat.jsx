import React from 'react';
import { SeatBox } from '../styledComponents';

export default function Seat({ setSeatList, seat, seatList }) {
  const {
    id, name, isAvailable, isSelected,
  } = seat;

  function SelectSeat() {
    const seats = seatList.filter((s) => {
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

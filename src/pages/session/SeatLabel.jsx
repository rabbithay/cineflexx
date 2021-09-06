import React from 'react';
import { SeatBox, Label } from '../styledComponents';

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

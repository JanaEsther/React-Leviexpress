import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './style.css'

 export const ReservationPage = () => {
  const[reservation, setReservation] = useState(null);

  const TicketDetail =()=>{
    let params = useParams()
    params.postId;
  }
  
 
  return (
    <div class="reservation container">
      <h2>Vaše e-jízdenka č. HAQBAQASf7M</h2>
      <div class="reservation__body">
        <div class="reservation__headings">
          <p>Datum cesty:</p>
          <p>Odjezd:</p>
          <p>Příjezd:</p>
          <p>Sedadlo:</p>
        </div>
        <div class="reservation__info">
          <p>sobota 18. května 2024</p>
          <p>Bratislava, 21:15</p>
          <p>Budapest, 23:55</p>
          <p>18</p>
        </div>
      </div>
    </div>
  );
};



import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail';
import { SeatPicker } from '../../components/SeatPicker';


export const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journey) => {
    setJourney(journey);
  };

  const handleBuy = () => {
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'create',
        seat: journey.autoSeat,
        journeyId: journey.journeyId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const reservationId = data.reservationId;
        console.log(reservationId);
        navigate(`reservation/${reservationId}`);
      });
  };

  return (
    <>
      <main>
        <JourneyPicker onJourneyChange={handleJourneyChange} />
        {journey && <JourneyDetail journey={journey} />}
        {journey && <SeatPicker number={journey.autoSeat} />}
        <div className="controls container">
          <button className="btn btn--big" onClick={handleBuy} type="button" disabled={!journey}>
            Rezervovat
          </button>
          <button className="btn btn__back" onClick={handleClick} type="button">
            Zpět
          </button>
        </div>
      </main>
    </>
  );
};

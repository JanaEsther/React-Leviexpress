import { BusStop } from '../BusStop';
import './style.css'


export const JourneyDetail = ({journey}) => {
  return (
    <div class="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">
      {journey.stops.map((stop) =>{
      <BusStop
      key={stop.code}
      city={stop.city}
      station={stop.station}
      time={stop.departure}
      />
      })}
      </div>
    </div>
  
  );
};



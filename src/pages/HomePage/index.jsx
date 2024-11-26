import { JourneyPicker } from '../../components/JourneyPicker';

export const HomePage = () => {

  const handleJourneyChange = ({journeyData})=>{
    return(
    console.log(journeyData)
    )
  }

  handleJourneyChange();

  return (
    <main>
      <JourneyPicker />
    </main>
  );
};

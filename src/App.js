import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import Tower from "./components/steps/Tower";
import Floors from "./components/steps/Floors";
import MeetingRoom from "./components/steps/MeetingRoom";
import DateAndTimeInterval from "./components/steps/DateAndTimeInterval";
import Comments from "./components/steps/Comments";
import Final from "./components/steps/Final";
import { useState } from "react";
import { StepperContext } from "./components/contexts/StepperContext";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);
  const steps = [
    "Tower",
    "Floors",
    "Meeting Room",
    "Date and Time",
    "Comments",
    "Complete"
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Tower />
      case 2:
        return <Floors />
      case 3:
        return <MeetingRoom />
      case 4:
        return <DateAndTimeInterval />
      case 5:
        return <Comments />
      case 6:
        return <Final />
      default:

    }
  }

  const handleClick = (direction) => {
    let newStep = currentStep;

    switch (direction) {
      case "next":
        newStep++
        break;
      case "back":
        newStep--
        break;
      case "clear":
        for (let prop in userData) {
          setUserData({ [prop]: "" });
        }
        newStep = 1;
        break;
      default:
        break;
    }

    if (newStep > steps.length) {
      alert("Look in the logs, there's JSON with user data!")
      console.log(userData)
    }

    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }


  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      {/* Stepper */}
      <div className="container horizontal mt-5">
        <Stepper
          steps={steps}
          currentStep={currentStep}
        />
        {/* Display Components */}
        <div className="my-10 p-10">
          <StepperContext.Provider value={{
            userData,
            setUserData,
            finalData,
            setFinalData
          }}>
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
      </div>
      {/* Navigation controls */}
      <StepperControl
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
      />
    </div>
  );
}

export default App;

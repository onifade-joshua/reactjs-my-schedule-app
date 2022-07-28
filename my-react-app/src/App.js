import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Schedule from "./components/Schedule";


function App() {
  return (
    <div>
      <h1>My Schedule</h1>
      <Schedule text="Study time" />
      <Schedule text="Time to eat" />
      <Schedule text="Time to play" />
      <Modal />
      <Backdrop />
    </div>
  );

}

export default App;

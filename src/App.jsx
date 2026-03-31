import { timer } from "./timer";
import { timer1 } from "./timer1";
import { timer2 } from "./timer2";


function App(){

  const start=()=>{
    timer();
  };

  return(
     <div className="container">
      <div className="movie-card">
          <div className="form-group">
            <label>Inception</label>
          </div>

          <button onClick={timer} className="add-btn" id="display">
            Start Countdown
          </button>
        </div>

      <div className="movie-card">
          <div className="form-group">
            <label>Inception</label>
          </div>

          <button onClick={timer1} className="add-btn" id="display1">
            Start Countdown
          </button>
        </div>
     
     <div className="movie-card">
          <div className="form-group">
            <label>Inception</label>
          </div>

          <button onClick={timer2} className="add-btn" id="display2">
            Start Countdown
          </button>
        </div>
        </div>
  );
}
export default App;
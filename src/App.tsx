import "./App.css";
import logo from './assets/icon.svg';


const App = () => {

  return <>
    <div className="background"></div>
    <div className="pageContainer">
      <div className="header">
        <div className="logoContainer">
          <img src={logo} alt="aventura america logo" />
        </div>
      </div>
      <div className="mainSection">
        <div className="headers">
          <h1>WE ARE LAUNCHING SOON!</h1>
          <h5>Subscribe and get notified</h5>
        </div>
        <div className="subscriptionInputs">
          <div className="inputContainer">
            <input type="text" name="email" id="emailInput" />
            <button type="submit" className="slide_right">Notify Me!</button>
          </div>
        </div>
      </div>
      <div className="footer">
        social media links...
      </div>
    </div>
  </>
};

export default App;
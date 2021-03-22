import React from 'react';
import './App.css';

Notification.requestPermission().then(function(result) {
  console.log('Permission: ' + result);
});

function showNotification(text) { 
  const notification = new Notification("Timer", {
    body: text + " min Timer complete"
  });
}

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Timer />
      </div>
    )
  }
}

class Timer extends React.Component { 
  constructor(props) { 
    super(props);
    this.state = {
      date: "",
      timerInput: "",
      timerValue: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.formatTime = this.formatTime.bind(this);
    this.tick = this.tick.bind(this);
  }

  tick() { 
    this.setState((state, props) => {
      if (state.date === 0) { 
        clearInterval(this.timerId);
        showNotification(this.state.timerValue);
        return;
      }
      return {
        date: state.date - 1
      };
    });
  }

  handleSubmit(e) { 
    e.preventDefault();
    this.setState({ timerInput: "" });

    if (this.state.date === "") {
      return;
    }
    else {
      this.timerId = setInterval(this.tick, 1000);
      this.setState((state, props) => ({ 
        date: parseInt(state.date)
      }));
    }
  }

  handleChange(e) { 
    this.setState({ 
      date: 60*e.target.value,
      timerInput: e.target.value,
      timerValue: e.target.value
    });
  }

  handleReset(e) {
    e.preventDefault();
    clearInterval(this.timerId);
    this.setState({ date: "" });
  }

  formatTime(s) {
    if (s === "") {
      return "00:00";
    }
    else {
      const min = (Math.floor(s / 60)).toString().padStart(2, '0');
      const sec = (s % 60).toString().padStart(2, '0');
      const time = min + ":" + sec;
      return time;
    }
  }

  render() { 
    const { date } = this.state;
    const time = this.formatTime(date);

    return (
      <>
        <div className="row">
          <h1>Timer</h1>
        </div>
        <form>
          <label>
            Time:
            <input 
              className="mx-3 px-3" 
              onChange={this.handleChange} 
              value={this.state.timerInput}
              type="text" 
              name="name" />
          </label>
          <button className="btn mx-3" onClick={this.handleSubmit}>
            Start 
          </button>
          <button className="btn mx-3" onClick={this.handleReset}>
            Reset
          </button>
        </form>
        <p>{time}</p>
      </>
    )
  }
}

export default App;

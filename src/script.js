//set up a stock watch

//constructor: where we store the running time of stop watch
class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timePassedInMilliSeconds: 0,
    };

    this.timer = null;
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }

  start() {
    if (!this.timer) {
      let startTime = Date.now();

      this.timer = setInterval(() => {
        const stopTime = Date.now(); //get current time

        const timePassedInMilliSeconds =
          stopTime - startTime + this.state.timePassedInMilliSeconds; // work out the elapsed time

        this.setState({
          timePassedInMilliSeconds, //store the total elapsed time( current + previous ) here
        });

        startTime = stopTime; //set the time to the new current time
      }, 250); // Executed every 250 millisecond => run in a small succession , not too small or run too many times
    }
  }

  stop() {
    window.clearInterval(this.timer);

    this.timer = null;
  }

  reset() {
    this.stop();

    this.setState({
      timePassedInMilliSeconds: 0,
    });
  }

  render() {
    return (
      <div>
        <h2
          className="border px-3 py-4 rounded my-3 mx-auto text-center"
          style={{ maxWidth: "300px" }}
        >
          {Math.floor(this.state.timePassedInMilliSeconds / 1000)} s
        </h2>
        <div className="d-flex justify-content-center">
          <button className="btn btn-outline-primary mr-2" onClick={this.start}>
            start
          </button>
          <button className="btn btn-outline-danger mr-2" onClick={this.stop}>
            stop
          </button>
          <button className="btn btn-outline-warning" onClick={this.reset}>
            reset
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<StopWatch />, document.getElementById("root"));

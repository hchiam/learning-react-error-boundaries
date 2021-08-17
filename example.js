class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // set state variable so next render will show fallback component:
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // logErrorToMyService(error, errorInfo);
    console.log(error, errorInfo);
  }

  render() {
    return this.state.hasError ? (
      <p>This simulates something going wrong. See console log for details.</p>
    ) : (
      this.props.children
    );
  }
}

class ContainerToTriggerErrorLater extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 3 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ count }) => ({
      count: count - 1,
    }));
  }

  render() {
    if (this.state.count <= 0) throw new Error("Intentional error.");
    return (
      <>
        <p>Countdown: {this.state.count}</p>
        <button onClick={this.handleClick}>count down</button>
        {/* {this.state.count <= 0 && <IntentionalError />} */}
      </>
    );
  }
}

function IntentionalError() {
  // return <p>No error here :)</p>;
  throw new Error("Intentional error.");
}

ReactDOM.render(
  <ErrorBoundary>
    <ContainerToTriggerErrorLater />
  </ErrorBoundary>,
  document.getElementById("root")
);

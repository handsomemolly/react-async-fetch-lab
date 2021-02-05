import { render } from "enzyme";
import React from "react";

class App extends React.Component {
  state = {
    spaceDudes: [],
  };

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then((res) => res.json())
      .then((json) =>
        this.setState({
          spaceDudes: json.people,
        })
      );
  }

  render() {
    return <div>{this.state.spaceDudes.map((dude) => dude.name)}</div>;
  }
}

export default App;

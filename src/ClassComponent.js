import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    // this.props = props
    //can keep track of state
    this.state = {
      count: props.count,
      coffee: [], //hit sample api  once moment you start. equivalent to [] dependency list in functional
    };
  }

  componentDidMount() {
    //This is like useEffect. loading coffee from api
    console.log("component did mount");
    let url = "https://api.sampleapis.com/coffee/hot";
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          count: this.state.count,
          coffee: data,
        })
      );
  }

  //override render component
  render() {
    return (
      <>
        <h1>This is a class component {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              coffee: this.state.coffee,
            });
          }}
        >
          Add one
        </button>

        {this.state.coffee.map((coffee) => (
          <h1 key={coffee.id}>{coffee.title}</h1>
        ))}
      </>
    );
  }
}

export default ClassComponent;

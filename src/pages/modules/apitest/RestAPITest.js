import { Typography } from "@material-ui/core";
import React, { Component } from "react";

export class RestAPITest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidUpdate() {}

  componentDidMount() {
    fetch("http://localhost:8080/sample/findAllVehicles")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map((item) => (
            <Typography variant="h6">
              {item.type} {item.number}
            </Typography>
          ))}
        </ul>
      );
    }
  }
}

export default RestAPITest;

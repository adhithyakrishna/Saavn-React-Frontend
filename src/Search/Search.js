import React, { Component } from "react";
import { useParams } from "react-router-dom";

class Search extends Component {
	state ={
		type: null,
		param : null,
	}

	componentDidMount() {
		let type = this.props.match.params.type;
		let param = this.props.match.params.param;
		let newState = {...this.state}
		
		newState.type = type;
		newState.param = param;

		this.setState(newState);
	}

  render() {
    return (
      <div>
        {this.state.type}
		{this.state.param}
      </div>
    );
  }
}

export default Search;

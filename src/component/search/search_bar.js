import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ""
		}
	}
	// onInputChange(event) {
	// 	// console.log(event.target.value)
	// 	this.setState({ term: event.target.value }).bind(this)
	// 	// console.log(this.state)
	// }
	render() {
		return (
			<div className="row">
				<div className="input-field col s6 offset-s3">
					<input id="search" type="text" className="validate"
						value={this.state.term}
						onChange={event => this.setState({ term: event.target.value })} />
					{/* Value = {this.state.term} */}
				</div>
			</div>
		)
	}
}

export default SearchBar;
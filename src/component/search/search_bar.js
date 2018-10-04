import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ""
		}
	}

	render() {
		return (
			<form className="row">
				<div className="form-group col-12">
					{/* <label for="search">Search</label> */}
					<input type="text" className="form-control" id="search" placeholder="Search" aria-describedby="searchHelp"
						value = {this.state.term}
						onChange = {event => this.onInputChage(event.target.value)} />
					<small id="searchHelp" className="form-text text-muted">Enjoy React with Youtube API Search.</small>

					{/* Value = {this.state.term} */}
				</div>
			</form>
		)
	}
	
	onInputChage(term) {
		this.setState({ term });
		this.props.onSearchTermChange(term);
	}
}


export default SearchBar;
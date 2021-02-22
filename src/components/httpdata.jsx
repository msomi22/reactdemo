import React, { Component } from "react";

class HttpData extends Component {
	render() {
		console.log("props ===== ", this.props.persons);
		return (
			<div>
				<button
					className="btn btn-primary"
					onClick={() => this.props.onFetch()}
				>
					Fetch
				</button>
				{this.props.persons.length === 0 && (
					<h1>http data will appear below</h1>
				)}

				{this.props.persons.map((person) => (
					<li key={person.id}>{person.name}</li>
				))}
			</div>
		);
	}
}

export default HttpData;

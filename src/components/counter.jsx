import React, { Component } from "react";
class Counter extends Component {
	/*state = {
		value: this.props.counter.value,
		imageUrl: "https://picsum.photos/200",
		//tags: ["tag1", "tag2", "tag3"],
		tags: [],
		item: {
			id: 1,
			address: "",
		},
	};*/
	//BM5FP-101000
	//constructor() {
	//super(); //you must call super to have access to this
	//console.log(this);
	//this.handleIncrement = this.handleIncrement.bind(this);
	//}
	//<img src={this.state.imageUrl} alt=""></img>
	styles = {
		fontSize: 50,
		fontWeight: "bold",
	};

	renderTags() {
		if (this.state.tags.length === 0) return <p>There are no tags!</p>;
		return (
			<ul>
				{this.state.tags.map((tag) => (
					<li key={tag}>{tag}</li>
				))}
			</ul>
		);
	}

	//handleIncrement = (item) => {
	//console.log("Add clicked", this);
	//console.log("Item ", item);
	//this.setState({ value: this.state.value + 1 });
	//this doesn't have a reference since it is called independently by a click event
	//this.prop
	//};

	/**
	 *
	 * {this.state.tags.length === 0 && "please create a tag"}
	 * {this.renderTags()}
	 *
	 * React.Fragment
	 */

	render() {
		//console.log("props", this.props);
		return (
			<div>
				{this.props.children}
				<span style={this.styles} className={this.getBadgeClasses()}>
					{this.formatCount()}
				</span>
				<button
					onClick={() => this.props.onIncrement(this.props.counter)}
					style={{ fontSize: 50 }}
					className="btn btn-secondary btn-sm"
				>
					Add
				</button>
				<button
					onClick={() => this.props.onDelete(this.props.counter.id)}
					className="btn btn-danger btn-sm m-2"
				>
					Delete
				</button>
			</div>
		);
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? <h1>Zero</h1> : value;
	}
}
export default Counter;

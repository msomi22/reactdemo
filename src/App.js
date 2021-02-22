import React, { Component } from 'react';
import NavBar from "./components/navbar"; 
import Counters from "./components/counters";
import HttpData from "./components/httpdata";
import axios from "axios";

class App extends Component {

  constructor(props){
    super(props);
    //console.log('props', this.props); 
  }

  componentDidMount(){
    //Ajax call
    //set state using this.setState
    //console.log('App - mounted');
  }

  state = {
		counters: [
			{ id: 0, value: 4 },
			{ id: 1, value: 0 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
		],
		persons: []
	};

	handleIncrement = (counter) => {
		//console.log("counter is ", counter);
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		this.setState({ counters });
	};

	handleDelete = (counterId) => {
		const counters = this.state.counters.filter((c) => c.id !== counterId);
		this.setState({ counters });
		//console.log("Delete event handler called", counterId);
	};

	handleReset = () => {
		const counters = this.state.counters.map((c) => {
			c.value = 0;
			return c;
		});
		this.setState({ counters });
	};

	handleHttpRequest = () => {
		//console.log("fetch http data");
		axios.get('https://jsonplaceholder.typicode.com/users')
		.then(
			res =>{
				//console.log("response = ",res);
				this.setState({persons: res.data});
			}
		);
	};

  render() { 
    return ( 
      <React.Fragment>
     <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
     <main className="container">
        <Counters 
        counters={this.state.counters}
        onReset={this.handleReset} 
        onIncrement={this.handleIncrement}
        onDelete={this.handleDelete} />
		
		<HttpData onFetch={this.handleHttpRequest}
		persons ={this.state.persons}/>
     </main>
     </React.Fragment>
    );
  }
}
 
export default App;

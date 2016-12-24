// React 12: Render a Class Component to the DOM

class TypesOfFood extends React.Component {
  constructor(props) {
  	super(props);
  }
  render() {
    return (
	    <div>
		    <h1>Types of Food:</h1>
        {/* change code below this line */}
					<Fruits />
        	<Vegetables />
		    {/* change code above this line */}
	    </div>
    );
  }
};

// change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'))

/*

All tests passed!

Your JSX code should transpile successfully.
The TypesOfFood component should return a single div element.
The TypesOfFood component should render the Fruits component after the h1 element.
The TypesOfFood component should render the Vegetables component after Fruits.
The TypesOfFood component should render to the DOM within the div with the id 'challenge-node'.

*/

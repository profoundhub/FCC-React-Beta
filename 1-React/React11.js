// React 11: Compose React Components

class Fruits extends React.Component {
	constructor(props) {
	  super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
		    { /* change code below this line */ }
					<NonCitrus />
        	<Citrus />
	   	  { /* change code above this line */ }
      </div>
		);
	}
};

class TypesOfFood extends React.Component {
	constructor(props) {
	 	super(props);
	}
  render() {
  	return (
    	<div>
			  <h1>Types of Food:</h1>
		    { /* change code below this line */ }
					<Fruits />
		    { /* change code above this line */ }
		    <Vegetables />
    	</div>
  	);
	}
};

/*
All tests passed!

Your JSX code should transpile successfully.
The TypesOfFood component should return a single div element.
The TypesOfFood component should return the Fruits component.
The Fruits component should return the NonCitrus component, followed by the Citrus component.
The TypesOfFood component should return the Vegetables component below the Fruits component.
*/

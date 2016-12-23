// React 09: Create a Component with Composition

const ChildComponent = () => {
	return (
		<div>
			<p>I am the child</p>
		</div>
	);
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
	    <div>
	      <h1>I am the parent</h1>
	      { /* change code below this line */ }
					<ChildComponent/>
	      { /* change code above this line */ }
	    </div>
    );
  }
};

/*

All tests passed!

Your JSX code should transpile successfully.
The React component should return a single div element.
The component should return two nested elements.
The component should return the ChildComponent as its second child

*/
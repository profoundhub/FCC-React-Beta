// React 09: Create a Component with Composition



# Free Code Camp React Challenge Demo: 

QA status: Needs Review
Challenge: Create a Component with Composition
Intro: The last two challenges showed how to create a simple React component with two different methods. An important principle in React for using components together is called composition. You can use one or more components in the render() method of another one. In React, everything is a component and multiple components can be composed together to create more complex components. 

You use React components the same way as an HTML element in JSX. The component can be self-closing (<MyComponent />) or have opening and closing tags (<MyComponent></MyComponent>). Remember that React components are always capitalized.

Instructions: In the code editor, there is a simple functional component called ChildComponent and a React component called ParentComponent. Compose the two together by rendering the ChildComponent within the ParentComponent. Make sure to close the ChildComponent tag with a forward slash.

### Live Preview:

I am the parent

### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 2 out of 4 tests are passing
Your JSX code should transpile successfully.
The React component should return a single div element.
The component should return two nested elements.
The component should return the ChildComponent as its second child


### Code (press Cmd/Ctrl + Enter to run)

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


	      { /* change code above this line */ }
	    </div>
    );
  }
};
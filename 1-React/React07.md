# Free Code Camp React Challenge Demo: React 07: Create a Stateless Functional Component

QA status: Needs Review
Challenge: Create a Stateless Functional Component
Intro: Components are the core of React. Everything in React is a component and here you will learn how to create one. 

There are two ways to create a React component. The first way is to use a JavaScript function. Defining a component in this way creates a stateless functional component. The concept of state in an application will be covered in later challenges. For now, think of a stateless component as one that can receive data and render it, but does not manage or track changes to that data. 

To create a component with a function, you simply write a JavaScript function that returns either JSX or null. One important thing to note is that React requires your function name to begin with a capital letter. You can optionally pass in an argument called props to the function. This is an object containing data (also called properties), which can be used and returned in your JSX. 

Here's an example of a stateless functional component:

const DemoComponent = function(props) {
  // Using ES6 to destructure customClass from props
  // After being transpiled, the <div> will have a CSS class of 'wrapperClass'
  const { customClass } = props;
  return (
    <div className={customClass} />
  );
};
<DemoComponent customClass = 'wrapperClass' />

Because a JSX component represents HTML, you could put several components together to create a more complex HTML page. This is one of the key advantages of the component architecture React provides. It allows you to compose your UI from many separate, isolated components. This makes it easier to build and maintain complex user interfaces.

Instructions: The code editor has a function called MyComponent. Complete this function so it returns a single div element which contains some string of text. 

Note
The text is considered a child of the div element, so you will not be able to use a self-closing tag.

### Live Preview:



### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 2 out of 5 tests are passing
Your JSX code should transpile successfully.
MyComponent should be a function.
MyComponent should return a React element.
MyComponent should return a div element.
The div element should contain a string of text.


### Code (press Cmd/Ctrl + Enter to run)

const MyComponent = function(props) {
	// change code below this line



	// change code above this line
}
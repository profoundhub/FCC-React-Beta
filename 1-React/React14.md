// React 14: Pass a String to a Functional Component

# Free Code Camp React Challenge Demo: 

QA status: Needs Review
Challenge: Pass a String to a Stateless Functional Component
Intro: The previous challenges covered a lot about creating and composing JSX elements, functional components, and ES6 style class components in React. It's time to start looking at some of the other features and capabilities of React that make it such a powerful tool to create complex, reactive user interfaces. A good place to start is with props, which is short for properties. You use props in React to pass information from a parent component to a child.

The code editor shows a functional component called ReturnUsername that accepts an argument called props. You can access props from within the component using dot notation. For example, if you passed in a prop called birthday, you would access its value by writing props.birthday. In JSX, that value is JavaScript, so you write it as {props.birthday}.

In order to define a props name and value, React uses custom HTML attributes. The attribute name is the prop name, and the attribute value is the prop's value. For example, to pass a child component a prop called birthday, when you compose the child component within the parent, it could look like this: <Child birthday="Jul 6th, 1986" />. 

Instructions: The ReturnUsername component in the code editor is composed within the parent component, ForgotUsername. Pass the ReturnUsername component a prop of username and give it a value of your Free Code Camp username. Don't forget to wrap it in quotes. In the ReturnUsername component, use dot notation to access the username prop inside the curly braces.

### Live Preview:

Whoops! See below...

Your username is: !

### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 3 out of 5 tests are passing
Your JSX code should transpile successfully.
The ForgotUsername component should return a single div element.
The ForgotUsername component's second child should be the ReturnUsername component.
The ReturnUsername component should have a prop called username.
The ReturnUsername component's username prop should contain some text.


### Code (press Cmd/Ctrl + Enter to run)

    const ReturnUsername = (props) => {
        return (
            <div>
                { /* change code below this line */ }
                <p>Your username is: { }!</p>
                { /* change code above this line */ }
            </div>
        );
    };

    class ForgotUsername extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <div>
                    <h3>Whoops! See below...</h3>
                    { /* change code below this line */ }
                    <ReturnUsername />
                    { /* change code above this line */ }
                </div>
            );
        }
    };
// React 26: Bind 'this' with an ES6 Arrow Function

# Free Code Camp React Challenge Demo: 

QA status: Needs Review

Challenge: Bind 'this' with an ES6 Arrow Function

Intro: There is another way to bind this when writing methods in React component classes. A useful, concise way is to use an ES6 arrow function. It does not assign its own value for this, but instead adopts the value of this from the context surrounding the function when it is written. In other words, an arrow function binds this automatically from its surrounding context. 

This means you can define a class method as an arrow function and not have to explicitly bind this in the constructor. However, the arrow function is ES6 syntax, which might not work fully in the browser. You may need to transpile your code to make sure it works correctly in most browsers. It's useful to be aware of both options when writing methods on React classes.

Instructions: Initialize the state of MyComponent so there is a message key with a value of Hello!. The component renders a button that, when clicked, triggers a setMessage() method. Define this method with an ES6 arrow function. It should change the state of message to Goodbye!.

### Live Preview:



### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 1 out of 5 tests are passing
Your JSX code should transpile successfully.
MyComponent should return a div element which wraps two elements, a button and an h1 element, in that order.
The state of MyComponent should initialize with a message containing the string 'Hello!'
Clicking the button element should run the setMessage method and upate the message property in the state to say 'Goodbye!'
The setMessage method should be defined with a fat arrow function.


### Code (press Cmd/Ctrl + Enter to run)

    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            // change code below this line

            // change code above this line
        }
        // change code below this line

        // change code above this line
        render() {
        return (
            <div>
            <button onClick = {this.setMessage}>Click Me</button>
            <h1>{this.state.message}</h1>
            </div>
        );
    }
    };
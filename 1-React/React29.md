// React 29: Create a Controlled Input

# Free Code Camp React Challenge Demo: 

QA status: Needs Review

Challenge: Create a Controlled Input

Intro: Your application may have more complex interactions between state and the rendered UI. For example, form control elements for text input, such as input and textarea, maintain their own state in the DOM as the user types. With React, you can move this mutatable state into a React component's state. The user's input becomes part of the application state, so React controls the value of that input field. Typically, if you have React components with input fields the user can type into, it will be a controlled input form.

Instructions: The code editor has the skeleton of a component called ControlledInput to create a controlled input element. The component's state is already initialized with an input property that holds an empty string. This value represents the text a user types into the input field. 

First, create a method called handleInput() that has a parameter called event. When the method is called, it receives an event object that contains a string of text from the input element. You can access this string with event.target.value inside the method. Update the input property of the component's state with this new string. 

In the render method, create the input element above the p tag. Add a value attribute which is equal to the input property of the component's state. Then add an onChange() event handler set to the handleInput() method. 

When you type in the input box, that text is processed by the handleInput() method, set as the input property in the local state, and rendered as the value in the input box on the page. The component state is the single source of truth regarding the input data.

### Live Preview:

Input:

### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 2 out of 4 tests are passing
Your JSX code should transpile successfully.
ControlledInput should return a div element which contains an input and a p tag.
The state of ControlledInput should initialize with an input property set to an empty string.
Typing in the input element should update the state.


### Code (press Cmd/Ctrl + Enter to run)

    class ControlledInput extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                input: ''
            };
        }
        // change code below this line

        // change code above this line
        render() {
            return (
                <div>
                { /* change code below this line */}


                { /* change code above this line */}
                <p>Input: {this.state.input}</p>
                </div>
            );
        }
    };
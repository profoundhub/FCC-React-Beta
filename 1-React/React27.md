// React 27: Use State to Toggle an Element

# Free Code Camp React Challenge Demo: 

QA status: Needs Review

Challenge: Use State to Toggle an Element

Intro: You can use state in React applications in more complex ways than what you've seen so far. One example is to monitor the status of a value, then render the UI conditionally based on this value. There are several different ways to accomplish this, and the code editor shows one method.

Instructions: MyComponent has a visibility property which is initialized to false. The render method returns one view if the value of visibility is true, and a different view if it is false. 

Currently, there is no way of updating the visibility property in the component's state. The value should toggle back and forth between true and false. There is a click handler on the button which triggers a class method called toggleVisibility(). Define this method so the state of visibility toggles to the opposite value when the method is called. If visibility is false, the method sets it to true, and vice versa. 

Finally, click the button to see the conditional rendering of the component based on its state.

Hint
Make sure to either explicitly bind the this keyword to the method, or use a fat arrow function.

### Live Preview:

[ Click Me ]

### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 3 out of 4 tests are passing
Your JSX code should transpile successfully.
MyComponent should return a div element which contains a button.
The state of MyComponent should initialize with a visibility property set to false.
Clicking the button element should toggle the visibility property in state between true and false.

### Code (press Cmd/Ctrl + Enter to run)

    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                visibility: false
            };
        }
        // change code below this line

        // change code above this line
        render() {
            if (this.state.visibility) {
            return (
                <div>
                <button onClick = {this.toggleVisibility}>Click Me</button>
                <h1>Now you see me!</h1>
                </div>
            );
        } else {
            return (
                <div>
                <button onClick = {this.toggleVisibility}>Click Me</button>
                </div>
            );
        }
    }
    };
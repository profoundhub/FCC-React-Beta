// React 24: Set State with this.setState

# Free Code Camp React Challenge Demo: 

QA status: Needs Review
Challenge: Set State with this.setState
Intro: The previous challenges covered component state and how to initialize state in the constructor. There is also a way to change the component's state. React provides a method for updating component state called setState. 

You call this method within your component class like this: this.setState(), passing in an object with key-value pairs. The keys are your state properties and the values are the updated state data. It is important that you never modify state directly, but use this.setState() to do so.

Instructions: There is a button element in the code editor which has an onClick() handler. This handler is triggered when the button receives a click event in the browser, and runs the click method defined on MyComponent. Within the click method, update the component state using this.setState(). Set the name property in state to equal the string React Rocks!. 

Click the button and watch the rendered state update. Don't worry if you don't fully understand how the click handler code works at this point. It's covered in upcoming challenges.

### Live Preview:

[ Click Me ]

Initial State

### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 4 out of 5 tests are passing
Your JSX code should transpile successfully.
The state of MyComponent should initialize with the key value pair { name: 'Initial State' }.
MyComponent should render an h1 tag.
The rendered h1 tag should contain text rendered from the component's state.
Calling the click method on MyComponent should set the name property in state to equal 'React Rocks!'.


### Code (press Cmd/Ctrl + Enter to run)

    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                name: 'Initial State'
            };
            this.click = this.click.bind(this);
        }
        click() {
            // change code below this line

        // change code above this line
        }
        render() {
        return (
            <div>
            <button onClick = {this.click}>Click Me</button>
            <h1>{this.state.name}</h1>
            </div>
        );
    }
    };
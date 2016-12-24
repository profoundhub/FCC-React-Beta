// React 30: Create a Controlled Form

# Free Code Camp React Challenge Demo: 

QA status: Needs Review

Challenge: Create a Controlled Form

Intro: The last challenge showed that React can control the internal state for certain elements like input and textarea, which makes them controlled components. This applies to other form elements as well.

Instructions: The MyForm component is set up to handle changes on an input element. Add the input element in the return of the MyForm component, setting its value and onChange() attributes like the last challenge. Then, create a button with the text "Submit" to submit the input value. (The form won't submit anywhere, this is a simulation). The button should have an onClick() handler which triggers a method called handleSubmit(). This method should take the value that's currently in the input and set it to the submit property in local state. 

Finally, create an h1 tag below the button which renders the submit value from the component's state. You can type in the form and click the button, and you should see your input rendered to the page.

### Live Preview:



### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 2 out of 5 tests are passing
Your JSX code should transpile successfully.
MyForm should return a div element which contains an input, a button, and an h1 tag.
The state of MyForm should initialize with input and submit properties, both set to empty strings.
Typing in the input element should update the input property in the state.
Clicking the button should run handleSubmit which should set the submit property in state equal to the current input.


### Code (press Cmd/Ctrl + Enter to run)

    class MyForm extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                input: '',
                submit: ''
            };
        }
        handleChange = (event) => {
            this.setState({
                input: event.target.value
            });
        }
        // change code below this line

        // change code above this line
        render() {
            return (
                <div>
                { /* change code below this line */ }

                { /* change code above this line */ }
                </div>
            );
    }
    };
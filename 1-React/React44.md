// React 44: Use a Ternary Expression to Render Conditionally

# Free Code Camp React Challenge Demo: 

QA status: Needs Review

Challenge: Use a Ternary Expression to Render Conditionally

Intro: Before moving on to dynamic rendering techniques, lets cover one last way in which we can use built in JavaScript conditionals in order to render what we want, when we want it: the ternary operator. The ternary operator is often utilized as a shortcut for if/else statements in JavaScript, and, while not quite as robust as traditional if/else statements, they are very popular among React developers. One of the reasons for this is because, due to the way it is compiled, if/else statements cannot be inserted directly into JSX code. You might have noticed this a couple of challenges back — any time we used if/else, it was always outside the context of the return statement. That said, ternary expressions can be an excellent alternative if you want to implement conditional logic within your JSX. 

Instructions: Take a look at the code below to make sure you understand what's going on so far. You'll see that we have defined three constants within the CheckUserAge component's render() method called buttonOne, buttonTwo, and buttonThree. Each of these is assigned a simple JSX expression representing a button element. Before we get started in setting up our ternary expression though, let's get the component rendering some information to the page. Go ahead and initialize CheckUserAge's state with input and userAge both set to values of an empty string.

Great! Now that our component is rendering some information to the page, let's give our users a way to interact with it a bit more. Within our component's return, in the space indicated, set up a ternary expression that implements the following logic: when the page first loads render the submit button, buttonOne, to the page. Then, once a user enters their age and clicks the button, a different button should be rendered. If a user enters a number less than 18, render buttonThree. If a user enters a number greater than or equal to 18, render buttonTwo.

### Live Preview:

    EMPTY

### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 2 out of 10 tests are passing
Your JSX code was transpiled successfully.
The CheckUserAge component exists and is rendered to the page.
The CheckUserAge component returns a single <input> element.
The CheckUserAge component returns a single <button> element.
The CheckUserAge component's state is initialized with a property of userAge and a property of input, both set to a value of an empty string.
When the CheckUserAge component is first rendered to the DOM, the button's inner text should read "Submit".
When a number of less than 18 is entered into the <input> element and the button is clicked, the button's inner text should read "You Shall Not Pass".
When a number greater than or equal to 18 is entered into the <input> element and the button is clicked, the button's inner text should read "You May Enter".
Once a number has been submited, and the value of the input is once again changed, the button should return to reading "Submit".
Code does not contain any if/else statements.


### Code (press Cmd/Ctrl + Enter to run)

    const inputStyle = {
        width: 235,
        margin: 5
    }

    class CheckUserAge extends React.Component {
        constructor(props) {
            super(props);
            // change code below this line 

            // change code above this line
            this.submit = this.submit.bind(this);
            this.handleChange = this.handleChange.bind(this);
        }
        handleChange(e) {
            this.setState({
                input: e.target.value,
                userAge: ''
            });
        }
        submit() {
            this.setState({
                userAge: this.state.input
            });
        }
        render() {
            const buttonOne = <button onClick={this.submit}>Submit</button>;
            const buttonTwo = <button>You May Enter</button>;
            const buttonThree = <button>You Shall Not Pass</button>;
            return (
                <div>
                    <h3>Enter Your Age to Continue</h3>
                    <input 
                        style={inputStyle}
                        type="number"
                        value={this.state.input}
                        onChange={this.handleChange} /><br />
                    {
                        /* change code here */
                    }
                </div>
            );
        }
    };
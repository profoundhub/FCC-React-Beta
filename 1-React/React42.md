// React 42: Use && for a More Concise Conditional

# Free Code Camp React Challenge Demo: 

QA status: Needs Review
Challenge: Use && for a More Concise Conditional
Intro: Nice job! Now we will demonstrate a more concise way to achieve the same result. Imagine that we are tracking several conditions in our component and we want to respond differently to each of these conditions. We don't want to keep writing else if conditions to just return slightly tweaked UIs. Instead, we can use the && logical operator to perform conditional logic in a more concise way. This is possible because we want to check if a condition is true, and if it is return some markup. So if we write:

{condition && <p>markup</p>}

If the condition is true the markup will be returned, otherwise if it is false the operation will immediately return false after evaluating the condition and return nothing. We can include these statments directly in our JSX and even string multiple conditions together by continuing to write && after each check we make. This allows us to handle more complex conditional logic in our render() method.

Instructions: Solve the previous example again, this time using the && logical operator.


### Live Preview:

[ Toggle Display ]

Displayed!

### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 3 out of 5 tests are passing
Your JSX code was transpiled successfully.
MyComponent exists and is rendered.
When display is set to true, a div, button, and h1 are rendered.
When display is set to false, only a div and button are rendered.
The render method uses the && logical operator to check the condition of this.state.display.


### Code (press Cmd/Ctrl + Enter to run)

    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                display: true
            }
        }
        toggleDisplay = () => {
            this.setState({
                display: !this.state.display
            });
        }
    render() {
        // change code below this line
        return (
            <div>
                <button onClick={this.toggleDisplay}>Toggle Display</button>
                <h1>Displayed!</h1>
            </div>
        );
    }
    };
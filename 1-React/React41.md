// React 41: Render with an If/Else Condition


# Free Code Camp React Challenge Demo: 

QA status: Needs Review
Challenge: Render with an If/Else Condition
Intro: Another application of using JavaScript to control our rendered view is to create a simple condition and only render some elements when this condition is true. Here we will do this with a standard if/else statement in the render() method of a React component.

Instructions: We've created a component that contains a boolean in its state which represents a condition which tracks if we want to display some element in the UI or not. We've wired up a <button/> to toggle the state of this value. Currently, we render the same UI every time. Rewrite the render() method with an if/else statement so that if display is true we return the current markup. Otherwise, let's just return the <button/> without the <h1/> element.

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
The render method uses an if/else statement to check the condition of this.state.display.


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
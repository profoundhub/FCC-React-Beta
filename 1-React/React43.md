// React 43: Return null to Prevent Rendering

# Free Code Camp React Challenge Demo: 

QA status: Needs Review

Challenge: Return null to Prevent Rendering

Intro: There are some situations where we may not want to render a child element. In React you can avoid rendering a component by simply returning null in its render() method. This is useful in situations where you want to avoid rendering components based on conditional logic.

Instructions: We've provided the example we've been working with again here. This time, we will render our h1 element in the Child component rather than in one top-level component. We will pass our display condition as props to this child component. We can check the condition of display in the child component and if it is false we can return null. Try it out! Now we've accomplished the same behavior in three different ways. This should begin to show you the versatility of using JavaScript to write our UIs. React provides us a lot of control over what and how we render our views.

### Live Preview:

    EMPTY

### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 0 out of 6 tests are passing
Your JSX code was transpiled successfully.
The Parent component exists and is rendered.
The Child component exists and is rendered.
When display is set to true, a div, button, and h1 are rendered.
When display is set to false, only a div and button are rendered.
The Child component returns null when passed a falsy value for the display prop, otherwise it returns an h1 element.


### Code (press Cmd/Ctrl + Enter to run)

    class Parent extends React.Component {
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
        return (
            <div>
                <button onClick={this.toggleDisplay}>Toggle Display</button>
                <Child display={this.state.display}/>
            </div>
        );
    }
    };

    class Child extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            // change code below this line
    }
// React 17: Override Default Props

# Free Code Camp React Challenge Demo: 

QA status: Needs Review
Challenge: Override Default Props
Intro: The ability to set default props is a useful feature in React. The way to override the default props is to explicitly set the prop values for a component.

Instructions: The ShoppingCart component now renders a child component Items. This Items component has a default prop quantity set to the integer 0. Override the default prop by passing in a value of 10 for quantity.

Note: 
Remember that the syntax to add a prop to a component looks similar to how you add HTML attributes. However, since the value for quantity is an integer, it won't go in quotes but it should be wrapped in curly braces. For example, {100}. This syntax tells JSX to interpret the value within the braces directly as JavaScript.

### Live Preview:

Current Quantity of Items in Cart: 0

### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 3 out of 4 tests are passing
Your JSX code should transpile successfully.
The component ShoppingCart should render.
The component Items should render.
The Items component should have a prop of { quantity: 10 } passed from the ShoppingCart component.


### Code (press Cmd/Ctrl + Enter to run)

    const Items = (props) => {
        return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
    }

    Items.defaultProps = {
        quantity: 0
    }

    class ShoppingCart extends React.Component {
        constructor(props) {
            super(props);
        }
    render() {
        { /* change code below this line */ }
        return <Items />
        { /* change code above this line */ }
    }
    };
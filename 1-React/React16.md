// React 16: Use Default Props

# Free Code Camp React Challenge Demo: 

QA status: Needs Review

Challenge: Use Default Props

Intro: React also has an option to set default props. You can assign default props to a component as a property on the component itself and React assigns the default prop if necessary. This allows you to specify what a prop value should be if no value is explicitly provided. For example, if you declare MyComponent.defaultProps = { location: 'San Francisco' }, you have defined a location prop that's set to the string San Francisco, unless you specify otherwise. React assigns default props if props are undefined, but if you pass null as the value for a prop, it will remain null.

Instructions: The code editor shows a ShoppingCart component. Define default props on this component which specify a prop items with a value of 0.

### Live Preview:

Shopping Cart Component

### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 2 out of 3 tests are passing
Your JSX code should transpile successfully.
The ShoppingCart component should render.
The ShoppingCart component should have a default prop of { items: 0 }

### Code (press Cmd/Ctrl + Enter to run)

    const ShoppingCart = (props) => {
    return (
            <div>
                <h1>Shopping Cart Component</h1>
            </div>
    )
    };
    // change code below this line
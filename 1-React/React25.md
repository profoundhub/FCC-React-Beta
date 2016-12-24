// React 25: Bind 'this' to a Class Method

# Free Code Camp React Challenge Demo: 

QA status: Needs Review

Challenge: Bind 'this' to a Class Method

Intro: In addition to setting and updating state, you can also define methods on your component class. A class method typically needs to use the this keyword so it can access properties on the class (such as state and props) inside the scope of the method. There are a few ways to allow your class methods to access this. 

One common way is to explicitly bind this in the constructor so this becomes bound to the class methods when the component is initialized. You may have noticed the last challenge used this.click = this.click.bind(this) for its click method in the constructor. Then, when you call a function like this.setState() within your class method, this refers to the class and will not be undefined.

Instructions: The code editor has a component with a state that keeps track of an item count. It also has a method which allows you to increment this item count. However, the method doesn't work because it's using the this keyword that is undefined. Fix it by explicitly binding this to the addItem() method in the component's constructor. 

Next, add a click handler to the button element in the render method. It should trigger the addItem() method when the button receives a click event. Remember that the method you pass to the onClick() handler needs curly braces because it should be interpreted directly as JavaScript. 

Once you complete the above steps you should be able to click the button and see the item count increment in the HTML.

### Live Preview:

[ Click Me ]

Current Item Count: 0

### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 3 out of 4 tests are passing
Your JSX code should transpile successfully.
MyComponent should return a div element which wraps two elements, a button and an h1 element, in that order.
The state of MyComponent should initialize with the key value pair { itemCount: 0}.
Clicking the button element should run the addItem method and increment the state itemCount by 1.


### Code (press Cmd/Ctrl + Enter to run)

    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                itemCount: 0
            };
            // change code below this line

            // change code above this line
        }
        addItem() {
            this.setState({
                itemCount: this.state.itemCount + 1
            });
        }
        render() {
        return (
            <div>
                { /* change code below this line */ }
            <button>Click Me</button>
            { /* change code above this line */ }
            <h1>Current Item Count: {this.state.itemCount}</h1>
            </div>
        );
    }
    };
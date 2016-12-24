// React 28: Write a Simple Counter

# Free Code Camp React Challenge Demo: 

QA status: Needs Review

Challenge: Write a Simple Counter

Intro: You can design a more complex stateful component by combining the concepts covered so far. These include initializing state, writing methods that set state, and assigning click handlers to trigger these methods.

Instructions: The Counter component keeps track of a count value in state. There are two buttons which call methods increment() and decrement(). Write these methods so the counter value is incremented or decremented by 1 when the appropriate button is clicked. Also, create a reset() method so when the reset button is clicked, the count is set to 0. 

Note: Make sure you don't modify the classNames of the buttons.

### Live Preview:

[ Increment! ] [ Decrement! ] [ Reset ]
Current Count: 0

### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 3 out of 6 tests are passing
Your JSX code should transpile successfully.
MyComponent should return a div element which contains three buttons with text content in this order 'Increment!', 'Decrement!', 'Reset'.
The state of MyComponent should initialize with a count property set to 0.
Clicking the increment button should increment the count by 1.
Clicking the decrement button should decrement the count by 1.
Clicking the reset button should reset the count to 0.


### Code (press Cmd/Ctrl + Enter to run)

    class Counter extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            };
        }
        // change code below this line


        // change code above this line
        render() {
        return (
            <div>
            <button className='inc' onClick={this.increment}>Increment!</button>
            <button className='dec' onClick={this.decrement}>Decrement!</button>
            <button className='reset' onClick={this.reset}>Reset</button>
            <h1>Current Count: {this.state.count}</h1>
            </div>
        );
    }
    };
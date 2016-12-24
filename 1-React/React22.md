// React 22: Render State in the UI

# Free Code Camp React Challenge Demo: 

QA status: Needs Review

Challenge: Render State in the User Interface

Intro: Once you define a component's initial state, you can display any part of it in the UI that is rendered. If a component is stateful, it will always have access to the data in state in its render() method. You can access the data with this.state. 

If you want to access a state value within the return of the render method, you have to enclose the value in curly braces. 

State is one of the most powerful features of components in React. It allows you to track important data in your app and render a UI in response to changes in this data. If your data changes, your UI will change. React uses what is called a virtual DOM, to keep track of changes behind the scenes. When state data updates, it triggers a re-render of the components using that data - including child components that received the data as a prop. React updates the actual DOM, but only where necessary. This means you don't have to worry about changing the DOM. You simply declare what the UI should look like. 

Note that if you make a component stateful, no other components are aware of its state. Its state is completely encapsulated, or local to that component, unless you pass state data to a child component as props. This notion of encapsulated state is very important because it allows you to write certain logic, then have that logic contained and isolated in one place in your code.

Instructions: In the code editor, MyComponent is already stateful. Define an h1 tag in the component's render method which renders the value of name from the component's state. 

Note
The h1 should only render the value from state and nothing else. In JSX, any code you write with curly braces { } will be treated as JavaScript. So to access the value from state just enclose the reference in curly braces.

### Live Preview:



### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 2 out of 4 tests are passing
Your JSX code should transpile successfully.
MyComponent should have a key 'name' with value 'Free Code Camp' stored in its state.
MyComponent should render an h1 tag.
The rendered h1 tag should contain text rendered from the component's state.


### Code (press Cmd/Ctrl + Enter to run)

    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                name: 'Free Code Camp'
            }
        }
        render() {
            return (
                <div>
                    { /* change code below this line */ }

                    { /* change code above this line */ }
                </div>
            );
        }
    };
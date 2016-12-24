// React 23: Render State in the UI Another Way

# Free Code Camp React Challenge Demo: 
QA status: Needs Review

Challenge: Render State in the User Interface Another Way

Intro: There is another way to access state in a component. In the render() method, before the return statement, you can write JavaScript directly. For example, you could declare functions, access data from state or props, perform computations on this data, and so on. Then, you can assign any data to variables, which you have access to in the return statement.

Instructions: In the MyComponent render method, define a const called name and set it equal to the name value in the component's state. Because you can write JavaScript directly in this part of the code, you don't have to enclose this reference in curly braces. Next, in the return statement, render this value in an h1 tag using the variable name. Remember, you need to use the JSX syntax (curly braces for JavaScript) in the return statement.

### Live Preview:



### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 2 out of 5 tests are passing
Your JSX code should transpile successfully.
MyComponent should have a key 'name' with value 'Free Code Camp' stored in its state.
MyComponent should render an h1 tag.
The rendered h1 tag should include a reference to {name}.
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
            // change code below this line

        // change code above this line
        return (
            <div>
                { /* change code below this line */ }

                { /* change code above this line */ }
            </div>
        );
    }
    };
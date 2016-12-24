// React 36: Manage Updates with Lifecycle Methods

# Free Code Camp React Challenge Demo: 

QA status: Needs Review
Challenge: Manage Updates with Lifecycle Methods
Intro: Another lifecycle method is componentWillReceiveProps() which is called whenever a component is receiving new props. This method receives the new props as a nextProps argument which you can use and compare with this.props. You can perform actions before the component updates. For example, you may call setState() locally before the update is processed. 

Another method is componentDidUpdate(), and is called immediately after a component re-renders. Note that rendering and mounting are considered different things in the component lifecycle. When a page first loads, all components are mounted and this is where methods like componentWillMount() and componentDidMount() are called. After this, as state changes, components re-render themselves. The next challenge covers this in more detail.

Instructions: The child component Dialog receives message props from its parent, the Controller component. Write the componentWillReceiveProps() method in the Dialog component and have it log this.props and nextProps to the console. You'll need to pass nextProps as an argument to this method. 

Next, add componentDidUpdate() in the Dialog component, and log a statement that says the component has updated. This method works similar to componentWillUpdate(), which is provided for you. Now click the button to change the message and watch your browser console. The order of the console statements show the order the methods are called.

### Live Preview:

[ Update ]

first

### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 3 out of 6 tests are passing
Your JSX code should transpile successfully.
The Controller component should render the Dialog component as a child.
The h1 rendered by the Dialog component should update when the parent state changes.
The componentWillReceiveProps method in the Dialog component should log this.props to the console.
The componentWillReceiveProps method in the Dialog component should log nextProps to the console.
The Dialog component should call the componentDidUpdate method and log a message to the console.


### Code (press Cmd/Ctrl + Enter to run)

    class Dialog extends React.Component {
        constructor(props) {
            super(props);
        }
        componentWillUpdate() {
            console.log('Component is about to update...');
        }
        // change code below this line

        // change code above this line
    render() {
        return <h1>{this.props.message}</h1>
    }
    };

    class Controller extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                message: 'first'
            };
        }
        changeMessage = () => {
            this.setState({
                message: 'second'
            });
        }
    render() {
        return (
                <div>
                    <button onClick={this.changeMessage}>Update</button>
                    <Dialog message={this.state.message}/>
                </div>
        );
    }
    };
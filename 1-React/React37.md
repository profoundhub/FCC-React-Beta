// React 37: Optimize Re-Renders with shouldComponentUpdate

# Free Code Camp React Challenge Demo: 

QA status: Needs Review

Challenge: Optimize Re-Renders with shouldComponentUpdate

Intro: So far, if any component receives new state or new props, it re-renders itself and all its children. This is usually okay. But React provides a lifecycle method you can call when child components receive new state or props, and declare specifically if the components should update or not. The method is shouldComponentUpdate(), and it takes nextProps and nextState as parameters.

This method is a useful way to optimize performance. For example, the default behavior is that your component re-renders when it receives new props, even if the props haven't changed. You can use shouldComponentUpdate() to prevent this by comparing the props. The method must return a boolean value that tells React whether or not to update the component. If you wrote return nextProps !== this.props the component would only update when it receives new props that are not equal to the current props.

Instructions: The shouldComponentUpdate() method is added in a component called OnlyEvens. Currently, this method returns true so OnlyEvens re-renders every time it receives new props. Modify the method so OnlyEvens updates only if the value of its new props is even. Click the Add button and watch the order of events in your browser's console as the other lifecycle hooks are triggered.

### Live Preview:

[ Add ]

0

### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 4 out of 5 tests are passing
Your JSX code should transpile successfully.
The Controller component should render the OnlyEvens component as a child
The shouldComponentUpdate method should be defined on the OnlyEvens component.
The OnlyEvens component should return an h1 tag which renders the value of this.props.value.
OnlyEvens should re-render only when nextProps.value is even.


### Code (press Cmd/Ctrl + Enter to run)

    class OnlyEvens extends React.Component {
        constructor(props) {
            super(props);
        }
        shouldComponentUpdate(nextProps, nextState) {
        console.log('Should I update?');
        // change code below this line
            return true;
        // change code above this line
        }
        componentWillReceiveProps(nextProps) {
            console.log('Receiving new props...');
        }
        componentDidUpdate() {
            console.log('Component re-rendered.');
        }
    render() {
        return <h1>{this.props.value}</h1>
    }
    };

    class Controller extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: 0
            };
        }
        addValue = () => {
            this.setState({
                value: this.state.value + 1
            });
        }
    render() {
        return (
                <div>
                    <button onClick={this.addValue}>Add</button>
                    <OnlyEvens value={this.state.value}/>
                </div>
        );
    }
    };
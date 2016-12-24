// React 34: Use the Lifecycle Method componentDidMount

# Free Code Camp React Challenge Demo: 

QA status: Needs Review

Challenge: Use the Lifecycle Method componentDidMount

Intro: Most web developers, at some point, need to call an API endpoint to retrieve data. If you're working with React, it's important to know where to perform this action. 

The best practice with React is to place API calls or any calls to your server in the lifecycle method componentDidMount(). This method is called after a component is mounted to the DOM. Any calls to setState() here will trigger a re-rendering of your component. When you call an API in this method, and set your state with the data that the API returns, it will automatically trigger an update once you receive the data.

Instructions: There is a mock API call in componentDidMount(). It sets state after 2.5 seconds to simulate calling a server to retrieve data. This example requests the current total active users for a site. In the render method, render the value of activeUsers in the h1. Watch what happens in the preview, and feel free to change the timeout to see the different effects.

### Live Preview:

Active Users:

### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 3 out of 4 tests are passing
Your JSX code should transpile successfully.
MyComponent should render a div element which wraps an h1 tag.
Component state should be updated with a timeout function in componentDidMount.
The h1 tag should render the activeUsers value from state and update after the timeout function completes.


### Code (press Cmd/Ctrl + Enter to run)

    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                activeUsers: null
            };
        }
        componentDidMount() {
            setTimeout( () => {
                this.setState({
                    activeUsers: 1273
                });
            }, 2500);
        }
    render() {
        return (
                <div>
                    <h1>Active Users: { /* change code here */ }</h1>
                </div>
        );
    }
    };
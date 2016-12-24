// React 35: Add Event Listeners

# Free Code Camp React Challenge Demo: 

QA status: Needs Review

Challenge: Add Event Listeners

Intro: The componentDidMount() method is also the best place to attach any event listeners you need to add for specific functionality. React provides a synthetic event system which wraps the native event system present in browsers. This means that the synthetic event system behaves exactly the same regardless of the user's browser - even if the native events may behave differently between different browsers.

You've already been using some of these synthetic event handlers such as onClick(). React's synthetic event system is great to use for most interactions you'll manage on DOM elements. However, if you want to attach an event handler to the document or window objects, you have to do this directly.

Instructions: Attach an event listener in the componentDidMount() method for keydown events and have these events trigger the callback handleKeyPress(). You can use document.addEventListener() which takes the event (in quotes) as the first argument and the callback as the second argument. 

Then, in componentWillUnmount(), remove this same event listener. You can pass the same arguments to document.removeEventListener(). It's good practice to use this lifecycle method to do any clean up on React components before they are unmounted and destroyed. Removing event listeners is an example of one such clean up action.


### Live Preview:



### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 2 out of 5 tests are passing
Your JSX code should transpile successfully.
MyComponent should render a div element which wraps an h1 tag.
A keydown listener should be attached to the document in componentDidMount.
The keydown listener should be removed from the document in componentWillUnmount.
Once the component has mounted, pressing enter should update its state and the rendered h1 tag.


### Code (press Cmd/Ctrl + Enter to run)

    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                message: null
            };
        }
        // change code below this line
        componentDidMount() {

        }
        componentWillUnmount() {

        }
        // change code above this line
        handleEnter = () => {
            this.setState({
                message: 'You pressed the enter key!'
            });
        }
        handleKeyPress = (event) => {
        if (event.keyCode === 13) {
            this.handleEnter();
        }
    }
    render() {
        return (
                <div>
                    <h1>{this.state.message}</h1>
                </div>
        );
    }
    };
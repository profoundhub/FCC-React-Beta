// React 12: Render a Class Component to the DOM

# Free Code Camp React Challenge Demo: 

QA status: Needs Review

Challenge: Render a Class Component to the DOM

Intro: You may remember from a previous challenge that you are writing React code with the React API, but you need a separate API to render that code to the DOM — the ReactDOM API.

The past few challenges focused on components and composition, so the rendering was done for you behind the scenes. However, none of the React code you write will render to the DOM without making a call to the ReactDOM API.

Here's an example of the syntax: ReactDOM.render(componentToRender, targetNode). The first argument is the React component that you want to render. The second argument is the DOM node that you want to render that component within.

React components are passed into ReactDOM.render() differently than JSX elements. For JSX elements, you pass in the name of the element that you want to render. However, for React components, you need to use the same syntax as if you were rendering a nested component, for example ReactDOM.render(<ComponentToRender />, targetNode). You use this syntax for both ES6 class components and functional components.

Instructions: Both the Fruits and Vegetables components are defined for you behind the scenes. Render both components as children of the TypesOfFood component, then render TypesOfFood to the DOM. There is a div with id='challenge-node' available for you to use.


### Live Preview:

Types of Food:

### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 2 out of 5 tests are passing
Your JSX code should transpile successfully.
The TypesOfFood component should return a single div element.
The TypesOfFood component should render the Fruits component after the h1 element.
The TypesOfFood component should render the Vegetables component after Fruits.
The TypesOfFood component should render to the DOM within the div with the id 'challenge-node'.


### Code (press Cmd/Ctrl + Enter to run)

    class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
            {/* change code below this line */}

                {/* change code above this line */}
            </div>
        );
    }
    };

    // change code below this line
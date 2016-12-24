React 04: Render HTML Elements to the DOM

Free Code Camp React Challenge Demo:

QA status: Needs Review

Challenge: Render HTML Elements to the DOM

Intro: So far, you've learned that JSX is a convenient tool to write readable HTML in a JavaScript file. React allows you to render your JSX as HTML to the DOM. To do this, you use React's rendering API known as ReactDOM.

ReactDOM offers a simple method to render React elements to the DOM which looks like this: ReactDOM.render(componentToRender, targetNode). The first argument is the React element or component that you want to render. The second argument is the DOM node that you want to render the component within. As you would expect, ReactDOM.render() must be called after the part in your code where you declared the element you want to render.Instructions: The code editor has a simple JSX component. Use the ReactDOM.render() method to render this component to the page. You can pass defined JSX elements directly in as the first argument and select the target DOM node with the getElementById() method on the document object. There is a div with id='challenge-node' available for you to use. Make sure you don't change the JSX constant.

# Live Preview:

Hello World

Lets render this to the DOM

### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 0 out of 5 tests are passing
- Your JSX code should transpile successfully.
- The constant JSX should return a div element.
- The div should contain an h1 tag as the first element.
- The div should contain a p tag as the second element.
- The provided JSX element should render to the DOM node with id 'challenge-node'.
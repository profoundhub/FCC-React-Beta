// React 48: Render React on the Server with renderToString

# Free Code Camp React Challenge Demo: 

QA status: Needs Review

Challenge: Render React on the Server with renderToString

Intro: So far we have been rendering React components on the client. Normally, this is what you will always be doing. However, there are some use cases were it makes sense to render a React component on the server. Since React is just a JavaScript view library and we can run JavaScript on the server with Node, this shouldn't be too hard to do. In fact, React provides us with a renderToString() method we can use just for this purpose which we will apply here.

There are two key reasons why rendering on the server may be used in a real world app. The first is that without doing this our React apps would consist of a relatively empty HTML file and a large bundle of JavaScript when initially loaded to the browser. This may not be ideal for search engines that are trying to index the content of our pages so people can find us. So if we render our initial HTML markup on the server and send this to the client, the initial page load will contain all of our page's markup which can be crawled by search engines. Additionally, this creates a faster initial page load experience because our rendered HTML will be smaller than the JavaScript code of our entire app. React will still be able to recognize our app and will be able to takeover its management after this initial load.

Instructions: Use the renderToString() method which is provided on the ReactDOM global object to render <App/> to a string.

### Live Preview:



### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 0 out of 1 tests are passing

The App component is rendered to a string using ReactDOM.renderToString

### Code (press Cmd/Ctrl + Enter to run)

class App extends React.Component {
	constructor(props) {
		super(props);
	}
  render() {
    return <div/>
  }
};

// change code below this line
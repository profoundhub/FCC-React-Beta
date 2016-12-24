// React 13: Write a React Component from Scratch

// change code below this line
    class MyComponent extends React.Component {
    render() {
        return(
                <div>
            <h1>My First React Component!</h1>
        </div>
        );
    }
    };

    ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'))

/*

All tests passed!

Your JSX code should transpile successfully.
There should be a React component called MyComponent
MyComponent should contain an h1 tag with text 'My First React Component!' Case and punctuation matter.
MyComponent should render to the DOM.

*/
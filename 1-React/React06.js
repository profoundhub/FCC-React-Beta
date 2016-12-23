// React 06: Learn About Self-Closing JSX Tags

const JSX = (
    <div>
        {/* change code below this line */}
        <h2>Welcome to React!</h2> <br />
        <p>Be sure to close all tags!</p>
        <hr />
        {/* change code above this line */}
    </div>
);

ReactDOM.render(JSX, document.getElementById('challenge-node'));

const JSX = (
    <div>
        {/* change code below this line */}
        <h2>Welcome to React!</h2> <br />
        <p>Be sure to close all tags!</p>
        <hr />
        {/* change code above this line */}
    </div>
);

ReactDOM.render(JSX, document.getElementById('challenge-node'));

/*
All tests passed!

Your JSX code should transpile successfully.
The constant JSX should return a div element.
The div should contain a br tag.
The div should contain an hr tag.
The provided JSX element should render to the DOM node with id 'challenge-node'.
*/

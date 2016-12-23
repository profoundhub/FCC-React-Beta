// React 04: Render HTML Elements to the DOM

const JSX = (
<div>
	<h1>Hello World</h1>
	<p>Lets render this to the DOM</p>
</div>
);
// change code below this line
ReactDOM.render(JSX, document.getElementById('challenge-node'));

/*
All tests passed!

Your JSX code should transpile successfully.
The constant JSX should return a div element.
The div should contain an h1 tag as the first element.
The div should contain a p tag as the second element.
The provided JSX element should render to the DOM node with id 'challenge-node'.
*/
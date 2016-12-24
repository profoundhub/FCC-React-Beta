// React 14: Pass a String to a Functional Component

const ReturnUsername = (props) => {
	return (
		<div>
			{ /* change code below this line */ }
			<p>Your username is: { props.username }!</p>
			{ /* change code above this line */ }
		</div>
	);
};

class ForgotUsername extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h3>Whoops! See below...</h3>
				{ /* change code below this line */ }
				<ReturnUsername username="Daniel" />
				{ /* change code above this line */ }
			</div>
		);
	}
};

/*

All tests passed!

Your JSX code should transpile successfully.
The ForgotUsername component should return a single div element.
The ForgotUsername component's second child should be the ReturnUsername component.
The ReturnUsername component should have a prop called username.
The ReturnUsername component's username prop should contain some text.

*/
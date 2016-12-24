// React 18: Use PropTypes to Define the Props You Expect

const Items = (props) => {
	return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

{ /* change code below this line */ }
	Items.propTypes = { quantity : React.PropTypes.number.isRequired }
{ /* change code above this line */ }

Items.defaultProps = {
	quantity: 0
};

class ShoppingCart extends React.Component {
	constructor(props) {
		super(props);
	}
  render() {
    return <Items />
  }
};

/*

All tests passed!

Your JSX code should transpile successfully.
The ShoppingCart component should render.
The Items component should render.
The Items component should include a propTypes check that requires quantity to be a number.

*/
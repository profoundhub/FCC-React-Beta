// React 16: Use Default Props

const ShoppingCart = (props) => {
  return (
		<div>
			<h1>Shopping Cart Component</h1>
		</div>
  )
};

// change code below this line
ShoppingCart.defaultProps = { items: 0 }

/*

All tests passed!


Your JSX code should transpile successfully.
The ShoppingCart component should render.
The ShoppingCart component should have a default prop of { items: 0 }

*/
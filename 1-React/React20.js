// React 20: Using Props with Stateless Functional Components

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper />
      </div>
    );
  }
};
// change code below this line

const Camper = (props) => {
  return (
		<div>
			<p>{ props.name }</p>
    </div>
	);
};


Camper.propTypes = {
	name: React.PropTypes.string.isRequired
};

Camper.defaultProps = { name: 'CamperBot' };

/*

All tests passed!

Your JSX code should transpile successfully.
The CampSite component should render.
The Camper component should render.
The Camper component should include default props which assign the string 'CamperBot' to the key name.
The Camper component should include prop types which require the name prop to be of type string.
The Camper component should contain a p element with only the text from the name prop.

*/
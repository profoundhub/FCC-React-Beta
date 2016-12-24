// React 19: Access Props Using this.props


class ReturnTempPassword extends React.Component {
  constructor(props) {
  	super(props);
  }
  render() {
    return (
        <div>
        		{ /* change code below this line */ }
            	<p>Your temporary password is: <strong>{ this.props.tempPassword }</strong></p>
            { /* change code above this line */ }
        </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
  	super(props);

  }
  render() {
    return (
        <div>
        	<h2>Reset Password</h2>
        	<h3>We've generated a new temporary password for you.</h3>
        	<h3>Please reset this password from your account settings ASAP.</h3>
        	{ /* change code below this line */ }
						<ReturnTempPassword tempPassword = "abcdjklm2468" />
        	{ /* change code above this line */ }
        </div>
    );
  }
};

/*

All tests passed!

Your JSX code should transpile successfully.
The ResetPassword component should return a single div element.
The ResetPassword component's fourth child should be the ReturnTempPassword component.
The ReturnTempPassword component should have a prop called tempPassword.
The ReturnTempPassword component's tempPassword prop should be equal to a string of at least 8 characters.

*/
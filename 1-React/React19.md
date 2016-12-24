// React 19: Access Props Using this.props

# Free Code Camp React Challenge Demo: 

QA status: Needs Review
Challenge: Access Props Using this.props
Intro: The last several challenges covered the basic ways to pass props to child components. But what if the child component that you're passing a prop to is an ES6 class component, rather than a stateless functional component? The ES6 class component uses a slightly different convention to access props.

Anytime you refer to a class component within itself, you use the this keyword. To access props within a class component, you preface the code that you use to access it with this. For example, if an ES6 class component has a prop called data, you write {this.props.data} in JSX.

Instructions: Render an instance of the ReturnTempPassword component in the parent component ResetPassword. Give this component a prop of tempPassword and assign it a value of a string that is at least 8 characters long. Within the child, ReturnTempPassword, access the tempPassword prop within the strong tags to make sure the user sees the temporary password.

### Live Preview:

Reset Password

We've generated a new temporary password for you.

Please reset this password from your account settings ASAP.

### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 2 out of 5 tests are passing
Your JSX code should transpile successfully.
The ResetPassword component should return a single div element.
The ResetPassword component's fourth child should be the ReturnTempPassword component.
The ReturnTempPassword component should have a prop called tempPassword.
The ReturnTempPassword component's tempPassword prop should be equal to a string of at least 8 characters.


### Code (press Cmd/Ctrl + Enter to run)

    class ReturnTempPassword extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                    { /* change code below this line */ }
                <p>Your temporary password is: <strong></strong></p>
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

                { /* change code above this line */ }
            </div>
        );
    }
    };
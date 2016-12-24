// React 47: Use Array.filter() to Dynamically Filter an Array

# Free Code Camp React Challenge Demo: 

QA status: Needs Review

Challenge: Use Array.filter() to Dynamically Filter an Array

Intro: The map array method is a powerful tool that you will use often when working with React. Related to map is filter, which also lets us take an array and filter its contents based on some condition, returning a new array.

Instructions: Here we are initializing our component's state with an array of users. Some are online, some aren't. Let's filter this array so we can see just the users who are online. To do this first use filter to return a new array containing only the users whose online property is true. Then map over this filtered array, returning a <p/> element for each user which contains the text of their username.

### Live Preview:

    EMPTY

### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 0 out of 5 tests are passing
Your JSX code was transpiled successfully.
MyComponent exists and is rendered to the page.
MyComponent' state is initialized to an array of 6 users.
MyComponent returns a div, h1, and a p tag for every user whose online status is set to true.
MyComponent renders p elements that contain the username of each online user.


### Code (press Cmd/Ctrl + Enter to run)

    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                users: [
                    {
                        username: 'Jeff',
                        online: true
                    },
                    {
                        username: 'Alan',
                        online: false
                    },
                    {
                        username: 'Mary',
                        online: true
                    },
                    {
                        username: 'Jim',
                        online: false
                    },
                    {
                        username: 'Sara',
                        online: true
                    },
                    {
                        username: 'Laura',
                        online: true
                    }
                ]
            }
        }
    render() {
        const filterUsers = // change code here
        const renderOnline = // change code here
        return (
            <div>
                <h1>Current Online Users:</h1>
                {renderOnline}
            </div>
        );
    }
    };
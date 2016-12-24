// React 46: Use Array.map() to Dynamically Render Elements

# Free Code Camp React Challenge Demo: 

QA status: Needs Review
Challenge: Use Array.map() to Dynamically Render Elements
Intro: Ok, so conditional rendering is pretty cool, right? But what happens when you need your components to render an unknown number of elements? Oftentimes in reactive programming, a programmer has no way to know what the state of an application will be until runtime, because so much depends on a user's interaction with that program. In cases like this, programmers need to write their code to correctly handle that unknown state ahead of time, and in React, we can use Array.map() to powerfully illustrate this concept.

Let's let our example, in this case, be a simple "To Do List" app. As the programmer, we have no way of knowing how many items a user might have on their list. So we need to set up our component to dynamically render the correct number of list elements long before someone using our program decides that today is laundry day. 

Instructions: We've set up most of the MyToDoList component for you, but you are going to have to fill in some blanks to get this working properly! Take a close look at the code to make sure you understand what's going on so far. Some of this code should look familiar if you've already completed the controlled form challenge in the previous section. You'll notice a <textarea> and a <button>, along with a couple of methods that track their states, but nothing being rendered to the page.

If you haven't already guessed, this is at least partly because we haven't initialized the component's state yet. To fix this, inside the constructor, create a this.state object and define the 2 states that we see being used throughout the rest of the component's code: userInput should be initialized as an empty string, and toDoList should be initialized as an empty array. Now, when the user enters a comma separated list into the <textarea>, a button click and our handleSubmit() method will take that list, split it at the commas, and store it as an array within MyToDoList's state object.

With that done, we should have some information rendered to the page, right? Well, no. Becuase MyToDoList is still trying to render some JSX that has yet to be defined — items. To complete the challenge, delete the comment on line 28 and map over the toDoList array stored in the component's internal state to dynamically render the correct number of <li> items. When you've figured it out, try entering the string Eat, Code, Sleep, Repeat into the <textarea>, then click the button and see what happens!


### Live Preview:



### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 0 out of 7 tests are passing
Your JSX code was transpiled successfully.
The MyToDoList component exists and is rendered to the page.
MyToDoList's first child should be a <textarea> element.
MyToDoList's third child should be a <button> element.
MyToDoList's state is initialized with toDoList as an empty array.
MyToDoList's state is initialized with userInput as an empty string.
When the "Create List" button is clicked, the MyToDoList component should dynamically return a <ul> that contains an <li> element for every item of a comma separated list entered into the <textarea> element.


### Code (press Cmd/Ctrl + Enter to run)

    const textAreaStyles = {
        width: 235,
        margin: 5
    };

    class MyToDoList extends React.Component {
        constructor(props) {
            super(props);
            // change code below this line


            // change code above this line
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleChange = this.handleChange.bind(this);
        }
        handleSubmit() {
            const itemsArray = this.state.userInput.split(',');
            this.setState({
                toDoList: itemsArray
            });
        }
        handleChange(e) {
            this.setState({
                userInput: e.target.value
            });
        }
        render() {
            const items = // change code here
            return (
                <div>
                    <textarea 
                        onChange={this.handleChange}
                        value={this.state.userInput}
                        style={textAreaStyles} 
                        placeholder="Separate Items With Commas" /><br />
                    <button onClick={this.handleSubmit}>Create List</button>
                    <h1>My "To Do" List:</h1>
                    <ul>
                        {items}
                    </ul>
                </div>
            );
        }
    };
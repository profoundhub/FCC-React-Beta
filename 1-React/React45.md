// React 45: Render Conditionally from Props

# Free Code Camp React Challenge Demo: 

QA status: Needs Review
Challenge: Render Conditionally from Props
Intro: So far, we've seen how to use if/else, &&, null and the ternary operator (condition ? expr1 : expr2) to make conditional decisions about what to render and when. However, there's one important topic left to discuss that lets us combine any or all of these concepts with another powerful React feature that we have already learned quite a bit about: props. Props are another very common way that React developers employ the concept of conditional rendering in their code — that is, automatically making decisions about what to render based on the value of a given prop.

In this challenge, let's set up our child component to make some decisions based on props. To help us along, we'll also utilize the ternary operator, but you can easily see how several of the other concepts we've covered in the last few challenges might be just as useful in this context.

Instructions: Below you'll find two components that we've partially defined for you: a parent called GameOfChance, and a child called Results. The concept of this challenge is to create a very simple game. The rules? Press a button, and find out if you win or lose. That's it!

So, how do we achieve this? The first thing we need is a simple expression that will randomly return a different value every time it is run. Sounds like a job for Math.random()! This standard built in method will return a value between 0 (inclusive) and 1 (exclusive) each time it is called. So for 50/50 odds, let's let our expression be Math.random() > .5. Statistically speaking, this expression will return true 50% of the time, and false the other 50%. On line 30, replace the comment with this expression to complete the variable declaration.

Great! Now we have an expression that we can use to make a randomized decision in our code! But how do we implement this? Well, since we have a Results component, let's display the game results there. Render the Results component as a child of GameOfChance, passing in expression as a prop called fiftyFifty. Now in the Results component, write a ternary expression in the indicated space to render the text "You win!" or "You lose!" based on the fiftyFifty prop that's being passed in from GameOfChance. For good measure, make sure the handleClick() method is correctly counting each turn so the user knows how many times they've played! Hint: this also serves to let the user know the component has actually updated in case they win or lose twice in a row.


### Live Preview:

    EMPTY

### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 0 out of 8 tests are passing
Your JSX code was transpiled successfully.
The GameOfChance component exists and is rendered to the page.
GameOfChance should return a single <button> element.
GameOfChance should return a single instance of the Results component, which has a prop called fiftyFifty.
GameOfChance's state is initialized with a property of counter set to a value of 1.
When the GameOfChance component is first rendered to the DOM, a <p> element should be returned with the inner text of "Turn: 1".
Each time the buton is clicked, the counter state should be incremented by a value of 1, and a single <p> element should be rendered to the DOM that contains the text "Turn: N", where N is the value of the counter state.
When the GameOfChance component is first mounted to the DOM and each time the button is clicked thereafter, a single <h1> element should be returned that randomly renders either "You Win!" or "You Lose!".

### Code (press Cmd/Ctrl + Enter to run)

    class Results extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <h1>
                {
                    /* change code here */
                }
                </h1>
            )
        };
    };

    class GameOfChance extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                counter: 1
            }
            this.handleClick = this.handleClick.bind(this);
        }
        handleClick() {
            this.setState({
                counter: // change code here
            });
        }
        render() {
            let expression = // change code here
            return (
                <div>
                    <button onClick={this.handleClick}>Play Again</button>
                    { /* change code below this line */ }

                    { /* change code above this line */ }
                    <p>{'Turn: ' + this.state.counter}</p>
                </div>
            );
        }
    };
// React 40: Use Advanced JavaScript in React Render Method

# Free Code Camp React Challenge Demo: 

QA status: Needs Review

Challenge: Use Advanced JavaScript in React Render Method

Intro: In previous lessons, we've learned how to inject JavaScript code into JSX code using curly braces, { } — accessing props, passing props, accessing state, inserting comments into our code, and most recently, styling our components — these are all common use cases for JavaScript injection into JSX. But this is not the only way that we can utilize vanilla JavaScript code in our react components.

We can also write JavaScript directly into our render methods, before the return, without inserting it inside of curly braces (since this is not within our JSX code), and then use that variable later in our JSX code inside the return, by once again placing it inside of curly braces. While this challenge illustrates this concept in a simple way, remember, like with many of these challenges, this simple illustration can be expanded upon significantly, in order to achieve exponentially more complex results.

Instructions: First, look closely at the code that we have already provided to make sure you understand what is going on so far. In our render method, you'll notice an array that contains 20 phrases that represent the answers found in the classic 1980's Magic Eight Ball toy. In the ask method that is bound to the button click event, notice that each time the button is clicked, we are storing a random number between 1 & 20 in the component's state object. On line 38, delete the string "change me!" and reassign the answer const in order to randomly access a different index of the possibleAnswers array each time the component updates. Then, to complete the challenge, insert the answer const inside the <p> tags.

### Live Preview:

[                           ]

[ Ask the Magic Eight Ball! ]

Answer:

### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 6 out of 7 tests are passing
Your JSX code was transpiled successfully.
The MagicEightBall component exists and is rendered to the page.
MagicEightBall's first child should be an <input> element.
MagicEightBall's third child should be a <button> element.
MagicEightBall's state is initialized with a property of userInput and a property of randomIndex both set to a value of an empty string.
When MagicEightBall is first mounted to the DOM it should return an empty <p> element.
When text is entered into the <input> element and the button is clicked, the MagicEightBall component should return a <p> element that contains a random element from the possibleAnswers array.


### Code (press Cmd/Ctrl + Enter to run)

const inputStyle = {
	width: 235,
	margin: 5
}

class MagicEightBall extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInput: '',
			randomIndex: ''
		} 
		this.ask = this.ask.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	ask() {
		if (this.state.userInput) {
			this.setState({
				randomIndex: Math.floor(Math.random() * 20),
				userInput: ''
			});
		}
	}	
	handleChange(e) {
		this.setState({
			userInput: e.target.value
		});
	}
	render() {
		const possibleAnswers = [
		"It is certain", "It is decidedly so", "Without a doubt",
		"Yes, definitely", "You may rely on it", "As I see it, yes",  
		"Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", 
		"Ask again later", "Better not tell you now", "Cannot predict now", 
		"Concentrate and ask again", "Don't count on it", "My reply is no", 
		"My sources say no", "Outlook not so good","Very doubtful", "Most likely"
		];
		const answer = "change me!" // << change code here
		return (
			<div>
				<input 
					type="text"
					value={this.state.userInput}
					onChange={this.handleChange} 
					style={inputStyle} /><br />
				<button onClick={this.ask}>Ask the Magic Eight Ball!</button><br />
				<h3>Answer:</h3>
				<p>
					{ /* change code below this line */ }

					{ /* change code above this line */ }
				</p>
			</div>
		);
	}
};
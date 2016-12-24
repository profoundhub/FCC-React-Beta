


# Free Code Camp React Redux Challenge Demo:



### Live Preview:



### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### 



### Code (press Cmd/Ctrl + Enter to run)




// React Redux 01: Getting Started with React Redux

QA status: Needs Review
Challenge: Getting Started with React Redux
Intro: In these series of challenges we will introduce how we can use Redux with React. First let's review some key principles we've learned. React is a view library, we provide it with data and it renders a view for us in a performant, predictable way. Redux is a state management framework, we can use Redux to simplify the management of our application's state. Typically, in a React Redux app, we will create a single Redux store that can manage the state of our entire app and our React components will subscribe to only the pieces of data in the store that are relevant to their role. Then, we can dispatch actions directly from our React components which trigger store updates.

Although React components can manage their own state locally, in a complex app it is better to keep the app state in a single location with Redux. Individual components may still have local state specific only to them, however. Finally, because Redux is not designed to work with React out of the box, we will have to use the react-redux package which provides a way for us to pass Redux state and dispatch to our React components as props.

Now let's see all of this in action. In this series of challenges, we are going to first create a simple React component which allows you to input new text messages and have them added to an array which is displayed in the view. This should be a nice review of what you learned in the React lessons. Next, we are going to create a Redux store and actions which can manage the state of this messages array. Finally, we will use react-redux to connect our Redux store with our component, thereby extracting our local state into the Redux store. Let's get started!Instructions: We will start with a DisplayMessages component. Add a constructor to this component and initialize it with a state of two properties, input which is equal to an empty string and messages which is equal to an empty array.
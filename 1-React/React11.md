// React 11: Compose React Components


# Free Code Camp React Challenge Demo: 

QA status: Needs Review

Challenge: Compose React Components

Intro: As the challenges continue to use more complex compositions with React components and JSX, there is one important point to note. Rendering ES6 style class components within other components is no different than rendering the simple components you used in the last few challenges. You can render JSX elements, stateless functional components, and ES6 class components within other components.

Instructions: In the code editor, the TypesOfFood component is already rendering a component called Vegetables. Also, there is the Fruits component from the last challenge. Nest two components inside of Fruits — first NonCitrus, and then Citrus. Both of these components are provided for you in the background. Next, nest the Fruits class component into the the TypesOfFood component, below the h1 header and above Vegetables. The result should be a series of nested components, which uses two different component types.

### Live Preview:

Types of Food:

Vegetables:

    Brussel Sprouts
    Broccoli
    Squash

### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 2 out of 5 tests are passing
Your JSX code should transpile successfully.
The TypesOfFood component should return a single div element.
The TypesOfFood component should return the Fruits component.
The Fruits component should return the NonCitrus component, followed by the Citrus component.
The TypesOfFood component should return the Vegetables component below the Fruits component.


### Code (press Cmd/Ctrl + Enter to run)

    class Fruits extends React.Component {
        constructor(props) {
        super(props);
    }
    render() {
        return (
        <div>
            <h2>Fruits:</h2>
                { /* change code below this line */ }

            { /* change code above this line */ }
        </div>
            );
        }
    };

    class TypesOfFood extends React.Component {
        constructor(props) {
            super(props);
        }
    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                { /* change code below this line */ }

                { /* change code above this line */ }
                <Vegetables />
            </div>
        );
        }
    };
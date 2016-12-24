// React 15: Pass an Array as Props


# Free Code Camp React Challenge Demo: 

QA status: Needs Review
Challenge: Pass an Array as Props
Intro: The last challenge demonstrated how to pass information from a parent component to a child component as props. It passed a string value as a property, but React allows other data types as well, such as arrays.

The way to pass an array to a child component is a little different than the process for passing a string. Both data types use the HTML-like attribute syntax, but you wrap a string value in quotes (<ChildComponent myProp="stringData" />), and you treat an array value as JavaScript. Since you are composing this code within a JSX element, it must be wrapped by curly braces (<ChildComponent myProp={arrayData} />).

Instructions: Take a look at the different props passed to the Selections component. There are props for attire, shirts, pants, and shoes. Edit the Selections component so it returns a type of outfit and the shirt, pants, and shoes to create it. Assume that today you are at home coding, and are wearing a super-casual outfit. Within the Selections component, use bracket notation to access the arrays that are passed as props. The first instance of the Selections component should render the text: "A super-casual day. I'm going to wear a sweatshirt, pajama pants, and slippers.".

Tomorrow you have work, but you work as a programmer at a start up and your outfit can be casual. In the space indicated in the OutfitSelector component, render a second instance of the Selections component. Pass the same arrays as props, but this time, reorder the elements so that the rendered text reads: "A casual day. I'm going to wear a t-shirt, blue jeans, and sneakers."


### Live Preview:

What to wear?!

Today is:

A day. I'm going to wear a , , and .
Tomorrow is:

### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 3 out of 7 tests are passing
Your JSX code should transpile successfully.
The OutfitSelector component should return a single outer div.
The OutfitSelector component's third child should be an instance of the Selections component.
The OutfitSelector component's fifth child should be an instance of the Selections component.
Both instances of the Selections component should have props called attire, shirts, pants, and shoes, and the value of each of these props should be an array.
The first instance of the Selections component should return the text "A super-casual day. I'm going to wear a sweatshirt, pajama pants, and slippers."
The second instance of the Selections component should return the text "A casual day. I'm going to wear a t-shirt, blue jeans, and sneakers."


### Code (press Cmd/Ctrl + Enter to run)

    const Selections = (props) => {
    return (
        <div>
        A { /* change code here */ } day.
        I'm going to wear a { /* change code here */ }, { /* change code here */ }, and { /* change code here */ }.
        </div>
    );
    };

    class OutfitSelector extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div>
            <h1>What to wear?!</h1>
            <h3>Today is:</h3>
            <Selections
            attire={['casual', 'formal', 'super-casual']}
            shirts={['t-shirt', 'sweatshirt', 'collared shirt']}
            pants={['slacks', 'blue jeans', 'khakis', 'shorts', 'pajama pants']}
            shoes={['dress shoes', 'slippers', 'sneakers']}
            />
            <h3>Tomorrow is:</h3>
            { /* change code below this line */ }

            { /* change code above this line */ }
        </div>
        );
    }
    };
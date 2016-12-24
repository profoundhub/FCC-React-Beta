// React 39: Add Inline Styles in React

# Free Code Camp React Challenge Demo: 

QA status: Needs Review
Challenge: Add Inline Styles in React
Intro: Do you notice anything else that is different about the way this is written? Beyond the fact that we are setting the style attribute equal to a javaScript object, there are some other important differences that we must note. The first thing to note is that we are creating the style object within a set a curly braces, { } — it really is just a JavaScript object. The other important piece of information here is the syntax of the style properties. For example, you might have noticed that to control the size of the font we used fontSize rather than font-size. Because the style object is just a JavaScript object, and font-size is invalid syntax for an object property, we write it as fontSize. As a rule any hyphenated style properties become camel-cased when written inline in JSX.

Finally, all propery value units (for things like height, width, and fontSize) are assumed to be in px unless otherwise specified (you might have noticed we did not include a unit desigation). If you want to use em for example, you must specify and wrap the value declaration in quotes. Aside from numbers assumed to be in px all other property values should also be wrapped in quotes.

Before we move on, let's cover an additional way we can apply inline styles in React. And remember, this is just the tip of the iceberg when it comes to adding styles in React. These concepts can be expanded upon significantly to bring your components to life in rich and exciting ways! 

Instructions: If we are dealing with a larger set of styles, our code could get a bit messy if we write it right into the JSX element's tag. So instead, let's assign that style object to the styles constant that we have provided above the React component. Uncomment the constant and declare an object which represents 3 style properties and their values. Give the <div/> a color of "purple", a font size of 40 and a border of "2px solid purple". When you are finshed defining your styles, set the style attribute equal to the styles constant.


### Live Preview:

Style Me!

### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 2 out of 7 tests are passing
Your JSX code was transpiled successfully.
The const variable styles is an object with 3 properties.
styles has a color property set to a value of "purple".
styles has a fontSize property set to a value of 40.
styles has a border property set to a value of "2px solid purple".
The component renders a <div> elememt.
The <div> element has the styles defined by the styles object applied to it.


### Code (press Cmd/Ctrl + Enter to run)

    // const styles = 
    // change code above this line
    class Colorful extends React.Component {
    render() {
        // change code below this line
        return (
            <div style={{color: "yellow", fontSize: 24}}>Style Me!</div>
        );
        // change code above this line
    }
    };

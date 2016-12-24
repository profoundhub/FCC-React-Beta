// React 38: Introducing Inline Styles

# Free Code Camp React Challenge Demo: 

QA status: Needs Review
Challenge: Introducing Inline Styles
Intro: Now that we've learned the basics of React, let's get into some more complex concepts that can add even more powerful capabilities to our React code. But before we do that, let's cover something you might have been wondering for a while now, as up until this point, our React components have been fairly bland. So... How do we style these JSX elements that we've been creating in React? Well, we already know that it can't be exactly the same as working with HTML because of the way we apply classes to JSX elements. But how else might it be different?

Well, if you are importing styles from a stylesheet, it doesn't have to be much different at all. Simply apply a class to your JSX elememt using the className attribute, and apply styles accordingly in your stylesheet. Applying inline styles, however, is very common in ReactJS development, and is a bit different than what we are used to.

The way that we apply inline styles to JSX elements is similar to how we would would apply inline styles in HTML, but like with many cases in JSX, there are a few key differences. We will still be using the style attribute, but the value that we set that attribute to is where you will notice the greatest difference. A simple example of an inline style in HTML might look something like this:

<div style="color: yellow; font-size: 16px">Mellow Yellow</div>

However, because of the way JSX is transpiled, we cannot simply set the value of the attribute style to a string. Instead, we must set the style attribute's value equal to a javascript object, like so: {color: "red", fontSize: 36}.

Instructions: Uncomment the JSX code below to see what happens!

### Live Preview:

    EMPTY

### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 0 out of 4 tests are passing
Your JSX code was transpiled successfully.
The component renders a <div> elememt.
The <div> elememt has a color of red.
The <div> elememt has a font size of 72px.


### Code (press Cmd/Ctrl + Enter to run)

class Colorful extends React.Component {
  render() {
    return (
	    <div {/*style={{color: "red", fontSize: 72}} */}>Big Red</div>
    );
  }
};

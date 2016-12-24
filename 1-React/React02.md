// React 02: Create a Complex JSX Element


Free Code Camp React Challenge Demo:

QA status: Needs Review
Challenge: Create a Complex JSX Element
Intro: The last challenge was a simple example of JSX, but it can include complex nested HTML as well. One important thing to know about nested JSX is that it ultimately needs to return only one outer element. This single parent element would wrap all of the other levels of nested elements. The JSX will not transpile if, for example, your code has several elements that are siblings, but no parent element wrapping all of them. Here's an example:
const JSXValid = (
<section>
  <article>
    <p>First article</p>
  </article>
  <article>
    <p>Second article</p>
  </article>
</section>);

const JSXNotValid = (
<article>
  <p>First article</p>
</article>
<article>
  <p>Second article</p>
</article>);
Instructions: Define a new constant JSX that renders a div which contains the following elements in order: An h1, a p, and an unordered list that contains three li items. You can include any text you want within each element.

Note
When rendering multiple elements like this, you can wrap them all in parentheses, but it's not strictly required. Also notice this challenge uses a div tag to wrap all the child elements within a single parent element. If you remove the div, the JSX will no longer transpile. Keep this in mind, since it will also apply when you return JSX elements in React components.


# Live Preview:



### Tests

* Reload Seed
* Solution Code
* Previous Challenge
* Next Challenge
* Test Code

### Your code does not pass the tests, 0 out of 6 tests are passing

Your JSX code should transpile successfully.
The constant JSX should return a div element.
The div should contain an h1 tag as the first element.
The div should contain a p tag as the second element.
The div should contain a ul tag as the third element.
The ul should contain three li elements.

### Code (press Cmd/Ctrl + Enter to run)

1 // write your code here
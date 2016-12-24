// React 15: Pass an Array as Props

const Selections = (props) => {
  return (
      <div>
        A {props.attire[2]} day.
        I'm going to wear a {props.shirts[1]}, {props.pants[4]}, and {props.shoes[1]}.
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
        	{ /* change code below this line */ }
        	<Selections
            attire={['casual', 'formal', 'super-casual']}
            shirts={['t-shirt', 'sweatshirt', 'collared shirt']}
            pants={['slacks', 'blue jeans', 'khakis', 'shorts', 'pajama pants']}
            shoes={['dress shoes', 'slippers', 'sneakers']}
            />
        	{ /* change code above this line */ }
        	<h3>Tomorrow is:</h3>
        	{ /* change code below this line */ }
          <Selections
            attire={['formal', 'super-casual', 'casual']}
            shirts={['collared shirt', 't-shirt', 'sweatshirt']}
            pants={['slacks', 'khakis', 'shorts', 'pajama pants', 'blue jeans']}
            shoes={['dress shoes', 'sneakers', 'slippers']}
            />
        	{ /* change code above this line */ }
        </div>
    );
  }
};

/*

All tests passed!

Your JSX code should transpile successfully.
The OutfitSelector component should return a single outer div.
The OutfitSelector component's third child should be an instance of the Selections component.
The OutfitSelector component's fifth child should be an instance of the Selections component.
Both instances of the Selections component should have props called attire, shirts, pants, and shoes, and the value of each of these props should be an array.
The first instance of the Selections component should return the text "A super-casual day. I'm going to wear a sweatshirt, pajama pants, and slippers."
The second instance of the Selections component should return the text "A casual day. I'm going to wear a t-shirt, blue jeans, and sneakers."

*/
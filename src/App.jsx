import { Header } from "./Header"
import { Section } from "./Section"
import { HelpfulResource } from "./HelpfulResource"


function App() {
  return (
    <div>
      <Header/>
      <p>Hellow Atlas</p>
      <Section>
        <h3>What is react?</h3>
        <p>Its a set of lego bricks that help you build a website. There are different pieces called components that are used as the building blocks. They can be various things like p tags, a collection of p tags, or a div containing headers and p tags. With these components you can copy and paste these specific builds to help reduce duplicate code. And with these components you can edit just only these components reducing the need to review the entirity of a html page just to tweek something on a website.</p>
      </Section>
      <Section>
        <h3>Benefits of react</h3>
        <ul>
          <li>Components</li>
          <li>Automatic updates to html</li>
          <li>More effective refresh</li>
          <li>It's ecosytem</li>
          <li>It's wide usuage</li>
        </ul>
      </Section>
      <Section>
        <h3>Helpful resources</h3>
        <HelpfulResource link="https://react.dev/learn" label="This is the guide for syntax"/>
        <HelpfulResource link="https://egghead.io/courses/the-beginner-s-guide-to-react" label="A good introduction to actually what I'm doing"/>
        <HelpfulResource link="https://www.youtube.com/watch?v=KCrXgy8qtjM" label="The last video I watched about this"/>
      </Section>
    </div>
  );
}

export default App;

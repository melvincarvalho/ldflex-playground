import React from 'react';
import { Value, List } from '@solid/react';
import './Playground.css';

export default class Playground extends React.Component {
  state = {
    expression: "['https://ruben.verborgh.org/profile/#me'].friends.firstName",
  };

  render() {
    const { expression } = this.state;
    return (
      <div className="playground">
        <p className="expression">
          <label><code>solid.data</code></label>
          <input value={expression}
                 onChange={e => this.setState({ expression: e.target.value })}/>
        </p>
        <h3>Single result</h3>
        <p className="single"><Value src={`${expression}`}/></p>
        <h3>Multiple results (first 10)</h3>
        <List src={expression} limit="10"/>
        <h3>Corresponding SPARQL query</h3>
        <pre className="sparql"><code>
          <Value src={`${expression}.sparql`}/>
        </code></pre>
      </div>
    );
  }
}

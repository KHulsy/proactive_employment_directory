
import React from 'react';
import ReactDOM from 'react-dom';

class MyHeader extends React.Component {
  render() {
    return (
      <div>
      <h1 style={{color: "red"}}>Hello, Milton!</h1>
      <p> We're gonna need you to come in on Saturday. Thaaanks! </p>
      </div>
    );
  }
}

ReactDOM.render(<MyHeader />, document.getElementById('root'));


import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';
import 'babel-polyfill';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Markdown from 'react-markdown';
import prefixAll from 'inline-style-prefix-all';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import CSS from '../src/css/example.css';
import { Textbox, Textarea, Radiobox, Checkbox, Select } from '../src/js/Inputs/index.ts';

const markdownTextboxEmptyExample = `
\`\`\`javascript
import { Textbox } from 'react-inputs-validation';
<Textbox
  attributesInput={{ // Optional.
    id: '8675309',
    name: 'Lanie O'Hoolihan',
    type: 'redhead,magician',
    placeholder: 'Lanie O'Hoolihan',
  }}
  value={name} // Optional.[String].Default: "".
  onChange={(name, e) => {
    this.setState({ Lanie });
    console.log(e);
  }} // Required.[Func].Default: () => {}. Will return the value.
  onBlur={(e) => {console.log(e)}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
  validationOption={{
    name: 'Lanie', // Optional.[String].Default: "". To display in the Error message. i.e Please enter your {Lanie}.
    check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
    required: true // Optional.[Bool].Default: true. To determin if it is a required field.
  }}
/>
\`\`\`
`;

const markdownTextboxRegexExample = `
\`\`\`javascript
import { Textbox } from 'react-inputs-validation';
<Textbox
  attributesInput={{ // Optional.
    id: '41',
    name: 'Irish Batman',
    type: 'Kind of Conan O'Brien in the Batsuit',
    placeholder: 'Irish Batman ^-^',
  }}
  value={nameRg} // Optional.[String].Default: "".
  placeholder="Irish Batman ^-^" // Optional.[String].Default: "".
  onChange={(name, e) => {
    this.setState({ nameRg });
    console.log(e);
  }} // Required.[Func].Default: () => {}. Will return the value.
  onBlur={(e) => {console.log(e)}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
  validationOption={{
    reg: /^\d{5}$/, // Optional.[Bool].Default: "" Custom regex.
    regMsg: 'failed in reg.test(value)' // Optional.[String].Default: "" Custom regex error message.
  }}
/>
\`\`\`
`;

const markdownTextboxNumberExample = `
\`\`\`javascript
import { Textbox } from 'react-inputs-validation';
<Textbox
  attributesInput={{ // Optional.
    id: '42',
    name: 'Jackie Robinson',
    type: 'legend among legends', // Input type [text, password, number]. NOTE: provide "text" for better performance since different browsers run differently with "number".
    placeholder: 'Place your number here ^-^',
  }}
  value={number} // Optional.[String].Default: "".
  onChange={(number, e) => {
    this.setState({ number });
    console.log(e);
  }} // Required.[Func].Default: () => {}. Will return the value.
  onBlur={() => {}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
  validationOption={{
    type: 'number', // Optional.[String].Default: "string". Validation type, options are ['string', 'number', 'alphanumeric', 'alpha'].
    min: 10, // Optional.[Number].Default: 0. Validation of min length when validationOption['type'] is string, min amount when validationOption['type'] is number.
    max: 100 // Optional.[Number].Default: 0. Validation of max length when validationOption['type'] is string, max amount when validationOption['type'] is number.
    // mantissa: 2, // Optional.[Number].Default: -1. Number precision.
  }}
/>
\`\`\`
`;

const markdownRadioboxEmptyExample = `
\`\`\`javascript
import { Radiobox } from 'react-inputs-validation';
<Radiobox
  attributesInput={{ // Optional.
    id: 'job',
    name: 'job',
  }}
  value={job} // Optional.[String].Default: "".
  optionList={[
    { id: 'magicalredhead', name: 'magicalredhead' },
    { id: 'sunburnedcrimefighter', name: 'sunburnedcrimefighter' },
    { id: 'baseballlegend', name: 'baseballlegend' }
  ]}
  customStyleContainer={{
    display: 'flex',
    justifyContent: 'flex-start'
  }} // Optional.[Object].Default: {}.
  customStyleOptionListItem={{ marginRight: '20px' }} // Optional.[Object].Default: {}.
  onChange={(job, e) =>{
    this.setState({ job });
    console.log(e);
  }} // Required.[Func].Default: () => {}. Will return the value.
  onBlur={(e) => {console.log(e)}} // Optional.[Func].Default: none.
  validationOption={{
    name: 'job', // Optional.[String].Default: "". To display in the Error message. i.e Please enter your ${name}.
    check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
    required: true // Optional.[Bool].Default: true. To determin if it is a required field.
  }}
/>
\`\`\`


  }}
/>
\`\`\`
`;

                    
                     

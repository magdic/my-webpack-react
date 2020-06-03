import React, { Fragment } from 'react'
import Handlebars from '../../node_modules/handlebars/lib/handlebars'
import data from '../data/handlexample.json'

const hbr = `
<p>Hello, my name is {{name}}. I am from {{hometown}}. I have 
{{kids.length}} kids:</p>
<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>
`;

const template = Handlebars.compile(hbr);

const About = () => (
  <Fragment>
    <h2>...Loading handlebars</h2>
    <div dangerouslySetInnerHTML={{ __html: template(data) }} />
  </Fragment>
)

export default About
import React from "react";

import App from "../layouts/App";

import TextBox from './../components/input-components/TextBox';

const About = () => (
  <App>
    <h2>About Us</h2>
    <p>This is About us page.</p>
    <p>Name: <TextBox name="name" value="" required={true}  /></p>
    <p>Email: <TextBox name="email" value="" /></p>

    <p><button type="submit" name="submit">Submit</button></p>
  </App>
);

export default About;

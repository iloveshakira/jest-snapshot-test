import React, {Component} from 'react';
const ReactTestRenderer = require('react-test-renderer');
import Intro from './Intro.js';


describe('Our first snapshot test', ()=>{
	it('Should compare the component with a snapshot', ()=>{
	const component = ReactTestRenderer.create(
		<Intro />
		); 
	const json= component.toJSON();
	expect(json).toMatchSnapshot();
		})
});
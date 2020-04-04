import React from 'react';
import ReactDOM from 'react-dom';

function Hello(){
	return <span>Hello</span>

}
function World(){
	return <span>World</span>
}


function HelloWorld() {

	return (
		<div><Hello/><World/></div>

	);
}

function SubmitButton(){
	var buttonlabel='submit';
	return(<button>{buttonlabel}</button>);
}

function ValidIndicator(){
var isvalid=true;
return(<span>{isValid?'valid':'not valid'}</span>);

}

ReactDOM.render(
		
	<HelloWorld/>,
	document.querySelector('#root'));


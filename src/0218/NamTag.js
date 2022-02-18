import React, { Component } from 'react';

class NameTag extends Component{
   state = {
    	name: "initial name"
    }
    changeName = () => {
        console.log('clicked !')
    	this.state.name = "changed name"
    }
    render(){
    	console.log('NameTag')
    	const {name} = this.state
    	return (
            <>
            	<h1>{name}</h1>
                <button type="button" onClick={this.changeName()}>change name 2</button>
            </>
        )
    }
 }
 export default NameTag;
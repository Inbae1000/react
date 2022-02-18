import React, { Component } from 'react';

class Counter extends Component{
   state = {
    	count: 0
    }
    increase = () => {
    	const {count} = this.state
    	console.log(`before updating state: ${count}`)
        this.setState( (prevState) => {
            return {count: prevState.count + 1}
        })
        console.log(`after updating state: ${count}`)
    }
    increaseMultiple = () => {
        // ------------ 업데이트 되지 않는 구간 -----------------//
        this.increase() // updater 사용시 this.state.count 는 업데이트되지 않지만 prevState 는 계속 업데이트된다 (0 -> 1)
        this.increase() // updater 사용시 this.state.count 는 업데이트되지 않지만 prevState 는 계속 업데이트된다 (1 -> 2)
        this.increase() // updater 사용시 this.state.count 는 업데이트되지 않지만 prevState 는 계속 업데이트된다 (2 -> 3)
        
        console.log(`right after event: ${this.state.count}`)
        // ----------------------------------------------------//
    }
    render(){
        // 여기서 state 가 업데이트된다
        // 모든 이벤트가 종료되는 이 시점에서 state 를 변경하고 render 함수를 한번만 호출한다
        console.log('counter')
    	const {count} = this.state
        console.log(`state in render function: ${count}`)
    	return (
            <>
            	<h1>{count}</h1>
                <button type="button" onClick={this.increaseMultiple}>increase count</button>
            </>
        )
    }
 }
 export default Counter;
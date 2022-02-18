import React, { Component } from 'react'

class Cart extends Component{
    state = {
        cart: []
    }
    ad =[]
    //구현하기
    addProduct = () => {
        console.log(this.ad)
        const product = prompt("원하시는 상품을 추가해주세요 !")
        this.ad.push(product)
        this.setState({cart: this.ad})
        
    }

    // 구현하기
    render(){

        const { cart } = this.state
        console.log(cart)
        return (
            <>
            <button type="button" onClick={this.addProduct}>addProduct</button>
            <div>
                <div>
                    <h1>상품 목록</h1>
                    -----------------
                </div>
            {cart.map((carts, index)=>
                <span key ={index}>
                    <h3>{carts}</h3> <div></div>
                </span>
            )}
            </div>
            </>    
        )
    }
}
export default Cart
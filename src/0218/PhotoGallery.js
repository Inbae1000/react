import React, { Component } from 'react'

class PhotoGallery extends Component{
    state = {
        photos: []
    }
    ad =[]
    //구현하기
    addPhoto = () => {
        console.log(this.ad)
        const product = prompt("원하시는 상품을 추가해주세요 !")
        this.ad.push(product)
        this.setState({photos: this.ad})
        
    }

    // 구현하기
    render(){

        const { photos } = this.state
        console.log(photos)
        return (
            <>
            <button type="button" onClick={this.addPhoto}>addProduct</button>
            <div>
                <div>
                    <h1>사진 갤러리</h1>
                    -----------------
                </div>
            {photos.map((pho, index)=>
                <span key ={index}>
                    <img src={pho}/> <div></div>
                </span>
            )}
            </div>
            </>    
        )
    }
}
export default PhotoGallery
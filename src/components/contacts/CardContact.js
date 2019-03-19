import React, { Component } from 'react'

class CardContact extends Component {
    render(){
        return(
            <div>
                <img src={this.props.pictureUrl} alt=""/>
                <p>{this.props.name}</p>
                <p>{this.props.popularity}</p>
                <button onClick= {()=>this.props.deleteClick(this.props.id)}>Delete</button>
            </div>
        );

    }
}

export default CardContact

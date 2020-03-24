import React, { Component } from 'react';
class Page2Item extends Component {
    // constructor (props) {
    //     super(props)
    //     this.handleClick() = this.handleClick.bind(this)
    // }
    constructor (props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    render() { 
        return (
            <li onClick={this.handleClick}>{this.props.content}</li>
        );
    }
    handleClick () {
        this.props.delItem(this.props.index)
    }
}
 
export default Page2Item;
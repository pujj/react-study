import React,{Component, Fragment} from 'react'
import Page2item from './Page2Item'
import './page2.css'

class Page2 extends Component {
    constructor (props) {
        super(props)
        this.state = {
            list: [1,2],
            inputValue: '111'
        }
    }
    render () {
        return (
            <Fragment>
                <div>
                    <label htmlFor="forinput">label</label>
                    <input id="forinput" className="input-demo" value={this.state.inputValue} onChange={this.changeInput.bind(this)}/>
                    {this.state.inputValue}
                    <button onClick={this.addItem.bind(this)}>add</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <Page2item content={item} key={item+index} index={index} delItem={this.deleteItem.bind(this)}/>
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    changeInput (e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    addItem () {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    deleteItem (index) {
        console.log(index)
        let list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list
        })
    }
}

export default Page2

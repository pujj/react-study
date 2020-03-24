import React,{Component} from 'react'

class App extends Component{
    render(){
        return (
            <ul className="demo-list">
                <li>{false ? 'hello world' : 'hello today'}</li>
            </ul>
        )
    }
}

export default App
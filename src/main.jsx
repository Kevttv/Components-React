import React, {Component} from 'react'
import ReactDOM from 'react-dom/client'
import Child from './Child'
import './index.css'

class Parent extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: 'Arthur'
    }
    this.changeName = this.changeName.bind(this);
  }

  changeName(newName){
    this.setState({name: newName})
  }

  render(){
    return(<Child name = {this.state.name} changeNombre={this.changeName}/>) 
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>,
)

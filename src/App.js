import React,{Component} from "react"
import './App.css';

class App extends Component{

  constructor(){
    super()
    this.state={time:new Date()}
  }

  liveTime(){
    this.setState({
      time:new Date()
    })
  }

  componentWillMount(){
    setInterval(()=>this.liveTime(),1000)
  }


  render(){
    return(
      <h1>
        {this.state.time.toLocaleTimeString()}
      </h1>
    )

  }

}

export default App;

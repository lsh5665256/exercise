import React, { Component } from 'react';
import "./mock/mock.js"
import axios from "axios"
import "./style.css"
class App extends Component {
  state={kong:[],arr:[1,2,3,4,5],currentIndex:0}
  render() {
    return (
      <div>
         <div className="shang">
         {
           this.state.arr.map((item,index)=>{
            return  <span key={index} onClick={this.fn.bind(this,index)} className={index==this.state.currentIndex?"a1":""}>{item}</span>
           })
         }
         </div>
         <div>
         {
                   this.state.kong.map((item,index)=>{
                       return <div key={index}>{item.id}</div>
                   })
               }
         </div>

      </div>
    );
  }
  componentDidMount(){
    axios.post("/list",{page:1,pagesize:5}).then(res=>{
        console.log(res.data)     
      this.setState({kong:res.data.list})
      console.log(this.state.kong)
 
})
  }
  fn=(index)=>{
       console.log(index)
       this.setState({currentIndex:index})
       axios.post("/list",{page:index+1,pagesize:5}).then(res=>{
        console.log(res.data)
        this.setState({kong:res.data.list})
             
     }) 
  }
}


export default App;
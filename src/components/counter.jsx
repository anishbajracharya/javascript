import React, { Component } from 'react';
//import { format } from 'url';


class Counter extends Component {
   // state={
     //   value : this.props.counter.value
        
    //};
    //constructor(){
      //  super()
       // this.handelincrement.bind(this)
    //}


    //handelincrement=()=>{
 
      //  this.setState({value:this.state.value+1})

    //};


    render() {

        console.log (this.props)
        return (<div>
            {this.props.children}
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            
            
            <button
            onClick={()=> this.props.onIncrement(this.props.counter)}                         //{this.handelincrement} 
            className="btn btn-outline-secondary">increment
            </button>
            
            
            <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">delete</button>

            </div>
            
        );
}

getBadgeClasses(){
    let classes = 'badge m-2 badge-'
    classes += this.props.counter.value===0 ? "warning" : "primary"              //this.state.value===0
    return classes
}
 formatCount()
 {
     const{value}=this.props.counter                                                           //state
     return value===0 ? 'zero' :value
 }}
export default Counter;
 
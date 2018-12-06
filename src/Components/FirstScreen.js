import React, { Component } from 'react'

 class FirstScreen extends Component {

    constructor(props){
     super(props);
     this.state= {
       
        min : 0,
        max:0 ,
        finalvalue:0
     }
    }
    handleOnChange=(e)=>{
    
     switch(e.target.value){
        case '100':
         this.setState({min :0 , max :100000});
         break;
        case '200':
        this.setState({min :100000 , max :200000});
         break;
        case '500':
        this.setState({min :200000 , max :500000});
         break;
        case '1000': 
        this.setState({min :500000 , max :1000000});
         
     }
     
     if(e.target.name='ran'){
       this.setState({finalvalue : e.target.value});
     }
     
    }

    handelEnable = () =>{
     
     setTimeout(this.props.Signal,this.state.finalvalue);
    
    }
    
    handelSubmit = () => {
      
        this.props.Signal();      
    }

  render() {
    return (
      <div>
       <div className="select-sec">
       <select name="range" onChange={this.handleOnChange}>
                  <option value="100">{'0-100'}</option>
                  <option value="200">{'100-200'}</option>
                  <option value="500">{'200-500'}</option>
                  <option value="1000">{'500-1000'}</option>
    </select>
    </div>
    <div className="seekbar-sec">
   
  <input type="range"  name="ran" 
         min={this.state.min} max={this.state.max} value="0"  onChange={this.handleOnChange} />
      <br />   
    
     <div className="min-val">{this.state.min}ms</div>
     
     <div className="val">{this.state.finalvalue}ms</div>
     
     <div className="max-val">{this.state.max}ms</div>
     </div>
     
      <button className="enable-btn" onClick={this.handelEnable}>{'enable the loading time'}</button>
      <br />
       <button className="submit-btn" onClick={this.handelSubmit}>{'SUBMIT'}</button>
      </div>
    )
  }
}
export default FirstScreen

import React, { PureComponent } from 'react'
import PureComp from './PureComp'
import MemoComp from './MemoComp'
export class ParentComponent extends PureComponent {
    constructor(props)
    {
        super(props);
        this.state={name:"Vishwas"}
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({name:"Vishwas"})
        },2000)};
    
  render() {
    console.log("****Parent Comp render*****")
    return (<div>
      <div>ParentComponent {this.state.name}</div>
      {/* <PureComp name={this.state.name}/> */}
      <MemoComp name={this.state.name}/>
      </div>
    )
  };

}
export default ParentComponent;
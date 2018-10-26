import {
  Route,
  NavLink,
  HashRouter,
  BrowserRouter
} from "react-router-dom";
import React, { Component } from 'react';
import Action from '../action/index'
import { Button,Input,Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';
class App extends Component {
	constructor(props){
		super(props);
		this.myRef = React.createRef();
		this.state={
			list:[]
		}
	}
	//redux
	
	add=()=>{
		let {list,title}=this.props.store.action;
		let {dispatch}=this.props;
		var inp=document.getElementById("inp");
		let newValue=inp.value;
		dispatch({type:Action.ADD,value:newValue})
		this.setState({
			list:[...list,newValue]
		})
	}
	del=(key)=>{
		let {list,title}=this.props.store.action;
		let {dispatch}=this.props;
		let newList=list.splice(key,1);
		dispatch({type:Action.DEL,key:key})
		this.setState({
			list:newList
		})
	}
	
	//react-redux
	
	render(){
		console.log(this.props)
		return(
			<div>
				<Input placeholder="Basic usage" ref={this.myRef} id="inp"/>
				<Button onClick={this.add.bind(this)}>添加</Button>
				<Row gutter={16}>
					{
							this.props.store.action.list.map((item,index)=>
								<Col span={8} key={index} onClick={this.del.bind(this,index)}>
							        <Card title="Redux 数据" bordered={false}>{item}</Card>
							     </Col>
							)
					}
			    </Row>
			</div>
		)
	}
}

export default App;

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Button,Input,Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import {createStore,combineReducers} from 'redux';
import {Provider,connect} from 'react-redux'
import store from './store/store'

//针对app.js的redux
let render=()=>{ReactDOM.render(<App store={store.getState()} dispatch={(action)=>store.dispatch(action)}/>, document.getElementById('root'))};
render();
//对store数据监听
store.subscribe(render)






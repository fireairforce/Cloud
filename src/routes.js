import React from 'react'
import Loadable from 'react-loadable';
import { Spin } from 'antd';

function Loading({ error }) {
  if(error){
    return 'Opps Error!!';
  } else {
    return <Spin size="large">加载中</Spin>
  }
}

const Home = Loadable({
  loader: () => import('./pages'),
  loading: Loading
})


export default [
  {
    name:'首页',
    icon:'home',
    path:'/',
    component: Home
  }
] 



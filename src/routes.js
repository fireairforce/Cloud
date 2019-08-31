import React from 'react'
import Loadable from 'react-loadable';
import { Spin } from 'antd';

function Loading({ error }) {
  if (error) {
    return 'Opps Error!!';
  } else {
    return (
      <Spin size='large'
        style={{
          width: '100%',
          margin: '60px auto'
        }} />)
  }
}

const Home = Loadable({
  loader: () => import('./pages'),
  loading: Loading
})

export default [
  {
    name: '首页',
    icon: 'home',
    path: '/',
    component: Home
  }
]



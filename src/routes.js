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
});

const Value3 = Loadable({
  loader: () => import('./pages/value/value3'),
  loading: Loading
});

const Value5 = Loadable({
  loader: () => import('./pages/value/value5'),
  loading: Loading
});

const Value4 = Loadable({
  loader: () => import('./pages/value/value4'),
  loading: Loading
});

const Value6 = Loadable({
  loader: () => import('./pages/value/value6'),
  loading: Loading
});

export default [
  {
    name: '首页',
    icon: 'home',
    path: '/',
    component: Home
  },
  {
    name: '收藏3',
    icon: 'Value3',
    path: '/Value3',
    component: Value3
  },
  {
    name: '收藏4',
    icon: 'Value4',
    path: '/Value4',
    component: Value4
  }
  ,
  {
    name: '收藏5',
    icon: 'Value5',
    path: '/Value5',
    component: Value5
  }
  ,
  {
    name: '收藏6',
    icon: 'Value6',
    path: '/Value6',
    component: Value6
  }
]



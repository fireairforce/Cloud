import React from 'react'
import { Spin } from 'antd';
import Value from './pages/value';
import News from './pages/news';

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

// const Value = Loadable({
//   loader: () => import('./pages/value'),
//   loading: Loading
// });

// const News = Loadable({
//   loader: () => import('./pages/news'),
//   loading: Loading
// })

// const Test = Loadable({
//   loader: () => import('./pages/test'),
//   loading:Loading
// })

export default [
  {
    name: '估值页面',
    icon: 'value',
    path: '/',
    component: Value,
    key: 0
  },{
    name:'咨询页面',
    icon: 'news',
    path: '/news',
    component: News,
    key: 1
  }
]



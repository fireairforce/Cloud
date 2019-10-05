// import React , { lazy } from 'react'
import Value from './pages/value';
import News from './pages/news';

// const Value = lazy(()=> import('./pages/value'));
// const News = lazy(()=>import('./pages/news'));

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



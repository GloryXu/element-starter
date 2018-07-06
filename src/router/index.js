import App from '../App'

const button = r => require.ensure([], () => r(require('../page/button')), 'button')
const welcome = r => require.ensure([], () => r(require('../page/welcome')), 'welcome')


export default [
    {
        path: '/',
        component:
        App, //顶层路由，对应index.html
        children: [
            {
                path: '/',
                component: welcome,
                name: 'welcome'
            },
            {
                path: '/button',
                name: 'button',
                component: button
            }
        ]
    }
]
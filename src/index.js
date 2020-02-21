import React from 'react';
import ReactDOM from 'react-dom';


// 1.导入组件
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

const First = ()=><p>你好,这是一个组件</p>
class App extends React.Component{
    render(){
        return(
            // 使用router组件包裹整个应用
            <Router>
              
                    {/* 指定路由出口 */}
                    <Link to="/first">页面1</Link>
                    {/* 指定路由出口 */}
                    <Route path='/first' component={First}></Route>
               
            </Router>
        )
    }
}
ReactDOM.render(<App></App>,document.getElementById('root'))
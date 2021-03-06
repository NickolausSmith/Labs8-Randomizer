// Libraries
import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import styled,  {keyframes} from 'styled-components';



// Components
import Home from './Components/LandingPage/Home';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import Edit from './Components/Edit/Edit';
import Settings from './Components/Settings/Settings';

// Icons
import Vert from '@material-ui/icons/Reorder';
import Gearicon from '@material-ui/icons/Settings';
import Money from '@material-ui/icons/AttachMoney';

// Stylings
const Appmain = styled.div`
font-family:'Raleway', sans-serif;
display: flex;
justify-content: center;
justify-content: space-between;
width: 1000px;
 `
const Sidebar = styled.div`
width: 40px;
height: 100px;
background-color: cyan;
display: flex;
color: white;
border-radius: 10px;

align-items: flex-start;
flex-direction: column;
justify-content: flex-start;
`

const Sider = styled.button`
text-decoration: none;
background-color: none;
border: none;
cursor: pointer;
height: 25px;
background: none;
transition: .3s;
:hover {
  color: white;
}`
 const Box = styled.div`
  display: inline-block;
  background: pink;
  width: 200px;
  height: 200px;
  transition: transform 300ms ease-in-out;
  pointer-events: none;
`
const Trigger = styled.div`
  width: 200px;
  height: 200px;
  border: 20px solid #999;
  background: #ddd;
 
  &:onClick ${Box} {
    transform: translate(200px, 150px) rotate(20deg);
  }
`
const coolBoxKeyframes = keyframes`
0% {
  height: 0px;
  background: green;
}
100% {
  height: 1000px;
  background: blue;
}
`
 const CoolBox = styled.div`
  display: inline-block;
  background: green;
  width: 1500px;
  position: relative;
  animation-name: ${coolBoxKeyframes};
  animation-duration: .5s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: backwards;
  animation-play-state: running;
`
const Spinny = styled.div`

`
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isCool: false}
  }
  toggleCoolness = () => {
    this.setState({ isCool: !this.state.isCool })
  }
 
  render() {
    const {isCool} = this.state;
    return (
      <Appmain>


        <Sidebar> 

          <Sider onClick={this.toggleCoolness}>
          {isCool ? (
            <CoolBox/>
          ) : (
            <div></div>
          )}
          <Vert id="test"></Vert>
          </Sider>

          <Sider>
          <Gearicon/>
          </Sider>

           <Sider>
          <Money/>
          </Sider>

          </Sidebar>



       <Route exact path='/' component={Home}/>
       <Route exact path='/Signup' component={SignUp}/>
       <Route exact path ='/Login' component={Login}/>
       <Route exact path='/About'/>
       <Route exact path='/Settings'/>
       <Route exact path ='/Billing' />
       <Route exact path = '/Edit' component={Edit} />
       <Route exact path='/Settings' component={Settings}/>
       <Route exact path ='/Billing' />
       <Route exact path = '/Invoices'/>              

      </Appmain>
    );
  }
}

export default App;

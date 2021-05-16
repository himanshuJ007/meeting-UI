import { React, Component } from "react";
import { Button, Input, Space,Alert } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import Home from "./Home.js";
import axios from 'axios';
class App extends Component {
  state = {
    login: false,
    username:"",
    pass:"",
    incorrect:false
  };
  updateEmail(value) {
    this.setState({
      username: value
    });
  }
  updatePass(value) {
    this.setState({pass: value
    });
  }
  async login() {
    var details=false;
   var passwords=await axios.get(`http://localhost:3000/dev/login/password/${this.state.username}`);
    if(passwords.data){
      console.log(passwords.data);
      passwords.data.forEach(p => {
        if(p===this.state.pass){
          details=true;
          this.setState({
            login: true
          });
        
        }
        
      });

    }

    if(!details){
      this.setState({
        incorrect: true
      });

    }
    
    
  }

  render() {
    if (this.state.login) {
      return <Home />;
    } else {
      return (
        <div>
          <h1>Login Page</h1>
          <br />
          <br />
          <Space direction="vertical">
            <Input
              size="large"
              placeholder="Email"
              prefix={<UserOutlined />}
              onChange={(event) => this.updateEmail(event.target.value)}
            />

            <Input.Password
              placeholder="Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              onChange={(event) => this.updatePass(event.target.value)}
            />
            <br />
            <Button type="primary" size="large" onClick={this.login.bind(this)}>
              Login
            </Button>
            {this.state.incorrect?<Alert message="Wrong Credentials" type="warning" />:<></>}


          </Space>
        </div>
      );
    }
  }
}
export default App;

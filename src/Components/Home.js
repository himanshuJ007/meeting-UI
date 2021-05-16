import { React, Component } from "react";
import { Layout, Menu } from "antd";
import "./home.css";
import SetMeetings from "./SetMeeting";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ViewMeetings from "./ViewMeetings";
import Feedback from "./Feedback";

import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;
var meetings = [
  {
    id: 1,
    date: "2020-02-21",
    venue: "Room A1",
  },
  {
    id: 2,
    date: "2020-03-15",
    venue: "Room A2",
  },
  {
    id: 3,
    date: "2020-04-13",
    venue: "Room A3",
  },
  {
    id: 4,
    date: "2020-02-23",
    venue: "Room A4",
  },
  {
    id: 5,
    date: "2020-03-18",
    venue: "Room A5",
  },
];
class Home extends Component {
  state = {
    path: "/",
  };

  update(value) {
    console.log(value);
    if (value === 1) {
      this.setState({
        path: "/",
      });
    } else if (value === 2) {
      this.setState({
        path: "/view",
      });
    } else {
      this.setState({
        path: "/feedback",
      });
    }
  }
  render() {
    return (
      <Router>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo" />

            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item
                key="1"
                icon={<UserOutlined />}
                onClick={this.update.bind(this, 1)}
              >
                <Link to="/">SetMeeting</Link>
              </Menu.Item>

              <Menu.Item
                key="2"
                icon={<VideoCameraOutlined />}
                onClick={this.update.bind(this, 2)}
              >
                <Link to="/view">View Meetings</Link>
              </Menu.Item>

              <Menu.Item
                key="3"
                icon={<UploadOutlined />}
                onClick={this.update.bind(this, 3)}
              >
                <Link to="/feedback">Feedback</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Switch>
              <div>
                <Route exact path="/">
                  <Header>
                    <h1>Set Meeting</h1>
                  </Header>
                  <Content>
                    <SetMeetings />
                  </Content>
                </Route>
                <Route path="/view">
                  <Header>
                    <h1>Your Meetings</h1>
                  </Header>
                  <Content>
                    <ViewMeetings meetings={meetings} />
                  </Content>
                </Route>
                <Route path="/feedback">
                  <Header>
                    <h1>Feedback Form</h1>
                  </Header>
                  <Content>
                    <Feedback />
                  </Content>
                </Route>
              </div>
            </Switch>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default Home;

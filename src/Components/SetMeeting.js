import { React, Component } from "react";
import {
  Button,
  DatePicker,
  TimePicker,
  Select,
  Col,
  Row,
  Card,
} from "antd";
import Home from "./Home";
import moment from "moment";
import "../../node_modules/antd/dist/antd.css";
const dateFormat = "YYYY/MM/DD";
const { Option } = Select;
class SetMeeting extends Component {
  state = { home: false };
  handleChange(value) {
    console.log(`selected ${value}`);
  }
  onChange(time, timeString) {
    console.log(time, timeString);
  }
  set() {
    this.setState({ hoem: true });
  }
  render() {
    if (this.state.home) {
      return <Home />;
    } else {
      return (
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Card style={{ width: 300 }}>
              Meeting Date : 
              <DatePicker
                defaultValue={moment("2015/01/01", dateFormat)}
                format={dateFormat}
              />
              Meeting Time : 
              <TimePicker
                onChange={this.onChange}
                defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
              />
              MeetingVenue :
              <Select
                defaultValue="Room A1"
                style={{ width: 120 }}
                onChange={this.handleChange}
              >
                <Option value="Room A1 ">Room A1</Option>
                <Option value="Room A2">Room A2</Option>
                <Option value="Room A3" disabled>
                  Room A3
                </Option>
                <Option value="Room A4">yRoom A4</Option>
              </Select>
              <Button type="primary" size="large">
                Set
              </Button>
            </Card>
          </Col>
        </Row>
      );
    }
  }
}

export default SetMeeting;

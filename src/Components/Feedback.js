import { React, Component } from "react";
import { Checkbox, Card, Input, Popover, Button, Row, Col, Radio } from "antd";
import UploadFile from "./UploadFile";

const { TextArea } = Input;
const text = <span>Document Info</span>;
const content = <UploadFile />;
class Feedback extends Component {
  state = {
    email: false,
    contact: false,
    sugession: false,
    upload: false,
    value: 1,
  };

  onChangeEmail(e) {
    console.log(`checked = ${e.target.checked}`);
    this.setState({ email: e.target.checked });
  }
  onChangeContact(e) {
    console.log(`checked = ${e.target.checked}`);
    this.setState({ contact: e.target.checked });
  }
  onChangeSugession(e) {
    console.log(`checked = ${e.target.checked}`);
    this.setState({ sugession: e.target.checked });
  }
  onChangeUpload(e) {
    console.log(`checked = ${e.target.checked}`);
    this.setState({ upload: e.target.checked });
  }
  onChanngeRadio = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px",
    };
    const { value } = this.state;

    return (
      <div>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Card style={{ width: 350 }}>
              <Checkbox onClick={this.onChangeEmail.bind(this)}>Email</Checkbox>
              {this.state.email ? (
                <TextArea placeholder="Enter Your Email" autoSize />
              ) : (
                <></>
              )}
              <Checkbox onClick={this.onChangeContact.bind(this)}>
                Contact No
              </Checkbox>
              {this.state.contact ? (
                <TextArea placeholder="Contact No." autoSize />
              ) : (
                <></>
              )}
              <Checkbox onClick={this.onChangeSugession.bind(this)}>
                Suggestion
              </Checkbox>
              {this.state.sugession ? (
                <TextArea placeholder="Enter Here" autoSize />
              ) : (
                <></>
              )}
              <br />
              <br />
              How easy it was to find Information in Site?
              <Radio.Group onChange={this.onChanngeRadio} value={value}>
                <Radio style={radioStyle} value={1}>
                  Very Easy
                </Radio>
                <Radio style={radioStyle} value={2}>
                  Easy
                </Radio>
                <Radio style={radioStyle} value={3}>
                  Average
                </Radio>
                <Radio style={radioStyle} value={4}>
                  Difficult
                  {value === 4 ? (
                    <Input style={{ width: 100, marginLeft: 10 }} />
                  ) : null}
                </Radio>
              </Radio.Group>
              <br /><br />
              <Popover
                placement="bottom"
                title={text}
                content={content}
                trigger="click"
              >
                <Button>Upload Document</Button>
              </Popover>
              <br />
              <br />
              <Button>Submit</Button>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Feedback;

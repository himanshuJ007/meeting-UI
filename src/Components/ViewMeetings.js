import { React, Component } from "react";
import { Row, Col, Card } from "antd";

class ViewMeetings extends Component {
  render() {
    return (
      <>
        <Row gutter={[16, 16]}>
          {this.props.meetings.map((m) => {
            return (
              <Col span={12}>
                <Card title={"Meeting : " + m.id} style={{ width: 300 }}>
                  <p>Date:{m.date}</p>
                  <p>Venue:{m.venue}</p>
                </Card>
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}

export default ViewMeetings;

import React from "react";
import Form from "./components/FormApp";
// import { Row, Col, Calendar, Statistic } from "antd";

// const { Countdown } = Statistic;

// const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
function App() {
  return (
    <div style={{ height: "100%" }}>
      {/* <Row>
        <Col span={12}>
          <Calendar />
        </Col>
        <Col span={12}>
          <Countdown title="Ironchelas en: " value={deadline} />
        </Col>
      </Row> */}
      <Form />
    </div>
  );
}

export default App;

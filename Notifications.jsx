//Details page
import React, { Component } from "react";
import { Grid, Row, Col, Alert } from "react-bootstrap";
import Button from "components/CustomButton/CustomButton.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";

class Notifications extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <div className="card">
            <div className="content">
              <Row>
                <Col md={6}>
                  <h4 className="title">bo3-vnx6812</h4>
                  <Alert bsStyle="success">
                    <span>
                      <b><p>IP Address</p></b>10.256.35.18<hr></hr>
                      <b><p>Message</p></b>array is working normally
                    </span>
                  </Alert>
                  <h4 className="title">TRC_VNX5300_VUEDMZ_5285</h4>
                  <Alert bsStyle="success">
                    <span>
                      <b><p>IP Address</p></b>10.256.35.18<hr></hr>
                      <b><p>Message</p></b>array is working normally
                    </span>
                  </Alert>
                  <h4 className="title">SG8_VNX8000_ENT1_0018</h4>
                  <Alert bsStyle="danger">
                    <span>
                      <b><p>IP Address</p></b>10.256.35.18<hr></hr>
                      <b><p>Message</p></b>array is working normally
                    </span>
                  </Alert>
                  <h4 className="title">AU1_VNX8000_ENT1_0008</h4>
                  <Alert bsStyle="success">
                    <span>
                      <b><p>IP Address</p></b>10.256.35.18<hr></hr>
                      <b><p>Message</p></b>array is working normally
                    </span>
                  </Alert>
                </Col>
                <Col md={6}>
                  <h4 className="title">ERSAN301C</h4>
                  <Alert bsStyle="danger">
                    <span>
                      <b><p>IP Address</p></b>10.256.35.18<hr></hr>
                      <b><p>Message</p></b>array is working normally
                    </span>
                  </Alert>
                  <h4 className="title">NJ2_VNX5700_ENT2_1640</h4>
                  <Alert bsStyle="success">
                    <span>
                      <b><p>IP Address</p></b>10.256.35.18<hr></hr>
                      <b><p>Message</p></b>array is working normally
                    </span>
                  </Alert>
                  <h4 className="title">LO3_VNX8000_ENT1_0153</h4>
                  <Alert bsStyle="success">
                    <span>
                      <b><p>IP Address</p></b>10.256.35.18<hr></hr>
                      <b><p>Message</p></b>array is working normally
                    </span>
                  </Alert>
                  <h4 className="title">CHAAZ_CX300_ENT1_3026</h4>
                  <Alert bsStyle="danger">
                    <span>
                      <b><p>IP Address</p></b>10.256.35.18<hr></hr>
                      <b><p>Message</p></b>array is working normally
                    </span>
                  </Alert>
                </Col>
              </Row>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}
export default Notifications;
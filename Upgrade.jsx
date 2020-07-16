//bottom upgrate tab
import React, { Component } from "react";
import { Table, Grid, Row, Col } from "react-bootstrap";
import Card from "components/Card/Card";
import Button from "components/CustomButton/CustomButton";

class Icons extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                hCenter
                title="VNX Dashboard"
                category="This is vnx dash board which can be use for get health of arrays."
                ctTableResponsive
                ctTableFullWidth
                ctTableUpgrade
                content={
                  <Table>
                    <thead>
                      <tr>
                        <th />
                        <th className="text-center">Faults</th>
                        <th className="text-center">Normal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Disk Faults</td>
                        <td>60</td>
                        <td>30</td>
                      </tr>
                      <tr>
                        <td>SPS Faults</td>
                        <td>3</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>SPA,SPB faults</td>
                        <td>7</td>
                        <td>4</td>
                      </tr>
                      <tr>
                        <td>Power faults</td>
                        <td>
                          <i className="fa fa-times text-danger" />
                        </td>
                        <td>
                          <i className="fa fa-check text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td>BE,FE port faults</td>
                        <td>
                          <i className="fa fa-times text-danger" />
                        </td>
                        <td>
                          <i className="fa fa-check text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td />
                        <td>
                        </td>
                       
                        <td>
                          <Button
                            href="/admin/dashboard"
                            round
                            fill
                            bsStyle="info"
                          >
                            Home
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>

    );
  }
}

export default Icons;

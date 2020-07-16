//Over view page
import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import { Chart } from "react-google-charts";
import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import {
  dataPie,
  dataX,
  legendPie,
  legendX,
  donutdata,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";

class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={1} sm={3}></Col>
            <Col lg={4} sm={3}>
              <StatsCard
                bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="Normal"
                statsValue="15"
              />
            </Col>
            <Col lg={2} sm={1}></Col>
            <Col lg={4} sm={3}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger" />}
                statsText="Errors"
                statsValue="23"
              />
            </Col>
          </Row>
          <Row>
            <Card
            id="chartActivity"
              title="FAULT TYPES"
              content={
                
                <div className="App">
                
                    <Chart chartType="BarChart" width="100%" height="300px" data={dataX} />
                
                </div>
              }
              /*legend={
                <div className="legend">{this.createLegend(legendPie)}</div>
              }*/
              
            />
            <Col lg={12}>
              <Card
                id="chartActivity"
                title="Chart view"
                category="Over view of whole week status"
                content={
                  <div className="App">
                    <Chart chartType="PieChart" width="100%" height="300px" data={dataX} />
                  </div>
                }
                /*
                legend={
                  <div className="legend">{this.createLegend(legendBar)}</div>
                }
                */
              />

            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
export default Dashboard;
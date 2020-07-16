//Main view of the dashboard with all the faults
import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Chart } from "react-google-charts";
import ChartistGraph from "react-chartist";
import Card from "components/Card/Card";
import { iconsArray } from "variables/Variables.jsx";
import { donutdata } from "variables/Variables.jsx";
import DonutChart from 'react-donut-chart';
import 'chartjs-plugin-labels';
import {
  ddata,
  Bostan,
  Brazil,
  bostan,
  brazil,
} from "variables/Variables.jsx";

const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7] // CSS-style declaration
];
const options = {
  title: "My Daily Activities",
  pieHole: 0.4,
  is3D: false
};
class Icons extends React.Component {
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
            <Col md={12}>
              <Card
              id="chartActivity"
              title="FAULT TYPES"
              content={
              <div className="App">
        <Chart
          chartType="PieChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
              }
/*
              title={
                      <tr>
                        {Bostan.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                   
                }
                content={
                  <Row>
                    {bostan.map((prop, key) => {
                      return (
                        <Col
                          lg={3}
                          md={1}
                          sm={1}
                          xs={3}
                          className="font-icon-list"
                          key={key}
                        >
                          <div className="font-icon-detail">
                           
                            <Card
                           title={<h5>{prop}</h5>}
                              content={
                                <div
                                  id="chartPreferences"
                                  className="donutchart"
                                >
                                  <ChartistGraph data={ddata} type="Pie" />
                                </div>
                              }

                            />
                            <i className={prop} />
                          </div>
                        </Col>
                      );
                    })
                    }
                  </Row>
                }
              />

              <Card

              title={
                      <tr>
                        {Brazil.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                   
                }
                content={
                  <Row>
                    {brazil.map((prop, key) => {
                      return (
                        <Col
                          lg={3}
                          md={1}
                          sm={1}
                          xs={3}
                          className="font-icon-list"
                          key={key}
                        >
                          <div className="font-icon-detail">
                           
                            <Card
                           title={<h5>{prop}</h5>}
                              content={
                                <div
                                  id="chartPreferences"
                                  className="donutchart"
                                >
                                  <ChartistGraph data={ddata} type="Pie" />
                                </div>
                              }

                            />
                            <i className={prop} />
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                }*/
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Icons;

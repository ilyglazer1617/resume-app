import React, { Component } from "react";
import { Link } from "react-router-dom";
import Experience from "./experience";
import Skills from "./skills";
import Aboutme from "./aboutMe";
import jsPDF from "jspdf";
import Education from "./educaion";
import "../App.css";

class LiveView extends Component {
  state = {};
  styleA = {
    display: "grid",
    gridTemplateColumns: "1fr 3fr",
    gridTemplateRow: "1fr 1fr 1fr 1fr 1fr",
    // border: "0.1em solid black",
    padding: "3%",
  };

  styleA1 = {
    gridColumnStart: "1",
    gridColumnEnd: "2",
    gridRowStart: "0",
    gridRowEnd: "-1",
    padding: "5%",
    // borderBottom: "1px dotted lightskyblue",
    minHeight: "98px",
  };
  FullName = {
    fontSize: "x-large",
    marginBottom: "0rem",
    width: "max-content",
  };
  styleLastPosition = {
    fontSize: "small",
    marginBottom: "0rem",
    width: "max-content",
  };
  styleA2 = {
    gridColumnStart: "2",
    gridColumnEnd: "3",
    gridRowStart: "0",
    gridRowEnd: "-1",
    padding: "5%",
    textAlign: "right",
    fontSize: "x-small",
    borderBottom: "1px dotted lightskyblue",
    minHeight: "98px",
  };
  styleB1 = {
    gridColumnStart: "1",
    gridColumnEnd: "2",
    gridRowStart: "-1",
    gridRowEnd: "-2",
    padding: "3%",
    backgroundColor: "navy",
    color: "white",
    marginTop: "4%",
    justifyContent: "center",
    display: "flex",
  };
  styleB12 = {
    padding: "3%",
    backgroundColor: "navy",
    color: "white",
    marginTop: "4%",
    justifyContent: "center",
    display: "flex",
  };
  styleB123 = {
    backgroundColor: "navy",
    color: "white",
    marginTop: "1.3%",
    width: "fit-content",
    marginLeft: "4px",

    width: "81px",
    display: "flex",
    justifyContent: "center",
    minHeight: "30px",
  };
  styleB1234 = {
    minHeight: "165px",
  };

  styleB2 = {
    gridColumnStart: "2",
    gridColumnEnd: "3",
    gridRowStart: "-1",
    gridRowEnd: "-2",
    padding: "2%",
    fontSize: "x-small",
    justifyContent: "center",
    display: "flex",
    borderBottom: "1px dotted lightskyblue",
    minHeight: "40px",
  };
  styleC1 = {
    gridColumnStart: "1",
    gridColumnEnd: "2",
    gridRowStart: "-2",
    gridRowEnd: "-3",
    marginBottom: "1.5rem",
  };
  styleC2 = {
    gridColumnStart: "2",
    gridColumnEnd: "3",
    gridRowStart: "-2",
    gridRowEnd: "-3",
    padding: "4.1%",
    fontSize: "x-small",
  };
  styleD1 = {
    gridColumnStart: "1",
    gridColumnEnd: "2",
    gridRowStart: "-3",
    gridRowEnd: "-4",
    padding: "5%",
    marginTop: "-13%",
  };
  styleD2 = {
    gridColumnStart: "2",
    gridColumnEnd: "3",
    gridRowStart: "-3",
    gridRowEnd: "-4",

    fontSize: "x-small",
    // paddingBottom: "0",
    // display: "flex",
    // flexDirection: "column",
  };
  styleE1 = {
    gridColumnStart: "1",
    gridColumnEnd: "2",
    gridRowStart: "-4",
    gridRowEnd: "-5",
    padding: "5%",
  };
  styleE2 = {
    gridColumnStart: "2",
    gridColumnEnd: "3",
    gridRowStart: "-4",
    gridRowEnd: "-5",
    padding: "5%",
    fontSize: "x-small",
    maxHeight: "80px",
  };
  styleP = {
    marginBottom: "0rem",
  };
  styleP1 = {
    marginBottom: "0rem",
    marginTop: "-16%",
    fontSize: "small",
  };
  styleP2 = {
    marginBottom: "0rem",
    marginTop: "-5%",
    fontSize: "small",
  };
  styleP3 = {
    marginBottom: "0rem",
    marginTop: "-2%",
  };
  styleDivAboutme = {
    minHeight: "40px",
  };
  styleDivEducaion = {
    minHeight: "177.383px",
    borderBottom: "1px dotted lightskyblue",
    marginTop: "15px",
    fontSize: "small",
  };
  styleDivExperience = {
    minHeight: "165px",
    borderBottom: "1px dotted lightskyblue",
    fontSize: "small",
  };
  styleLittelExpi = {
    fontSize: "x-small",
    marginBottom: "0rem",
  };
  styleC = {};
  styleD = {};
  styleE = {};
  styleF = {};
  styleG = {};
  styleDIV = {};

  render() {
    return (
      <React.Fragment>
        <div style={this.styleA}>
          <div style={this.styleA1}>
            <p style={this.FullName}>{this.props.contact.FullName}</p>
            <p style={this.styleLastPosition}>
              {this.props.contact.lastPosition}
            </p>
          </div>

          <div style={this.styleA2}>
            <p style={this.styleP}>{this.props.contact.email}</p>
            <p style={this.styleP}>{this.props.contact.phoneNumber}</p>
            <p style={this.styleP}>{this.props.contact.erea}</p>
            <p style={this.styleP}>{this.props.contact.linkdin}</p>
            <p style={this.styleP}>{this.props.contact.git}</p>
          </div>

          <div>
            <p style={this.styleB1}> Objective</p>
          </div>
          <div style={this.styleDivAboutme}>
            <p style={this.styleB2}>{this.props.aboutme}</p>
          </div>
          <div style={this.styleDivEducaion}>
            <p style={this.styleB12}>Education</p>
            {this.props.education.map((ed, index) => (
              <div key={index + 1}>
                <div style={this.styleC1}>
                  <p style={this.styleP1} key={index + 1}>
                    {ed.nameOfSchoole}
                  </p>

                  <p style={this.styleP2} key={index + 2}>
                    {ed.years}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div style={this.styleDivEducaion}>
            {this.props.education.map((ed, index) => (
              <div key={index + 1}>
                <div style={this.styleC2}>
                  <p style={this.styleP3} key={index + 3}>
                    {ed.achivments}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={this.styleDivExperience}>
            <p style={this.styleB12}>Experience</p>
            {this.props.experience.map((expi, index) => (
              <div style={this.styleD1}>
                <p style={this.styleP} key={index + 2}>
                  {expi.place}
                </p>
                <p style={this.styleP} key={index + 4}>
                  {expi.time}
                </p>
              </div>
            ))}
          </div>
          <div className="shahar" style={this.styleDivExperience}>
            {this.props.experience.map((expi, index) => (
              <div style={this.styleD2} key={index + 4}>
                <p style={this.styleLittelExpi} key={index + 1}>
                  {expi.job}
                </p>

                <p style={this.styleLittelExpi} key={index + 3}>
                  {expi.role}
                </p>

                <p style={this.styleP} key={index + 5}>
                  {expi.achievements}
                </p>
              </div>
            ))}
          </div>
          <div>
            <p style={this.styleB12}>Skills</p>
            <div style={this.styleE2}>
              {this.props.languages.map((code, index) => {
                console.log(code + "mapping code");
                return (
                  <ul>
                    {code.map((val) => (
                      <li>{val}</li>
                    ))}
                  </ul>
                );
              })}

              <div>
                <ul>
                  {this.props.languages2.map((code, index) => (
                    <div key={index}>
                      <div>
                        <li style={this.styleP} key={index}>
                          {code}
                        </li>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div style={this.styleE2}>
              <ul>
                {this.props.languages3.map((code, index) => (
                  <div key={index}>
                    <div>
                      <li style={this.styleP} key={index}>
                        {code}
                      </li>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  // downlod = () => {
  //   // window.print();
  //   const doc = new jsPDF("portrait", "pt", [600, 800]);
  //   doc.html(document.querySelector("#page1")).then(() => {
  //     doc.save("doc.pdf");
  //   });
  // };
}

export default LiveView;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import MyImage from "../cvImg4.jpg";
import MyImage2 from "../cvImgGirl.jpg";
import Costum from "../costum.jpg";
class HomeBody extends Component {
  state = {};
  render() {
    return (
      <body className="body">
        <p className="examples">examples & option</p>
        {/* <div className={this.props.tamplate}> */}
        <div className="photoWrap ">
          <div className="placeHolder"></div>
          <div className="ImgContainer">
            <img src={MyImage} alt="" className="image" />
            <div className="middle">
              <Link
                to="/start2"
                style={{
                  textDecoration: "none",
                }}
              >
                <div
                  className="text"
                  onClick={() => this.props.handleGender("m")}
                >
                  men style
                </div>
              </Link>
            </div>
          </div>
          <div className="ImgContainer2">
            <img src={MyImage2} alt="" className="image2" />
            <div className="middle2">
              <Link
                to="/start2"
                style={{
                  textDecoration: "none",
                }}
              >
                <div
                  className="text2"
                  onClick={() => this.props.handleGender("w")}
                  style={{ justifyContent: "left" }}
                >
                  women style
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img className={this.props.openHiddden} src={Costum} alt="" />
        </div>

        <div
          onClick={() =>
            this.props.openCostum(
              "photoWrapHidden",
              "costum",
              "`image2UnVisible`",
              "image2Hidden"
            )
          }
          class="arrow"
        ></div>
      </body>
    );
  }
}

export default HomeBody;

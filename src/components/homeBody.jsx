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
        <div className="examples">
          <p>examples & option</p>
        </div>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" id="allImgWrap">
              <img class="imgSty" src={MyImage} alt="First slide" />
              <div className="image-text">
                {" "}
                <Link to="/start2">
                  <button
                    class="cssbuttons-io-button"
                    onClick={() => this.props.handleGender("m")}
                  >
                    {" "}
                    Men style
                    <div class="icon">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
            <div class="carousel-item" id="allImgWrap">
              <img class="imgSty" src={MyImage2} alt="Second slide" />
              <div className="image-text">
                {" "}
                <Link to="/start2">
                  <button
                    class="cssbuttons-io-button"
                    onClick={() => this.props.handleGender("w")}
                  >
                    {" "}
                    Women style
                    <div class="icon">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
            <div class="carousel-item" id="allImgWrap">
              <img class="imgSty" src={Costum} alt="Third slide" />
              <div className="image-text">
                {" "}
                <Link to="/start3">
                  <button
                    class="cssbuttons-io-button"
                    onClick={() => this.props.handleGender("m")}
                  >
                    {" "}
                    custom style
                    <div class="icon">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="arrowHetz">
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        {/* <div className="photoWrap ">
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
        </div> */}

        {/* <div
          onClick={() =>
            this.props.openCostum(
              "photoWrapHidden",
              "costum",
              "`image2UnVisible`",
              "image2Hidden"
            )
          }
          class="arrow"
        ></div> */}
        <i class="bi bi-arrow-left"></i>
      </body>
    );
  }
}

export default HomeBody;

//!=============================================

// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import MyImage from "../cvImg4.jpg";
// import MyImage2 from "../cvImgGirl.jpg";
// import Costum from "../costum.jpg";
// class HomeBody extends Component {
//   state = {};
//   render() {
//     return (
//       <body className="body">
//         <p className="examples">examples & option</p>
//         {/* <div className={this.props.tamplate}> */}
//         <div className="photoWrap ">
//           <div className="placeHolder"></div>
//           <div className="ImgContainer">
//             <img src={MyImage} alt="" className="image" />
//             <div className="middle">
//               <Link
//                 to="/start2"
//                 style={{
//                   textDecoration: "none",
//                 }}
//               >
//                 <div
//                   className="text"
//                   onClick={() => this.props.handleGender("m")}
//                 >
//                   men style
//                 </div>
//               </Link>
//             </div>
//           </div>
//           <div className="ImgContainer2">
//             <img src={MyImage2} alt="" className="image2" />
//             <div className="middle2">
//               <Link
//                 to="/start2"
//                 style={{
//                   textDecoration: "none",
//                 }}
//               >
//                 <div
//                   className="text2"
//                   onClick={() => this.props.handleGender("w")}
//                   style={{ justifyContent: "left" }}
//                 >
//                   women style
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div>
//           <img className={this.props.openHiddden} src={Costum} alt="" />
//         </div>

//         <div
//           onClick={() =>
//             this.props.openCostum(
//               "photoWrapHidden",
//               "costum",
//               "`image2UnVisible`",
//               "image2Hidden"
//             )
//           }
//           class="arrow"
//         ></div>
//       </body>
//     );
//   }
// }

// export default HomeBody;

//  <div className="photoWrap ">
//   <div className="placeHolder"></div>
//   <div className="ImgContainer">
//     <img src={MyImage} alt="" className="image" />
//     <div className="middle">
//       <Link
//         to="/start2"
//         style={{
//           textDecoration: "none",
//         }}
//       >
//         <div
//           className="text"
//           onClick={() => this.props.handleGender("m")}
//         >
//           men style
//         </div>
//       </Link>
//     </div>
//   </div>
//   <div className="ImgContainer2">
//     <img src={MyImage2} alt="" className="image2" />
//     <div className="middle2">
//       <Link
//         to="/start2"
//         style={{
//           textDecoration: "none",
//         }}
//       >
//         <div
//           className="text2"
//           onClick={() => this.props.handleGender("w")}
//           style={{ justifyContent: "left" }}
//         >
//           women style
//         </div>
//       </Link>
//     </div>
//   </div>
// </div>
// <div>
//   <img className={this.props.openHiddden} src={Costum} alt="" />
// </div> */}

//  <div
//   onClick={() =>
//     this.props.openCostum(
//       "photoWrapHidden",
//       "costum",
//       "`image2UnVisible`",
//       "image2Hidden"
//     )
//   }
//   class="arrow"
// ></div>

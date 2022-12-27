import React, { Component } from "react";
import "../Women.css";
import "../App.css";

class LiveView extends Component {
  state = {};
  // styleA = {
  //   display: "grid",
  //   gridTemplateColumns: "1fr 3fr",
  //   gridTemplateRow: "1fr 1fr 1fr 1fr 1fr",
  //   // border: "0.1em solid black",
  //   padding: "3%",
  // };

  // styleA1 = {
  //   gridColumnStart: "1",
  //   gridColumnEnd: "2",
  //   gridRowStart: "0",
  //   gridRowEnd: "-1",
  //   padding: "5%",
  //   borderBottom: "1px dotted lightskyblue",
  //   minHeight: "98px",
  //   backgroundColor: "rgb(255,218,185)",
  // };
  // FullName = {
  //   fontSize: "x-large",
  //   marginBottom: "0rem",
  //   width: "max-content",
  // };
  // styleLastPosition = {
  //   fontSize: "small",
  //   marginBottom: "0rem",
  //   width: "max-content",
  // };
  // styleA2 = {
  //   gridColumnStart: "2",
  //   gridColumnEnd: "3",
  //   gridRowStart: "0",
  //   gridRowEnd: "-1",
  //   padding: "5%",
  //   textAlign: "right",
  //   fontSize: "x-small",
  //   borderBottom: "1px dotted lightskyblue",
  //   minHeight: "98px",
  // };
  // styleB1 = {
  //   gridColumnStart: "1",
  //   gridColumnEnd: "2",
  //   gridRowStart: "-1",
  //   gridRowEnd: "-2",
  //   padding: "3%",
  //   backgroundColor: "rgb(120, 75, 132)",
  //   color: "white",
  //   marginTop: "4%",
  //   justifyContent: "center",
  //   display: "flex",
  // };
  // styleB12 = {
  //   padding: "3%",
  //   backgroundColor: "rgb(120, 75, 132)",
  //   color: "white",
  //   marginTop: "4%",
  //   justifyContent: "center",
  //   display: "flex",
  // };
  // styleB123 = {
  //   backgroundColor: "rgb(120, 75, 132)",
  //   color: "white",
  //   marginTop: "1.3%",
  //   width: "fit-content",
  //   marginLeft: "4px",

  //   width: "81px",
  //   display: "flex",
  //   justifyContent: "center",
  //   minHeight: "30px",
  // };
  // styleB1234 = {
  //   minHeight: "165px",
  // };

  // styleB2 = {
  //   gridColumnStart: "2",
  //   gridColumnEnd: "3",
  //   gridRowStart: "-1",
  //   gridRowEnd: "-2",
  //   padding: "2%",
  //   fontSize: "x-small",
  //   justifyContent: "center",
  //   display: "flex",
  //   minHeight: "40px",
  //   marginBottom: "0rem",
  // };
  // styleC1 = {
  //   gridColumnStart: "1",
  //   gridColumnEnd: "2",
  //   gridRowStart: "-2",
  //   gridRowEnd: "-3",
  //   marginBottom: "1.5rem",
  // };
  // styleC2 = {
  //   gridColumnStart: "2",
  //   gridColumnEnd: "3",
  //   gridRowStart: "-2",
  //   gridRowEnd: "-3",
  //   padding: "4.1%",
  //   fontSize: "x-small",
  // };
  // styleD1 = {
  //   gridColumnStart: "1",
  //   gridColumnEnd: "2",
  //   gridRowStart: "-3",
  //   gridRowEnd: "-4",
  //   padding: "5%",
  //   marginTop: "-13%",
  // };
  // styleD2 = {
  //   gridColumnStart: "2",
  //   gridColumnEnd: "3",
  //   gridRowStart: "-3",
  //   gridRowEnd: "-4",

  //   fontSize: "x-small",
  //   // paddingBottom: "0",
  //   // display: "flex",
  //   // flexDirection: "column",
  // };
  // styleE1 = {
  //   gridColumnStart: "1",
  //   gridColumnEnd: "2",
  //   gridRowStart: "-4",
  //   gridRowEnd: "-5",
  //   padding: "5%",
  // };
  // styleE2 = {
  //   gridColumnStart: "2",
  //   gridColumnEnd: "3",
  //   gridRowStart: "-4",
  //   gridRowEnd: "-5",
  //   padding: "5%",
  //   fontSize: "x-small",
  // };
  // styleP = {
  //   marginBottom: "0rem",
  // };
  // styleP1 = {
  //   marginBottom: "0rem",
  //   marginTop: "-16%",
  //   fontSize: "small",
  // };
  // styleP2 = {
  //   marginBottom: "0rem",
  //   marginTop: "-5%",
  //   fontSize: "small",
  // };
  // styleP3 = {
  //   marginBottom: "0rem",
  //   marginTop: "-2%",
  // };
  // styleDivAboutme = {
  //   minHeight: "40px",
  // };
  // styleDivEducaion = {
  //   minHeight: "177.383px",
  //   borderBottom: "1px dotted lightskyblue",
  //   marginTop: "15px",
  //   fontSize: "small",
  //   marginTop: "0rem",
  //   backgroundColor: "rgb(255,218,185)",
  // };
  // styleDivEducaion1 = {
  //   minHeight: "177.383px",
  //   borderBottom: "1px dotted lightskyblue",
  //   marginTop: "15px",
  //   fontSize: "small",
  //   marginTop: "0rem",
  // };
  // styleDivExperience = {
  //   minHeight: "165px",
  //   borderBottom: "1px dotted lightskyblue",
  //   fontSize: "small",
  //   backgroundColor: "rgb(255,218,185)",
  // };
  // styleDivExperience1 = {
  //   minHeight: "165px",
  //   borderBottom: "1px dotted lightskyblue",
  //   fontSize: "small",
  //   marginTop: "4%",
  //   padding: "4.1%",
  // };
  // styleLittelExpi = {
  //   fontSize: "x-small",
  //   marginBottom: "0rem",
  // };
  styleC = {};
  styleD = {};
  styleE = {};
  styleF = {};
  styleG = {};
  styleDIV = {};

  render() {
    let chosenGender = this.props.gender;
    let genderTamplatestyleA1 = "styleA1-" + chosenGender;
    let genderTamplateobjectiveStyling = "objectiveStyling-" + chosenGender;
    let genderTamplatestyleDivEducaion = "styleDivEducaion-" + chosenGender;
    let genderTamplatestyleDivExperience = "styleDivExperience-" + chosenGender;
    let genderTamplateskillsContainer = "skillsContainer-" + chosenGender;
    let genderTamplatestyleB1 = "styleB1-" + chosenGender;
    let genderTamplatestyleB12 = "styleB12-" + chosenGender;

    return (
      <React.Fragment>
        <div className="styleA">
          <div className={genderTamplatestyleA1}>
            <p className="FullName">{this.props.contact.FullName}</p>
            <p className="styleLastPosition">
              {this.props.contact.lastPosition}
            </p>
          </div>

          <div className="styleA2">
            <p className="styleP">{this.props.contact.email}</p>
            <p className="styleP">{this.props.contact.phoneNumber}</p>
            <p className="styleP">{this.props.contact.erea}</p>
            <p className="styleP">{this.props.contact.linkdin}</p>
            <p className="styleP">{this.props.contact.git}</p>
          </div>

          <div className={genderTamplateobjectiveStyling}>
            <p className={genderTamplatestyleB1}> Objective</p>
          </div>
          <div
            style={{
              borderBottom: "1px dotted lightskyblue",
            }}
          >
            <p className="styleB2">{this.props.aboutme}</p>
          </div>
          <div className={genderTamplatestyleDivEducaion}>
            <p className={genderTamplatestyleB12}>Education</p>
            {this.props.education.map((ed, index) => (
              <div key={index + 1}>
                <div className="styleC1">
                  <p className="styleP1" key={index + 1}>
                    {ed.nameOfSchoole}
                  </p>

                  <p className="styleP2" key={index + 2}>
                    {ed.years}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="styleDivEducaion1">
            {this.props.education.map((ed, index) => (
              <div key={index + 1}>
                <div className="styleC2">
                  <p className="styleP3" key={index + 3}>
                    {ed.achivments}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div id="women" className={genderTamplatestyleDivExperience}>
            <p className={genderTamplatestyleB12}>Experience</p>
            {this.props.experience.map((expi, index) => (
              <div className="styleD1">
                <p className="styleP" key={index + 2}>
                  {expi.place}
                </p>
                <p style={{ marginBottom: "0.5rem" }} key={index + 4}>
                  {expi.time}
                </p>
              </div>
            ))}
          </div>
          <div className="styleDivExperience1">
            {this.props.experience.map((expi, index) => (
              <div className="styleD2" key={index + 4}>
                <p className="styleLittelExpi" key={index + 1}>
                  {expi.job}
                </p>

                <p className="styleLittelExpi" key={index + 3}>
                  {expi.role}
                </p>

                <p className="styleP" key={index + 5}>
                  {expi.achievements}
                </p>
              </div>
            ))}
          </div>
          <div className={genderTamplateskillsContainer}>
            <p className={genderTamplatestyleB12}>Skills</p>
            <div className="styleE2">
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
                        <li className="styleP" key={index}>
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
            <div className="styleE2">
              <ul>
                {this.props.languages3.map((code, index) => (
                  <div key={index}>
                    <div>
                      <li className="styleP" key={index}>
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

//!=========================================================MEN STYLE==================================================================================

// import React, { Component } from "react";

// import "../App.css";

// class LiveView extends Component {
//   state = {};
//   styleA = {
//     display: "grid",
//     gridTemplateColumns: "1fr 3fr",
//     gridTemplateRow: "1fr 1fr 1fr 1fr 1fr",
//     // border: "0.1em solid black",
//     padding: "3%",
//   };

//   styleA1 = {
//     gridColumnStart: "1",
//     gridColumnEnd: "2",
//     gridRowStart: "0",
//     gridRowEnd: "-1",
//     padding: "5%",
//     borderBottom: "1px dotted lightskyblue",
//     minHeight: "98px",
//     backgroundColor: "rgb(199, 197, 197)",
//   };
//   FullName = {
//     fontSize: "x-large",
//     marginBottom: "0rem",
//     width: "max-content",
//   };
//   styleLastPosition = {
//     fontSize: "small",
//     marginBottom: "0rem",
//     width: "max-content",
//   };
//   styleA2 = {
//     gridColumnStart: "2",
//     gridColumnEnd: "3",
//     gridRowStart: "0",
//     gridRowEnd: "-1",
//     padding: "5%",
//     textAlign: "right",
//     fontSize: "x-small",
//     borderBottom: "1px dotted lightskyblue",
//     minHeight: "98px",
//   };
//   styleB1 = {
//     gridColumnStart: "1",
//     gridColumnEnd: "2",
//     gridRowStart: "-1",
//     gridRowEnd: "-2",
//     padding: "3%",
//     backgroundColor: "navy",
//     color: "white",
//     marginTop: "4%",
//     justifyContent: "center",
//     display: "flex",
//   };
//   styleB12 = {
//     padding: "3%",
//     backgroundColor: "navy",
//     color: "white",
//     marginTop: "4%",
//     justifyContent: "center",
//     display: "flex",
//   };
//   styleB123 = {
//     backgroundColor: "navy",
//     color: "white",
//     marginTop: "1.3%",
//     width: "fit-content",
//     marginLeft: "4px",

//     width: "81px",
//     display: "flex",
//     justifyContent: "center",
//     minHeight: "30px",
//   };
//   styleB1234 = {
//     minHeight: "165px",
//   };

//   styleB2 = {
//     gridColumnStart: "2",
//     gridColumnEnd: "3",
//     gridRowStart: "-1",
//     gridRowEnd: "-2",
//     padding: "2%",
//     fontSize: "x-small",
//     justifyContent: "center",
//     display: "flex",
//     minHeight: "40px",
//     marginBottom: "0rem",
//   };
//   styleC1 = {
//     gridColumnStart: "1",
//     gridColumnEnd: "2",
//     gridRowStart: "-2",
//     gridRowEnd: "-3",
//     marginBottom: "1.5rem",
//   };
//   styleC2 = {
//     gridColumnStart: "2",
//     gridColumnEnd: "3",
//     gridRowStart: "-2",
//     gridRowEnd: "-3",
//     padding: "4.1%",
//     fontSize: "x-small",
//   };
//   styleD1 = {
//     gridColumnStart: "1",
//     gridColumnEnd: "2",
//     gridRowStart: "-3",
//     gridRowEnd: "-4",
//     padding: "5%",
//     marginTop: "-13%",
//   };
//   styleD2 = {
//     gridColumnStart: "2",
//     gridColumnEnd: "3",
//     gridRowStart: "-3",
//     gridRowEnd: "-4",

//     fontSize: "x-small",
//     // paddingBottom: "0",
//     // display: "flex",
//     // flexDirection: "column",
//   };
//   styleE1 = {
//     gridColumnStart: "1",
//     gridColumnEnd: "2",
//     gridRowStart: "-4",
//     gridRowEnd: "-5",
//     padding: "5%",
//   };
//   styleE2 = {
//     gridColumnStart: "2",
//     gridColumnEnd: "3",
//     gridRowStart: "-4",
//     gridRowEnd: "-5",
//     padding: "5%",
//     fontSize: "x-small",
//   };
//   styleP = {
//     marginBottom: "0rem",
//   };
//   styleP1 = {
//     marginBottom: "0rem",
//     marginTop: "-16%",
//     fontSize: "small",
//   };
//   styleP2 = {
//     marginBottom: "0rem",
//     marginTop: "-5%",
//     fontSize: "small",
//   };
//   styleP3 = {
//     marginBottom: "0rem",
//     marginTop: "-2%",
//   };
//   styleDivAboutme = {
//     minHeight: "40px",
//   };
//   styleDivEducaion = {
//     minHeight: "177.383px",
//     borderBottom: "1px dotted lightskyblue",
//     marginTop: "15px",
//     fontSize: "small",
//     marginTop: "0rem",
//     backgroundColor: "rgb(199, 197, 197)",
//   };
//   styleDivEducaion1 = {
//     minHeight: "177.383px",
//     borderBottom: "1px dotted lightskyblue",
//     marginTop: "15px",
//     fontSize: "small",
//     marginTop: "0rem",
//   };
//   styleDivExperience = {
//     minHeight: "165px",
//     borderBottom: "1px dotted lightskyblue",
//     fontSize: "small",
//     backgroundColor: "rgb(199, 197, 197)",
//   };
//   styleDivExperience1 = {
//     minHeight: "165px",
//     borderBottom: "1px dotted lightskyblue",
//     fontSize: "small",
//     marginTop: "4%",
//     padding: "4.1%",
//   };
//   styleLittelExpi = {
//     fontSize: "x-small",
//     marginBottom: "0rem",
//   };
//   styleC = {};
//   styleD = {};
//   styleE = {};
//   styleF = {};
//   styleG = {};
//   styleDIV = {};

//   render() {
//     return (
//       <React.Fragment>
//         <div className="styleA}>
//           <div className="styleA1}>
//             <p className="FullName}>{this.props.contact.FullName}</p>
//             <p className="styleLastPosition}>
//               {this.props.contact.lastPosition}
//             </p>
//           </div>

//           <div className="styleA2}>
//             <p className="styleP}>{this.props.contact.email}</p>
//             <p className="styleP}>{this.props.contact.phoneNumber}</p>
//             <p className="styleP}>{this.props.contact.erea}</p>
//             <p className="styleP}>{this.props.contact.linkdin}</p>
//             <p className="styleP}>{this.props.contact.git}</p>
//           </div>

//           <div
//             style={{
//               borderBottom: "1px dotted lightskyblue",
//               backgroundColor: "rgb(199, 197, 197)",
//             }}
//           >
//             <p className="styleB1}> Objective</p>
//           </div>
//           <div
//             style={{
//               borderBottom: "1px dotted lightskyblue",
//             }}
//           >
//             <p className="styleB2}>{this.props.aboutme}</p>
//           </div>
//           <div className="styleDivEducaion}>
//             <p className="styleB12}>Education</p>
//             {this.props.education.map((ed, index) => (
//               <div key={index + 1}>
//                 <div className="styleC1}>
//                   <p className="styleP1} key={index + 1}>
//                     {ed.nameOfSchoole}
//                   </p>

//                   <p className="styleP2} key={index + 2}>
//                     {ed.years}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="styleDivEducaion1}>
//             {this.props.education.map((ed, index) => (
//               <div key={index + 1}>
//                 <div className="styleC2}>
//                   <p className="styleP3} key={index + 3}>
//                     {ed.achivments}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="styleDivExperience}>
//             <p className="styleB12}>Experience</p>
//             {this.props.experience.map((expi, index) => (
//               <div className="styleD1}>
//                 <p className="styleP} key={index + 2}>
//                   {expi.place}
//                 </p>
//                 <p style={{ marginBottom: "0.5rem" }} key={index + 4}>
//                   {expi.time}
//                 </p>
//               </div>
//             ))}
//           </div>
//           <div className="shahar" className="styleDivExperience1}>
//             {this.props.experience.map((expi, index) => (
//               <div className="styleD2} key={index + 4}>
//                 <p className="styleLittelExpi} key={index + 1}>
//                   {expi.job}
//                 </p>

//                 <p className="styleLittelExpi} key={index + 3}>
//                   {expi.role}
//                 </p>

//                 <p className="styleP} key={index + 5}>
//                   {expi.achievements}
//                 </p>
//               </div>
//             ))}
//           </div>
//           <div style={{ backgroundColor: "rgb(199, 197, 197)" }}>
//             <p className="styleB12}>Skills</p>
//             <div className="styleE2}>
//               {this.props.languages.map((code, index) => {
//                 console.log(code + "mapping code");
//                 return (
//                   <ul>
//                     {code.map((val) => (
//                       <li>{val}</li>
//                     ))}
//                   </ul>
//                 );
//               })}

//               <div>
//                 <ul>
//                   {this.props.languages2.map((code, index) => (
//                     <div key={index}>
//                       <div>
//                         <li className="styleP} key={index}>
//                           {code}
//                         </li>
//                       </div>
//                     </div>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div className="styleE2}>
//               <ul>
//                 {this.props.languages3.map((code, index) => (
//                   <div key={index}>
//                     <div>
//                       <li className="styleP} key={index}>
//                         {code}
//                       </li>
//                     </div>
//                   </div>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }

//   // downlod = () => {
//   //   // window.print();
//   //   const doc = new jsPDF("portrait", "pt", [600, 800]);
//   //   doc.html(document.querySelector("#page1")).then(() => {
//   //     doc.save("doc.pdf");
//   //   });
//   // };
// }

// export default LiveView;

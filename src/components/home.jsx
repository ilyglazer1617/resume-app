import React, { Component } from "react";
import "../homeStyle.css";
import "boxicons";
import MyImage from "../cvImg4.jpg";
import MyImage2 from "../cvImgGirl.jpg";
import { Link } from "react-router-dom";
import ResumeApp from "./resumeApp";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="conteiner">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page">
                      Home
                    </a>
                  </li>

                  <div
                    class="collapse navbar-collapse"
                    id="navbarNavDarkDropdown"
                  >
                    <ul class="navbar-nav">
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle"
                          href="/ResumeApp.jsx"
                          id="navbarDarkDropdownMenuLink"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Styles
                        </a>
                        <ul
                          class="dropdown-menu dropdown-menu-dark"
                          aria-labelledby="navbarDarkDropdownMenuLink"
                        >
                          <li>
                            <Link to="/start2">
                              <button class="dropdown-item pr-5">
                                Women style
                              </button>
                            </Link>
                          </li>
                          <li>
                            <button class="dropdown-item ms-4">
                              Men style{" "}
                            </button>{" "}
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </ul>

                <form class="d-flex" role="search">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button class="btn btn-outline-success me-2" type="submit">
                    Search
                  </button>
                  <button class="btn btn-success  ">login</button>
                </form>
              </div>
            </div>
          </nav>
          <body className="body">
            <p className="examples">examples & option</p>
            <div className="photoWrap">
              <div className="ImgContainer">
                <img src={MyImage} alt="" className="image" />
                <div className="middle">
                  <div className="text">men style</div>
                </div>
              </div>
              <div className="ImgContainer2">
                <img src={MyImage2} alt="" className="image2" />
                <div className="middle2">
                  <div className="text2">women style</div>
                </div>
              </div>
            </div>
          </body>
          <div class="container2">
            <footer class="row">
              <div class="sozial col-xs-12 col-sm-6 col-sm-push-6">
                <ul class="row">
                  <li class="col-xs-6 col-sm-2" id="log">
                    <a href="#">
                      <img
                        class="logo  opacity-75"
                        src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_facebook-128.png"
                      />
                    </a>
                  </li>

                  <li class="col-xs-6 col-sm-2" id="log">
                    <a href="#">
                      <img
                        class="logo opacity-75"
                        src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/twitter_online_social_media-128.png"
                      />
                    </a>
                  </li>
                  <li class="col-xs-6 col-sm-2" id="log">
                    <a href="#">
                      <img
                        class="logo opacity-75"
                        src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/instagram_online_social_media_photo-128.png"
                      />
                    </a>
                  </li>
                  <li class="col-xs-6 col-sm-2" id="log">
                    <a href="#">
                      <img
                        class="logo opacity-75"
                        src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_google_plus-128.png"
                      />
                    </a>
                  </li>
                </ul>
              </div>

              <div class="impressum col-xs-12 col-sm-3 col-sm-pull-6 ms-5 mr">
                <div
                  class="btn-group ms-5"
                  role="group"
                  aria-label="Third group"
                >
                  <button
                    class="btn btn-outline-dark border-0 mt-2  ms-5 opacity-50 "
                    type="submit"
                  >
                    Need help?
                  </button>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;

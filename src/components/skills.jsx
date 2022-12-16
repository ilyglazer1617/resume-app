import { useFormik } from "formik";
import { Link } from "react-router-dom";
import React from "react";
import Education from "./educaion";
import Experience from "./experience";

function Skills(props) {
  const { pushSkills, pushSkills2, pushSkills3, downlod } = props;
  const formik = useFormik({
    initialValues: {
      languages: [],
      languages2: [],
    },
  });

  console.log(formik.values);
  return (
    <React.Fragment>
      <form onSubmit={(ev) => pushSkills(ev, formik.values)}>
        <h1>Skills </h1>
        <div className="row">
          <div className="col-md-6">
            <div className="form-check m-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="languages"
                value="Javascript"
                id="flexCheckDefault"
                onChange={formik.handleChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Javascript
              </label>
            </div>
            <div className="form-check m-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="languages"
                value="Python"
                id="flexCheckDefault"
                onChange={formik.handleChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Python
              </label>
            </div>
            <div className="form-check m-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="languages"
                value="Java"
                id="flexCheckDefault"
                onChange={formik.handleChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Java
              </label>
            </div>
            <div className="form-check m-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="languages"
                value="PHP"
                id="flexCheckDefault"
                onChange={formik.handleChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                PHP
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-check m-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="languages"
                value="C#"
                id="flexCheckDefault"
                onChange={formik.handleChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                C#
              </label>
            </div>
            <div className="form-check m-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="languages"
                value="C++"
                id="flexCheckDefault"
                onChange={formik.handleChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                C++
              </label>
            </div>
            <div className="form-check m-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="languages"
                value="C"
                id="flexCheckDefault"
                onChange={formik.handleChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                C
              </label>
            </div>
            <div className="form-check m-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="languages"
                value="Typescript"
                id="flexCheckDefault"
                onChange={formik.handleChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Typescript
              </label>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-success">
          send{" "}
        </button>
      </form>
      <form onSubmit={(ev) => pushSkills2(ev, formik.values)}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            add skill{" "}
          </span>
          <input
            name="languages2"
            type="text"
            id="personalSkill"
            className="form-control"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={formik.handleChange}
          />
        </div>

        <button type="submit" className="btn btn-success">
          send2{" "}
        </button>
      </form>
      <form onSubmit={(ev) => pushSkills3(ev, formik.values)}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            add languages{" "}
          </span>
          <input
            name="languages3"
            type="text"
            className="form-control"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={formik.handleChange}
          />
        </div>
        {/* <button type="submit" className="next">
          send3{" "}
        </button> */}
        <button type="submit" className="btn btn-success">
          send3{" "}
        </button>
        <div>
          <Link to="/experience">
            <button href="#" className="btn btn-primary">
              &laquo; Previous
            </button>
          </Link>

          <Link to="/skills">
            <button className="btn btn-primary">Next &raquo;</button>
          </Link>
        </div>
      </form>

      <button type="button" onClick={() => downlod()} className="btn btn-info">
        to pdf{" "}
      </button>
    </React.Fragment>
  );
}

export default Skills;

// <div class="form-check">
// <input
//   className="form-check-input"
//   type="checkbox"
//   name="c1"
//   value="ily"
//   id="flexCheckDefault"
//   onChange={formik.handleChange}
// />
// <label class="form-check-label" for="flexCheckDefault">
//   ily
// </label>
// </div>

// <div className="input-group mb-3">
// <span className="input-group-text" id="basic-addon1">
//   job
// </span>
// <input
//   type="text"
//   name="job"
//   className="form-control"
//   placeholder="job"
//   aria-label="Username"
//   aria-describedby="basic-addon1"
//   onChange={formik.handleChange}
// />
// </div>

// <div>
// <Link to="/">
//   <button href="#" className="previous">
//     &laquo; Previous
//   </button>
// </Link>

// <button type="submit" className="next">
//   clear inputs
// </button>
// <button
//   type="button"
//   onClick={(ev) => props.pushSkills(ev, formik.values)}
//   className="next"
// >
//   stik contact to page
// </button>
// <Link to="/education">
//   <button className="next">Next &raquo;</button>
// </Link>
// {/* <Link to="">
//   <button className="next">Next &raquo;</button>
// </Link> */}
// </div>

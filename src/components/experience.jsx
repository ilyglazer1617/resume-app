import { useFormik } from "formik";
import { Link } from "react-router-dom";
import React from "react";
import Education from "./educaion";
import Aboutme from "./aboutMe";
import Skills from "./skills";

function Experience(props) {
  const { pushExperience } = props;
  const formik = useFormik({
    initialValues: {
      job: "",
      Place: "",
      role: "",
      time: "",
      achievements: "",
    },
  });

  console.log(formik.values);
  return (
    <React.Fragment>
      <h1>Experience </h1>
      <form onSubmit={(ev) => pushExperience(ev, formik.values)}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            job
          </span>
          <input
            type="text"
            name="job"
            className="form-control"
            placeholder="job"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={formik.handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            place
          </span>
          <input
            type="text"
            name="place"
            className="form-control"
            placeholder="place"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={formik.handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            role
          </span>
          <input
            type="text"
            name="role"
            className="form-control"
            placeholder="role"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={formik.handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            time
          </span>
          <input
            type="text"
            name="time"
            className="form-control"
            placeholder="start year / end year            "
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={formik.handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            achievements
          </span>
          <input
            type="text"
            name="achievements"
            className="form-control"
            placeholder="achievements"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={formik.handleChange}
            maxLength="79"
          />
        </div>
        <div>
          <Link to="/education">
            <button href="#" className="btn btn-primary">
              &laquo; Previous
            </button>
          </Link>

          {/* <button type="submit" className="next">
            clear inputs
          </button> */}
          <input
            type="reset"
            value="Add another job"
            className="btn btn-dark"
          />
          <button
            type="button"
            onClick={(ev) => props.pushExperience2(ev, formik.values)}
            className="btn btn-success"
          >
            stik contact to page
          </button>
          <Link to="/skills">
            <button className="btn btn-primary">Next &raquo;</button>
          </Link>
          {/* <Link to="">
            <button className="next">Next &raquo;</button>
          </Link> */}
        </div>
      </form>
    </React.Fragment>
  );
}
export default Experience;

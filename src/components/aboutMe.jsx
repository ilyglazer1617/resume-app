import { useFormik } from "formik";
import { Link } from "react-router-dom";
import React from "react";
import Education from "./educaion";

function Aboutme(props) {
  const { pushAboutMe } = props;
  const formik = useFormik({
    initialValues: {
      piska: "",
    },
  });

  console.log(formik.values);
  return (
    <React.Fragment>
      <form onSubmit={(ev) => pushAboutMe(ev, formik.values)}>
        <h1>Tell Somthing about you </h1>
        <div className="input-group mb-3">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              about u
            </span>
            <input
              type="text"
              name="piska"
              className="form-control"
              placeholder=" somthing about u"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={formik.handleChange}
              maxLength="116"
              required
            />
          </div>

          <Link to="/">
            <button href="#" className="btn btn-primary">
              &laquo; Previous
            </button>
          </Link>
          <button type="submit" className="btn btn-success">
            stik contact to page
          </button>
          <Link to="/education">
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
export default Aboutme;

import { useFormik } from "formik";
import { Link } from "react-router-dom";
import Experience from "./experience";
import Aboutme from "./aboutMe";

const Education = (props) => {
  const formik = useFormik({
    initialValues: {
      nameOfSchoole: "",
      years: "",
      achivments: "",
      c1: "",
    },
  });
  // console.table(formik.values);

  return (
    <div>
      <h1>Education</h1>
      <form onSubmit={(event) => props.onsubmitED(event, formik.values)}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Name of school
          </span>
          <input
            name="nameOfSchoole"
            type="text"
            className="form-control"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={formik.handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Years
          </span>
          <input
            type="text"
            name="years"
            className="form-control"
            placeholder="start year / end year"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={formik.handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Achivments</span>
          <textarea
            name="achivments"
            className="form-control"
            aria-label="With textarea"
            onChange={formik.handleChange}
            maxLength="100"
            required
          ></textarea>
        </div>

        <div>
          <Link to="/aboutme">
            <button href="#" className="btn btn-primary">
              &laquo; Previous
            </button>
          </Link>

          <button type="submit" className="btn btn-success">
            send{" "}
          </button>

          <Link to="/experience">
            <button className="btn btn-primary">Next &raquo;</button>
          </Link>
          {/* <Link to="">
            <button className="next">Next &raquo;</button>
          </Link> */}
        </div>

        <div>
          <input
            type="reset"
            value="Add another work"
            className="btn btn-dark"
          />
        </div>
      </form>
    </div>
  );
};

export default Education;

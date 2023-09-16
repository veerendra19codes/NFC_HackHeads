import { DATA } from "../data.js"; //json file
import React, { useState, useEffect, useContext } from "react";
import { Data } from "../components/data.js"; //component single
import { AppContext } from "../App.js";

export const Scholarships = () => {
  // const [country, setCountry] = useState("");
  // const [course, setCourse] = useState("");
  const [search, setSearch] = useState("");

  const { country, setCountry, course, setCourse, cgpa, setCgpa } =
    useContext(AppContext);

  const handleCountrychange = (e) => {
    setCountry(e.target.value);
    // setSearch(e.target.value);
    // console.log(country);
  };

  const handlecourse = (e) => {
    setCourse(e.target.value);
    // setSearch(e.target.value);
    // console.log(course);
  };

  const handleadd = () => {
    alert("Added to preference list");
    // const _id=e.FIELD1;
  };

  return (
    <div className="scholarshipsbody">
      <header className="title">Recommendations</header>

      <div className="container1">
        <header>Scholarship Recommendations</header>
        <form action="#">
          <div className="form-first">
            <div className="details personal">
              <span className="stitle">Enter Following Details</span>
              <div className="fields">
                <label className="field" htmlFor="country-names">
                  Choose a country:
                </label>
                <select
                  className="dropdown"
                  name="country-names"
                  id="country-names"
                  value={country}
                  onChange={handleCountrychange}
                >
                  <option value="united-states">United States</option>
                  <option value="united-kingdom">United Kingdom</option>
                  <option value="pakistan">Pakistan</option>
                  <option value="india">India</option>
                  <option value="nigeria">Nigeria</option>
                  <option value="canada">Canada</option>
                  <option value="south-africa">South Africa</option>
                  <option value="europe">Europe</option>
                </select>
                <br></br>
                <label className="field" htmlFor="course-names">
                  Choose a course:
                </label>
                <select
                  className="dropdown"
                  name="course-names"
                  id="course-names"
                  value={course}
                  onChange={handlecourse}
                >
                  <option value="bachelors">Bachelor's</option>
                  <option value="masters">Masters</option>
                  <option value="phd">Phd</option>
                  <option value="notf">Not Funded</option>
                  <option value="fullyf">Fully Funded</option>
                </select>

                {/* <button className="nextBtn btn">
                  <span className="btnText">Generate</span>
                  <i className="uil uil-navigator"></i>
  </button> */}
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="container2">
        <header>These are the scholarships best suited for you:</header>
        <div className="scholarships">
          <div className="table">
            <div className="thead">
              <div className="tr">
                <div className="th">Title</div>
                <div className="th">Degrees</div>
                <div className="th">Funds</div>
                <div className="th">Date</div>
                <div className="th">Location</div>
                <div className="th">Add</div>
              </div>
            </div>

            <div className="datatable">
              {DATA.filter((item) => {
                return country.toLowerCase() === ""
                  ? item
                  : item.location.includes(country);
              })
                // .filter((item) => {
                //   return course.toLowerCase() === ""
                //     ? item
                //     : item.degrees.includes(
                //         forEach((element) => { slice(0, coiurse.lentgh, 1)
                //           course in element;
                //         })
                //       );
                // })
                .map((item) => (
                  // <Data data={data} />
                  <div className="tr" key={item.FIELD1}>
                    <div className="td">{item.title}</div>
                    <div className="td">{item.degrees}</div>
                    <div className="td">{item.funds}</div>
                    <div className="td">{item.date}</div>
                    <div className="td">{item.location}</div>
                    <button onClick={handleadd} className="preference btn">
                      Add to Preference
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

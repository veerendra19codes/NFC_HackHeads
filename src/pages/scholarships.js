export const Scholarships = () => {
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
                <label className="field" for="country-names">
                  Choose a country:
                </label>
                <select
                  className="dropdown"
                  name="country-names"
                  id="country-names"
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
                <label className="field" for="course-names">
                  Choose a course:
                </label>
                <select
                  className="dropdown"
                  name="course-names"
                  id="course-names"
                >
                  <option value="bachelors">Bachelor's</option>
                  <option value="masters">Masters</option>
                  <option value="phd">Phd</option>
                  <option value="notf">Not Funded</option>
                  <option value="fullyf">Fully Funded</option>
                </select>

                <button className="nextBtn">
                  <span className="btnText">Generate</span>
                  <i className="uil uil-navigator"></i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="container2">
        <header>These are the scholarships best suited for you:</header>
      </div>
    </div>
  );
};

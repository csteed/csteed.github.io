'use strict';

class Sidebar extends React.Component {
  

  constructor(props) {
    super(props);
  }

  render() {
    let navInfo = [
      {name: "about", link: "../index.html"},
      {name: "projects", link: "../projects/index.html"},
      {name: "publications", link: "../publications/index.html"},
      {name: "art", link: "../art/index.html"},
      {name: "bio", link: "../bio/index.html"},
      {name: "cv", link: "https://github.com/csteed/vitae/raw/master/chadsteed_cv.pdf"},
    ];

    let navLinks = navInfo.map(d => {
      if (this.props.activeNav === d.name) {
        return <h1 key={d.name}>{d.name} &#9679;</h1>
      } else {
        return <h1 key={d.name}><a className="nav" href={d.link}>{d.name} &#9675;</a></h1>
      }
    });

    return (
      <div>
        <div id="contact">
          <h2 id="name"><a href="http://www.csteed.com">chad a.&nbsp;steed</a></h2>
          
          <p>
            <a href="https://vis.ornl.gov/">VISTA Visualization Lab</a> Director &amp;<br/>
            Senior Research Staff
          </p>
          <p>
            <a href="https://www.ornl.gov/division/csmd">Computer Science and Mathematics</a><br/>
            <a href="https://www.ornl.gov/directorate/ccsd">Computing and Computational Sciences</a><br/>
            <a href="http://www.ornl.gov">Oak Ridge National Laboratory</a>
          </p>

          <p>
            Joint Faculty Appointment<br/>
            <a href="http://www.eecs.utk.edu/">EECS</a>, <a href="http://www.utk.edu/">University of Tennessee</a><br/>
          </p>

          <p>
            Joint Faculty Appointment<br/>
            <a href="https://bredesencenter.utk.edu/">Bredesen Center</a>, <a href="http://www.utk.edu/">University of Tennessee</a><br/>
          </p>

          <p>
            P.O. Box 2008, MS-6085<br/>
            Oak Ridge, TN  37831-6085<br/>
            steedca (at) ornl.gov<br/>
          </p>
        </div>
        <div id="navigate">
          {navLinks}
        </div>

        
      </div>
    );
  }
}

const domContainer = document.querySelector('#sidebar');
console.log(domContainer.dataset.activenav);
const activenav = domContainer.dataset.activenav;
ReactDOM.render(<Sidebar activeNav={activenav} />, domContainer);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sidebar = function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar(props) {
    _classCallCheck(this, Sidebar);

    return _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));
  }

  _createClass(Sidebar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var navInfo = [{ name: "about", link: "../index.html" }, { name: "projects", link: "../projects/index.html" }, { name: "publications", link: "../publications/index.html" }, { name: "art", link: "../art/index.html" }, { name: "bio", link: "../bio/index.html" }, { name: "cv", link: "https://github.com/csteed/vitae/raw/master/chadsteed_cv.pdf" }];

      var navLinks = navInfo.map(function (d) {
        if (_this2.props.activeNav === d.name) {
          return React.createElement(
            "h1",
            { key: d.name },
            d.name,
            " \u25CF"
          );
        } else {
          return React.createElement(
            "h1",
            { key: d.name },
            React.createElement(
              "a",
              { className: "nav", href: d.link },
              d.name,
              " \u25CB"
            )
          );
        }
      });

      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { id: "contact" },
          React.createElement(
            "h2",
            { id: "name" },
            React.createElement(
              "a",
              { href: "http://www.csteed.com" },
              "chad a.\xA0steed"
            )
          ),
          React.createElement(
            "p",
            null,
            React.createElement(
              "a",
              { href: "https://vis.ornl.gov/" },
              "VISTA Visualization Lab"
            ),
            " Director &",
            React.createElement("br", null),
            "Senior Research Staff"
          ),
          React.createElement(
            "p",
            null,
            React.createElement(
              "a",
              { href: "https://www.ornl.gov/division/csmd" },
              "Computer Science and Mathematics"
            ),
            React.createElement("br", null),
            React.createElement(
              "a",
              { href: "https://www.ornl.gov/directorate/ccsd" },
              "Computing and Computational Sciences"
            ),
            React.createElement("br", null),
            React.createElement(
              "a",
              { href: "http://www.ornl.gov" },
              "Oak Ridge National Laboratory"
            )
          ),
          React.createElement(
            "p",
            null,
            "Joint Faculty Appointment",
            React.createElement("br", null),
            React.createElement(
              "a",
              { href: "http://www.eecs.utk.edu/" },
              "EECS"
            ),
            ", ",
            React.createElement(
              "a",
              { href: "http://www.utk.edu/" },
              "University of Tennessee"
            ),
            React.createElement("br", null)
          ),
          React.createElement(
            "p",
            null,
            "Joint Faculty Appointment",
            React.createElement("br", null),
            React.createElement(
              "a",
              { href: "https://bredesencenter.utk.edu/" },
              "Bredesen Center"
            ),
            ", ",
            React.createElement(
              "a",
              { href: "http://www.utk.edu/" },
              "University of Tennessee"
            ),
            React.createElement("br", null)
          ),
          React.createElement(
            "p",
            null,
            "P.O. Box 2008, MS-6085",
            React.createElement("br", null),
            "Oak Ridge, TN  37831-6085",
            React.createElement("br", null),
            "steedca (at) ornl.gov",
            React.createElement("br", null)
          )
        ),
        React.createElement(
          "div",
          { id: "navigate" },
          navLinks
        )
      );
    }
  }]);

  return Sidebar;
}(React.Component);

var domContainer = document.querySelector('#sidebar');
console.log(domContainer.dataset.activenav);
var activenav = domContainer.dataset.activenav;
ReactDOM.render(React.createElement(Sidebar, { activeNav: activenav }), domContainer);
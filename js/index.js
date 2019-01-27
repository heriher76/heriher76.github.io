var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var _ReactDOM = ReactDOM,render = _ReactDOM.render;var _ReactRedux =
ReactRedux,Provider = _ReactRedux.Provider,connect = _ReactRedux.connect;var _Redux =
Redux,createStore = _Redux.createStore;var _React =
React,Component = _React.Component;

var moreTatersPleaseLogo = "http://acclimate.ca/portfolio/static/media/more-taters-please-logo.cdf16dde.png";
var moFinishesLogo = "data:image/png;base64,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";
var jubbaLogo = "http://acclimate.ca/portfolio/static/media/jubba-african-cuisine-logo.045646dd.png";
var icyCharacter = "data:image/png;base64,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";
var fairmontGrillLogo = "data:image/png;base64,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";
var florenceAvePaintersLogo = "http://acclimate.ca/portfolio/static/media/florence-ave-painters-logo.fd97fd54.png";

var PAGECONTENT = 'PAGECONTENT';
var actions = {
  updatePageContent: function updatePageContent(page) {
    return {
      type: PAGECONTENT,
      pageContent: page };

  } };

//Redux
var reducer = function reducer() {var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { title: 'Heri Hermawan', pageContent: 'projects' };var action = arguments[1];
  switch (action.type) {
    case 'PAGECONTENT':
      return Object.assign({}, state, { pageContent: action.pageContent });

    default:
      return state;}

};
var store = createStore(reducer);

//React
var ProjectItem = function (_Component) {_inherits(ProjectItem, _Component);
  function ProjectItem(props) {_classCallCheck(this, ProjectItem);var _this = _possibleConstructorReturn(this, (ProjectItem.__proto__ || Object.getPrototypeOf(ProjectItem)).call(this,
    props));
    _this.state = {
      info: false };

    _this.info = true;
    _this.handleClick = _this.handleClick.bind(_this);return _this;
  }_createClass(ProjectItem, [{ key: "handleClick", value: function handleClick()
    {var _this2 = this;
      this.setState({
        info: !this.state.info });

      //return project item to front display after 10s
      setTimeout(function () {
        _this2.setState({
          info: false });

      }, 15000);
    } }, { key: "render", value: function render()
    {
      var itemInfo = this.state.info == false ?
      React.createElement("div", { className: "project-item-front" },
        this.props.icon) :

      React.createElement("div", { className: "project-item-back" },
        React.createElement("h4", { className: "project-item-heading" }, "Requirements:"),
        this.props.requirementsList,
        React.createElement("h4", { className: "project-item-heading" }, "Tools Used:"),
        this.props.toolsList);


      return (
        React.createElement("div", { className: "project-item " + this.props.projectClassName, onClick: this.handleClick },
          itemInfo));


    } }]);return ProjectItem;}(Component);

var About = function About(props) {
  return (
    React.createElement("div", { className: "about-info-container" },
      React.createElement("div", { id: "skills" },
        React.createElement("h3", { className: "centered-heading" }, "Skills & Languages"),
        React.createElement("ul", null,
          React.createElement("li", null, "Skills"),
          React.createElement("ul", null,
            React.createElement("li", null, "Graphic Design with Photoshop,", " Video Editing With", React.createElement("a", { href: "http://www.adobe.com/Premiere", target: "_blank", rel: "noopener noreferrer" }, " Adobe Premiere"), " ", ),
            React.createElement("li", null, "Responsive Web Design using grid layouts"),
            React.createElement("li", null, "Web app development using ", React.createElement("a", { href: "https://laravel.com/", target: "_blank", rel: "noopener noreferrer" }, "Laravel"), " and ", React.createElement("a", { href: "https://reactjs.org/", target: "_blank", rel: "noopener noreferrer" }, "React"))),
          React.createElement("br", null),
          React.createElement("li", null, "Programming Languages"),
          React.createElement("ul", null,
            React.createElement("li", null, "HTML5 ", React.createElement("i", { className: "fab fa-html5" })),
            React.createElement("li", null, "CSS3 ", React.createElement("i", { className: "fab fa-css3-alt" })),
            React.createElement("li", null, "JavaScript / ES6 ", React.createElement("i", { "class": "fab fa-js" })),
            React.createElement("li", null, "React ", React.createElement("i", { className: "fab fa-react" })),
            React.createElement("li", null, "Vue JS ", React.createElement("i", { className: "fab fa-redux" })),
            React.createElement("li", null, "Node ", React.createElement("i", { className: "fab fa-node-js" })),
            React.createElement("li", null, "PHP ", React.createElement("i", { className: "fab fa-php" })),
            React.createElement("li", null, "MySQL"),
            React.createElement("li", null, "C++"), React.createElement("br", null)))),



      React.createElement("div", { id: "experience" },
        React.createElement("h3", { className: "centered-heading" }, "Education & Experience"),
        React.createElement("ul", null,
          React.createElement("li", null, "Training",
            React.createElement("ul", null,
              React.createElement("li", null, React.createElement("a", { href: "https://sanbercode.com", target: "_blank", rel: "noopener noreferrer" }, "Web Application"), " - sanbercode.com"),
              React.createElement("li", null, React.createElement("a", { href: "https://codecademy.com", target: "_blank", rel: "noopener noreferrer" }, "Front End Development"), " - codecademy.com"),
              React.createElement("li", null, React.createElement("a", { href: "https://sekolahkoding.com", target: "_blank", rel: "noopener noreferrer" }, "Responsive Web Design"), " - sekolahkoding.com")),
            React.createElement("br", null)),

          React.createElement("li", null, "FreeLancer in Sanbersy.com"),
          React.createElement("li", null, "Bachelor of Informatics Engineering - State Islamic University Sunan Gunung Djati"))),

      React.createElement("br", null),
      React.createElement("div", { id: "hobbies" },
        React.createElement("h3", { className: "centered-heading" }, "In My Free Time"),
        React.createElement("div", { className: "hobbies-info", id: "" }, React.createElement("p", null, "I enjoy playing football, games:PUBG, spending time with my family and friends, and working on learning a new skill through mini projects.")),
        React.createElement("div", { className: "hobbies-info" },
          React.createElement("img", { src: "images/h-letter.jpg", alt: "HeriHerPlay Logo", style: { width: "200px" } })))));




};
var Projects = function Projects(props) {
  return (
    React.createElement("div", { className: "project-card-container" },
      React.createElement(ProjectItem, {
        projectClassName: "pomodoro-clock-project",
        icon:
        React.createElement("div", null,
          React.createElement("div", { className: "code-pen-project-icon" }, React.createElement("i", { "class": "fas fa-bolt" })),
          React.createElement("h2", null, "STEI POWER ITB Web App")),


        requirementsList:
        React.createElement("ul", { className: "project-item-ul" },
          React.createElement("li", null, "Web for Administration College - ", React.createElement("a", { href: "http://power-itb.org/", target: "_blank", rel: "noopener noreferrer" }, "View")),
          React.createElement("li", null, "Built with mobile-first approach")),


        toolsList:
        React.createElement("ul", { className: "project-item-ul" },
          React.createElement("li", null, "Laravel, VueJS, HTML5, CSS, Bootstrap")) }),



      React.createElement(ProjectItem, {
        projectClassName: "calculator-project",
        icon:
        React.createElement("div", null,
          React.createElement("div", { className: "code-pen-project-icon" }, React.createElement("i", { "class": "fas fa-home" })),
          React.createElement("h2", null, "RancangBangun123 Web App")),


        requirementsList:
        React.createElement("ul", { className: "project-item-ul" },
          React.createElement("li", null, "Website Company - ", React.createElement("a", { href: "http://rancangbangun123.com", target: "_blank", rel: "noopener noreferrer" }, "View")),
          React.createElement("li", null, "Built with mobile-first approach"),
          React.createElement("li", null, "With Shop, and Articles Support"),),


        toolsList:
        React.createElement("ul", { className: "project-item-ul" },
          React.createElement("li", null, "HTML5, CSS, Bootstrap, VueJS, Ajax, Laravel")) }),



      React.createElement(ProjectItem, {
        projectClassName: "drum-machine-project",
        icon:
        React.createElement("div", null,
          React.createElement("div", { className: "code-pen-project-icon" }, React.createElement("i", { "class": "fas fa-hands-helping" })),
          React.createElement("h2", null, "Donasi Online Web App")),


        requirementsList:
        React.createElement("ul", { className: "project-item-ul" },
          React.createElement("li", null, "Web Donation for Humanity - ", React.createElement("a", { href: "https://donasionline.id", target: "_blank", rel: "noopener noreferrer" }, "View")),
          React.createElement("li", null, "Built with mobile-first approach"),
          React.createElement("li", null, "Support Automatic Confirmation to Bank")),


        toolsList:
        React.createElement("ul", { className: "project-item-ul" },
          React.createElement("li", null, "CSS, Bootstrap, Laravel, HTML5, VueJS, Ajax")) }),


      React.createElement(ProjectItem, {
        projectClassName: "more-taters-please-project",
        icon:
        React.createElement("div", null,
          React.createElement("div", { className: "code-pen-project-icon" }, React.createElement("i", { "class": "fas fa-tree" })),
          React.createElement("h2", null, "Wonderful Tour Web App")),


        requirementsList:
        React.createElement("ul", { className: "project-item-ul" },
          React.createElement("li", null, "Web Tour Information - ", React.createElement("a", { href: "https://github.com/heriher76/wonderful", target: "_blank", rel: "noopener noreferrer" }, "View")),
          React.createElement("li", null, "Built with mobile-first approach"),
          React.createElement("li", null, "With Tour Gallery")),


        toolsList:
        React.createElement("ul", { className: "project-item-ul" },
          React.createElement("li", null, "VueJS, CSS, Bootstrap, Laravel, HTML5")) }),


      React.createElement(ProjectItem, {
        projectClassName: "jubba-project",
        icon:
        React.createElement("div", null,
          React.createElement("div", { className: "code-pen-project-icon" }, React.createElement("i", { "class": "fas fa-ticket-alt" })),
          React.createElement("h2", null, "Gotix Web App")),


        requirementsList:
        React.createElement("ul", { className: "project-item-ul" },
          React.createElement("li", null, "Web Order Ticket Online - ", React.createElement("a", { href: "https://github.com/heriher76/gotix", target: "_blank", rel: "noopener noreferrer" }, "View")),
          React.createElement("li", null, "Built with mobile-first approach"),
          React.createElement("li", null, "With Online Order Ticket Support")),


        toolsList:
        React.createElement("ul", { className: "project-item-ul" },
          React.createElement("li", null, "Bootstrap, CSS, Laravel, HTML5, VueJS")) }),


      React.createElement(ProjectItem, {
        projectClassName: "mo-finishes-project",
        icon:
        React.createElement("div", null,
          React.createElement("div", { className: "code-pen-project-icon" }, React.createElement("i", { "class": "fas fa-chess-king" })),
          React.createElement("h2", null, "Heronesia Web App")),


        requirementsList:
        React.createElement("ul", { className: "project-item-ul" },
          React.createElement("li", null, "Web Information About Heroes Indonesia - ", React.createElement("a", { href: "https://github.com/heriher76/heronesia", target: "_blank", rel: "noopener noreferrer" }, "View")),
          React.createElement("li", null, "Built with mobile-first approach"),
          React.createElement("li", null, "With News Information Support")),


        toolsList:
        React.createElement("ul", { className: "project-item-ul" },
          React.createElement("li", null, "Ajax, Bootstrap, CSS, Laravel, HTML5, VueJS")) }),


            React.createElement(ProjectItem, {
        projectClassName: "icys-adventure-project",
        icon:
        React.createElement("div", null,
          React.createElement("div", { className: "code-pen-project-icon" }, React.createElement("i", { "class": "fas fa-user-circle" })),
          React.createElement("h2", null, "Simple Blog App")),


        requirementsList:
        React.createElement("ul", { className: "project-item-ul" },
          React.createElement("li", null, "Simple Personal Blog - ", React.createElement("a", { href: "https://github.com/heriher76/simple-blog", target: "_blank", rel: "noopener noreferrer" }, "View")),
          React.createElement("li", null, "Built with mobile-first approach"),
          React.createElement("li", null, "With Search, Comment, Category, and Tag System")),


        toolsList:
        React.createElement("ul", { className: "project-item-ul" },
          React.createElement("li", null, "HTML5, Bootstrap, CSS, Laravel, VueJS")) }),


            React.createElement(ProjectItem, {
        projectClassName: "fairmont-grill-project",
        icon:
        React.createElement("div", null,
          React.createElement("div", { className: "code-pen-project-icon" }, React.createElement("i", { "class": "fas fa-star" })),
          React.createElement("h2", null, "SanberRate App")),


        requirementsList:
        React.createElement("ul", { className: "project-item-ul" },
          React.createElement("li", null, "Application For Rate Your Facility - ", React.createElement("a", { href: "https://github.com/heriher76/sanberrate", target: "_blank", rel: "noopener noreferrer" }, "View")),
          React.createElement("li", null, "Built with mobile-first approach"),
          React.createElement("li", null, "With Like, Dislike, and Progressive System")),


        toolsList:
        React.createElement("ul", { className: "project-item-ul" },
          React.createElement("li", null, "HTML5, Ajax, Bootstrap, CSS, Laravel, VueJS")) }),


            React.createElement(ProjectItem, {
        projectClassName: "florence-ave-painters-project",
        icon:
        React.createElement("div", null,
          React.createElement("div", { className: "code-pen-project-icon" }, React.createElement("i", { "class": "fas fa-book" })),
          React.createElement("h2", null, "Mobile Dictionary App")),


        requirementsList:
        React.createElement("ul", { className: "project-item-ul" },
          React.createElement("li", null, "Mobile Dictionary - ", React.createElement("a", { href: "https://github.com/heriher76/kamus-uinsgd", target: "_blank", rel: "noopener noreferrer" }, "View")),
          React.createElement("li", null, "Arabic to Indonesian, and Indonesian to Arabic")),


        toolsList:
        React.createElement("ul", { className: "project-item-ul" },
          React.createElement("li", null, "React Native, Node JS")) })));

};
var Contact = function Contact(props) {
  return (
    React.createElement("div", { className: "contact-link-container" },
      React.createElement("address", null, React.createElement("a", { href: "mailto:herhermawan007@gmail.com" }, React.createElement("div", { className: "contact-link centered-heading" }, React.createElement("i", { className: "fas fa-envelope" })))),
      React.createElement("a", { href: "https://www.linkedin.com/in/heri-hermawan-9a6284143/", target: "_blank", rel: "noopener noreferrer" }, React.createElement("div", { className: "contact-link centered-heading" }, React.createElement("i", { className: "fab fa-linkedin-in" }))),
      React.createElement("a", { href: "https://codepen.io/heriher76/", target: "_blank", rel: "noopener noreferrer" }, React.createElement("div", { className: "contact-link centered-heading" }, React.createElement("i", { className: "fab fa-codepen" }))),
      React.createElement("a", { href: "https://twitter.com/herhermawan007", target: "_blank", rel: "noopener noreferrer" }, React.createElement("div", { className: "contact-link centered-heading" }, React.createElement("i", { className: "fab fa-twitter" }))),
      React.createElement("a", { href: "https://github.com/heriher76", target: "_blank", rel: "noopener noreferrer" }, React.createElement("div", { className: "contact-link centered-heading" }, React.createElement("i", { className: "fab fa-github" }))),
      React.createElement("a", { href: "https://www.codecademy.com/heriher76", target: "_blank", rel: "noopener noreferrer" }, React.createElement("div", { className: "contact-link centered-heading" }, React.createElement("i", { className: "fab fa-free-code-camp" })))));


};var
MainContent = function (_Component2) {_inherits(MainContent, _Component2);
  function MainContent(props) {_classCallCheck(this, MainContent);return _possibleConstructorReturn(this, (MainContent.__proto__ || Object.getPrototypeOf(MainContent)).call(this,
    props));
  }_createClass(MainContent, [{ key: "render", value: function render()
    {
      var content = void 0;
      content = this.props.pageContent === 'about' ?
      React.createElement(About, null) :
      this.props.pageContent === 'projects' ?
      React.createElement(Projects, null) :
      this.props.pageContent === 'contact' ?
      React.createElement(Contact, null) :
      React.createElement("div", null, "Not a page");
      return (
        React.createElement("main", { className: "main-content" },
          content));


    } }]);return MainContent;}(Component);var

PageBanner = function (_Component3) {_inherits(PageBanner, _Component3);
  function PageBanner(props) {_classCallCheck(this, PageBanner);return _possibleConstructorReturn(this, (PageBanner.__proto__ || Object.getPrototypeOf(PageBanner)).call(this,
    props));
  }_createClass(PageBanner, [{ key: "render", value: function render()
    {
      var pageBanner = void 0;
      pageBanner = this.props.pageContent === 'about' ?
      React.createElement("div", null,
        React.createElement("div", { id: "profile-picture" }),
        React.createElement("h1", { className: "page-heading" }, "Heri Hermawan"),
        React.createElement("h4", { className: "page-subheading" }, "Visioner, Ambitious, and a 'Genius of Hardwork'")) :
      this.props.pageContent === 'projects' ?
      React.createElement("div", null,
        React.createElement("div", { className: "page-banner-icon" }, React.createElement("i", { "class": "far fa-building" })),
        React.createElement("h2", { className: "page-heading" }, "Projects"),
        React.createElement("h4", { className: "page-subheading" }, "Check out my latest ", React.createElement("a", { href: "https://github.com/heriher76", target: "_blank", rel: "noopener noreferrer" }, "projects"))) :

      this.props.pageContent === 'contact' ?
      React.createElement("div", null,
        React.createElement("div", { className: "page-banner-icon" }, React.createElement("i", { "class": "far fa-handshake" })),
        React.createElement("h2", { className: "page-heading" }, "Lets work together on something great"),
        React.createElement("address", null, React.createElement("a", { href: "http://heriherplay.cf" }, React.createElement("h4", { className: "page-subheading" }, "Visit My Blog")))) :

      React.createElement("div", null, "There is no banner here!");
      return (
        React.createElement("div", { className: "page-banner" },
          pageBanner));


    } }]);return PageBanner;}(Component);var

Menu = function (_Component4) {_inherits(Menu, _Component4);
  function Menu(props) {_classCallCheck(this, Menu);var _this5 = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this,
    props));
    _this5.handleClick = _this5.handleClick.bind(_this5);return _this5;
  }_createClass(Menu, [{ key: "handleClick", value: function handleClick(
    e) {
      switch (e.target.id) {
        case 'about-page-link':
          this.props.updatePageContent('about');
          break;
        case 'projects-page-link':
          this.props.updatePageContent('projects');
          break;
        case 'contact-page-link':
          this.props.updatePageContent('contact');
          break;
        default:
          return;}

    } }, { key: "render", value: function render()
    {
      var aboutStyle = void 0,projectsStyle = void 0,contactStyle = void 0;
      this.props.pageContent === 'about' ?
      aboutStyle = { backgroundColor: 'rgb(0,0,0)' } :
      aboutStyle = { backgroundColor: 'rgb(0, 175, 150)' };
      this.props.pageContent === 'projects' ?
      projectsStyle = { backgroundColor: 'rgb(0,0,0)' } :
      projectsStyle = { backgroundColor: 'rgb(0, 175, 150)' };
      this.props.pageContent === 'contact' ?
      contactStyle = { backgroundColor: 'rgb(0,0,0)' } :
      contactStyle = { backgroundColor: 'rgb(0, 175, 150)' };
      return (
        React.createElement("header", { id: "nav-menu" },
          React.createElement("h2", {
              id: "about-page-link",
              className: "nav-bar-item",
              style: aboutStyle,
              onClick: this.handleClick }, "About"),
          React.createElement("h2", {
              id: "projects-page-link",
              className: "nav-bar-item",
              style: projectsStyle,
              onClick: this.handleClick }, "Projects"),
          React.createElement("h2", {
              id: "contact-page-link",
              className: "nav-bar-item",
              style: contactStyle,
              onClick: this.handleClick }, "Contact")));


    } }]);return Menu;}(Component);var

App = function (_Component5) {_inherits(App, _Component5);
  function App(props) {_classCallCheck(this, App);return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
  }_createClass(App, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", { className: "App" },
          React.createElement(Menu, {
            pageContent: this.props.pageContent,
            updatePageContent: this.props.updatePageContent }),
          React.createElement(PageBanner, {
            pageContent: this.props.pageContent,
            updatePageContent: this.props.updatePageContent }),
          React.createElement(MainContent, { pageContent: this.props.pageContent })));


    } }]);return App;}(Component);


//react-redux
var mapStateToProps = function mapStateToProps(state) {
  return {
    title: state.title,
    pageContent: state.pageContent };

};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updatePageContent: function updatePageContent(page) {
      dispatch(actions.updatePageContent(page));
    } };

};
var Container = connect(mapStateToProps, mapDispatchToProps)(App);

var AppContainer = function AppContainer() {
  return (
    React.createElement(Provider, { store: store },
      React.createElement(Container, null)));


};

ReactDOM.render(
React.createElement(AppContainer, null), document.getElementById('root'));
import React from "react";

class PageHeader extends React.Component {

  state = {
    customStyle : ""
  }


  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  handleScroll() {
    if(window.pageYOffset > 500){
      this.setState({customStyle: "header-scrolling header-theme-light"})
    }else{
      this.setState({customStyle: ""})
    }
    
  }
  render() {
    return (
      <header className={`header ${this.state.customStyle}`}>
        <div className="grid">
          <div className="header-logo-container">
            <h1 className="header-logo">
              <a href="#" className="header-logo-link">
                Xolo
              </a>
            </h1>
          </div>
          <div className="header-nav-container">
            <nav className="nav">
              <ul className="nav-list nav-list-links">
                <li className="nav-item nav-item-dropdown">
                  <a href="#" className="nav-item-link nav-item-link-dropdown">
                    Products
                  </a>
                  <ul className="grid text-span-wrapper-end nav-dropdown">
                    <div className="grid-text">
                      <li>
                        <a href="/go" className="iconbox iconbox-circle -red">
                          <div className="iconbox-body">
                            <div className="iconbox-title">Xolo Go</div>
                            <div className="iconbox-text">
                              A virtual company with pay-as-you-go pricing.
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="/leap" className="iconbox iconbox-circle">
                          <div className="iconbox-body">
                            <div className="iconbox-title">Xolo Leap</div>
                            <div className="iconbox-text">
                              Your EU company with a fixed monthly fee.
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="/compare" className="iconbox iconbox-arrow">
                          <div className="iconbox-body">
                            <div className="iconbox-title">
                              Compare products
                            </div>
                            <div className="iconbox-text">
                              Get the right Xolo for you and your business.
                            </div>
                          </div>
                        </a>
                      </li>
                    </div>
                  </ul>
                </li>
                <li className="nav-item ">
                  <a href="/pricing" className="nav-item-link">
                    Pricing
                  </a>
                </li>
                <li className="nav-item ">
                  <a href="/faq" className="nav-item-link">
                    Help
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://blog.xolo.io/"
                    target="_blank"
                    className="nav-item-link"
                  >
                    Blog
                  </a>
                </li>
              </ul>

              <ul className="nav-list nav-list-buttons">
                <li className="nav-item">
                  <a href="/login" className="btn btn-transparent">
                    Log in
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/signup" className="btn btn-red">
                    Sign up free
                  </a>
                </li>
              </ul>
            </nav>
            <button
              className="nav-button-burger"
              aria-label="Toggle side menu"
              aria-pressed="false"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className="sidebar">
            <nav className="nav-sidebar">
              <ul className="nav-sidebar-list">
                <li className="nav-sidebar-item ">
                  <a href="/" className="nav-sidebar-link">
                    Home
                  </a>
                </li>
                <li className="nav-sidebar-item nav-sidebar-item-dropdown ">
                  <a
                    href="/"
                    className="nav-sidebar-link nav-sidebar-link-dropdown"
                  >
                    Products
                  </a>
                  <ul className="nav-sidebar-dropdown">
                    <li>
                      <a href="/go" className="nav-sidebar-link">
                        Xolo Go
                      </a>
                    </li>
                    <li>
                      <a href="/leap" className="nav-sidebar-link">
                        Xolo Leap
                      </a>
                    </li>
                    <li>
                      <a href="/compare" className="nav-sidebar-link">
                        Compare products
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-sidebar-item ">
                  <a href="/pricing" className="nav-sidebar-link">
                    Pricing
                  </a>
                </li>
                <li className="nav-sidebar-item ">
                  <a href="/faq" className="nav-sidebar-link">
                    Help
                  </a>
                </li>
                <li className="nav-sidebar-item">
                  <a href="https://blog.xolo.io/" className="nav-sidebar-link">
                    Blog
                  </a>
                </li>
              </ul>

              <ul className="nav-sidebar-list nav-list-buttons">
                <li className="nav-item">
                  <a href="/signup" className="btn btn-red">
                    Sign up free
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/login" className="btn btn-transparent">
                    Log in
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
export default PageHeader;

import React from 'react';
import '../../assets/css/template.css';

function topnav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div className="container px-5">
        <a className="navbar-brand" href="#page-top">
          007
        </a>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#!">
                가상 벽화 그리기
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                원데이클래스
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                전문가 의뢰
              </a>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#!">
                Log In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default topnav;

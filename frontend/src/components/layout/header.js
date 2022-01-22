import React from 'react';
import '../../assets/css/template.css';

function Header() {
  return (
    <header className="masthead text-center text-white">
      <div className="masthead-content">
        <div className="container px-5">
          <h2 className="masthead-heading mb-0">낡고 지저분한 벽!</h2>
          <h1 className="masthead-subheading mb-0">보기 좋게 벽화를 그릴 수는 없을까?</h1>
          {/* <a className="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">
            Learn More
          </a> */}
        </div>
      </div>
      {/* <div className="bg-circle-1 bg-circle" />
      <div className="bg-circle-2 bg-circle" />
      <div className="bg-circle-3 bg-circle" />
      <div className="bg-circle-4 bg-circle" /> */}
    </header>
  );
}

export default Header;

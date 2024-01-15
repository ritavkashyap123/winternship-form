import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="box">
      <div className="head">Registration Successful.</div>

      <div className="head1">
        The further notification will be shared in the groups. Do join!!!
      </div>
      <ul>
        <li>
          <div className="head2">
            <b>Bech ke Dikhao Group </b>
            <br />
            <Link to="/" className="link">Link</Link>
          </div>
        </li>
        <li>
          <div className="head2">
            <b>Cipher Sprint Group</b>
            <br />
            <Link to="/" className="link">Link</Link>
          </div>
        </li>
        <li>
          <div className="head2">
            <b>Sales Event Group </b>
            <br />
            <Link to="/" className="link">Link</Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Links;

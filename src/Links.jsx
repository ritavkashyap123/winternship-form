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
            <b>Marketing Community </b>
            <br />
            <Link
              to="https://chat.whatsapp.com/FiqGTYOiP6E6l2YvTgMPqu"
              target="_blank"
              className="link"
            >
              https://chat.whatsapp.com/FiqGTYOiP6E6l2YvTgMPqu
            </Link>
          </div>
        </li>
        <li>
          <div className="head2">
            <b>Tech Community</b>
            <br />
            <Link
              to="https://chat.whatsapp.com/GujIjKuReBa3lftcKavdnY"
              target="_blank"
              className="link"
            >
              https://chat.whatsapp.com/GujIjKuReBa3lftcKavdnY
            </Link>
          </div>
        </li>
        <li>
          <div className="head2">
            <b>Design Community </b>
            <br />
            <Link
              to="https://chat.whatsapp.com/GI7bbHKXJrxCFu5EF8PY2V"
              target="_blank"
              className="link"
            >
              https://chat.whatsapp.com/GI7bbHKXJrxCFu5EF8PY2V
            </Link>
          </div>
        </li>
        <li>
          <div className="head2">
            <b>Sales Community </b>
            <br />
            <Link
              to="https://chat.whatsapp.com/EF54ldCCyI5Ggkwut6QRtb"
              target="_blank"
              className="link"
            >
              https://chat.whatsapp.com/EF54ldCCyI5Ggkwut6QRtb
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Links;

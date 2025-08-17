import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Link() {
  return (
    <div className="links">
      <a
        className="link-btn"
        href="https://github.com/BeatriceWN"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        className="link-btn"
        href="https://linkedin.com/in/beatricewambui"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}

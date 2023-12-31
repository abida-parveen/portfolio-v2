import React, { useEffect } from "react";
import { connect } from "react-redux";
import { clearErrors } from "../../../state-management/actions/errors";
import styles from "./header.module.css";
import HeaderParticles from "../HeaderParticles";
const Header = (props) => {
  const { clearErrors } = props;
  useEffect(() => {
    return () => {
      clearErrors();
    };
  }, []);
  return (
    <div className={`${styles.header}`}>
      <HeaderParticles />
      <div className={`container ${styles.header_container}`}>
        <div className={`${styles.header_leftCol}`}>
          <h5>MY NAME IS</h5>
          <h1>
            Abida{" "}
            <span style={{ color: "var(--side-theme-color)" }}>Parveen</span>
          </h1>
          <p>
            Creative front-end developer with more than{" "}
            {new Date().getFullYear() - new Date("2020").getFullYear()}+ years
            of experience in enterprise companies and startups. Proficient in
            JavaScript, Next, and React. Passionate about UI/UX
          </p>
        </div>
        {/* <div className={`${styles.header_rightCol}`}>
          <div>
            <div className={`${styles.header_rightColImg_bg}`}></div>

            <div className={`${styles.header_rightColImg_wrapper}`}></div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  errors: state.errors,
});
export default connect(mapStateToProps, { clearErrors })(Header);

import PropTypes from 'prop-types';
import styled from './Section.module.css';


const Section = ({ title, children }) => {
  return (
    <section className={styled.h2}>
      <h2 className={styled.h2} >{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;

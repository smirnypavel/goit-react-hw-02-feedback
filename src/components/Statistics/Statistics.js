import PropTypes from 'prop-types';
import { FcLike } from 'react-icons/fc';
import Notification from 'components/Notification';
import styled from './Statistic.module.css';

const Statistics = ({ good, neutral, bad, total, percent }) => {
  return (
    <>
      {total > 0 && (
        <ul className={styled.ul}>
          <li className={styled.li}>
            Good:{good} <FcLike />
          </li>
          <li className={styled.li}>Neutral:{neutral}</li>
          <li className={styled.li}>Bad:{bad}</li>
          <li className={styled.li}>Total:{total}</li>
          <li className={styled.li}>Percent:{percent}%</li>
        </ul>
      )}
      {total === 0 && <Notification message="No feadback given" />}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};

export default Statistics;

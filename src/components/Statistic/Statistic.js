import PropTypes from 'prop-types';
import Notification from 'components/Notification';

const Statistics = ({ good, neutral, bad, total, percent }) => {
  return (
    <>
      {total > 0 && (
        <ul>
          <li>Good:{good}</li>
          <li>Neutral:{neutral}</li>
          <li>Bad:{bad}</li>
          <li>Total:{total}</li>
          <li>Percent:{percent}</li>
        </ul>
      )}
      {total === 0 && <Notification messag="No feadback given" />}
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

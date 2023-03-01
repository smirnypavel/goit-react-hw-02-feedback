import PropTypes from 'prop-types';
import styled from './FeedbackOptions.module.css';

const FeedbackButton = ({ feedback, onLeaveFeedback }) => {
  return (
    <button type="button" data-feedback={feedback} onClick={onLeaveFeedback} className={styled.button}>
      {feedback}
    </button>
  );
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <FeedbackButton feedback={option} onLeaveFeedback={onLeaveFeedback} />
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;

import PropTypes from 'prop-types';

const FeadbackButton = ({ feadback, onLeaveFeadback }) => {
  return (
    <button type="button" data-feadback={feadback} onClick={onLeaveFeadback}>
      {feadback}
    </button>
  );
};

const FeadbackOptions = ({ options, onLeaveFeadback }) => {
  return options.map(option => (
    <FeadbackButton feadback={option} onLeaveFeadback={onLeaveFeadback} />
  ));
};

FeadbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeadback: PropTypes.func,
};

export default FeadbackOptions;

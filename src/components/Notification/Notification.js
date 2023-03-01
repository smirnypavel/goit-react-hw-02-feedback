import PropTypes from 'prop-types';
import styled from './Notification.module.css';

const Notification = ({ message }) => <p className={styled.p}>{message}</p>;
Notification.prototype = {
  message: PropTypes.string.isRequired,
};
export default Notification;

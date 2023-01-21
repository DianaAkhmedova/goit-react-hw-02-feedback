import PropTypes from 'prop-types';
import { NotificText } from './Notification.styled';

const Notification = ({ message }) => {
  return <NotificText>{message}</NotificText>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

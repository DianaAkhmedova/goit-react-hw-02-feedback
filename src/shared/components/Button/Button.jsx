import PropTypes from 'prop-types';
import { FeedbackButton } from './Button.styled';

const Button = ({ children, onClick, type }) => {
  return (
    <FeedbackButton onClick={onClick} type={type}>
      {children}
    </FeedbackButton>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
};

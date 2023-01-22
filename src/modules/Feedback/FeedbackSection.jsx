import PropTypes from 'prop-types';
import { FeedbackSection } from './FeedbackSection.styled';

const Feedback = ({ children }) => {
  return <FeedbackSection>{children}</FeedbackSection>;
};

export default Feedback;

Feedback.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

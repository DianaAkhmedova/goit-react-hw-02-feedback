import PropTypes from 'prop-types';

import { FeedbackBlock } from './Section.styled';

const Section = ({ children, title }) => {
  return (
    <FeedbackBlock>
      <h3>{title}</h3>
      {children}
    </FeedbackBlock>
  );
};

export default Section;

Section.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};

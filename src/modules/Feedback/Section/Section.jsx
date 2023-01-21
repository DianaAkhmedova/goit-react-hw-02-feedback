import PropTypes from 'prop-types';
import { FeedbackBlock, SectionTitle } from './Section.styled';

const Section = ({ children, title }) => {
  return (
    <FeedbackBlock>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </FeedbackBlock>
  );
};

export default Section;

Section.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};

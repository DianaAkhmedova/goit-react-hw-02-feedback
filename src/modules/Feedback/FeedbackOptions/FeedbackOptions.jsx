import PropTypes from 'prop-types';
import Button from 'shared/components/Button/Button';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const elements = options.map(option => (
    <Button onClick={() => onLeaveFeedback(option)} key={option} type="button">
      {option.replace(option[0], option[0].toUpperCase())}
    </Button>
  ));

  return <>{elements}</>;
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

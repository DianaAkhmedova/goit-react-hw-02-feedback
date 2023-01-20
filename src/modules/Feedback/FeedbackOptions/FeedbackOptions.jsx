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

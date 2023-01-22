import { Component } from 'react';
import Feedback from 'modules/Feedback/FeedbackSection';
import Section from 'modules/Feedback/Section/Section';
import FeedbackOptions from 'modules/Feedback/FeedbackOptions/FeedbackOptions';
import Statistics from 'modules/Feedback/Statistics/Statistics';
import Notification from 'modules/Feedback/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = feedbackName => {
    this.setState(prevState => {
      return { [feedbackName]: prevState[feedbackName] + 1 };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();

    if (!this.state.good) {
      return 0;
    }

    const positiveFeedbackPercentage = (
      (this.state.good / total) *
      100
    ).toFixed(0);

    return Number(positiveFeedbackPercentage);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <Feedback>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {!total ? (
          <Section>
            <Notification message="There is no feedback..." />
          </Section>
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        )}
      </Feedback>
    );
  }
}

export default App;

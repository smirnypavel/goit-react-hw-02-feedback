import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';

import { FEEDBACK_OPTIONS } from './data/data.js';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    this.setState((prevState)=> ({ [feedback]: prevState[feedback] + 1 }));
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positivePercent = () => {
    const { good } = this.state;
    const total = this.totalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.totalFeedback();
    const percent = this.positivePercent();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={FEEDBACK_OPTIONS}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percent={percent}
          />
        </Section>
      </>
    );
  }
}

export default App;

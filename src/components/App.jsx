import { Component } from 'react';
import FeadbackOptions from './FeadbackOptions';
import Section from './Section';
import Statistic from './Statistic';

import { FEADBACK_OPTIONS } from './data/data';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeadback = ({ target }) => {
    const { feadback } = target.dataset;
    this.setState(prevState => ({ [feadback]: prevState[feadback] + 1 }));
  };

  totalFeadback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positivePercent = () => {
    const { good } = this.state;
    const total = this.totalFeadback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.totalFeadback();
    const percent = this.positivePercent();
    return (
      <>
        <Section title="Please leave feedback">
          <FeadbackOptions
            options={FEADBACK_OPTIONS}
            onLeaveFeedback={this.handleFeadback}
          />
        </Section>
        <Section title="Statistics">
          <Statistic
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

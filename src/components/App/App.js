import React, { Component } from "react";
import Wrapper from "../Wrapper/Wrapper";
import Section from "../Section/Section";
import OptionsFeedBack from "../OptionsFeedback/OptionsFeedback";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((acc, el) => acc + el, 0);
    return total;
  };

  countPositiveFeedback = () => {
    const total = this.countTotalFeedback();
    const persantage = Math.round((100 / total) * this.state.good);
    return persantage;
  };

  addFeedback = (key) => {
    this.setState((prevState) => ({
      [key]: prevState[key] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <OptionsFeedBack
            options={Object.keys(this.state)}
            clickFeedback={this.addFeedback}
          ></OptionsFeedBack>
        </Section>

        <Section title="Statistic">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedback()}
            ></Statistics>
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Wrapper>
    );
  }
}

export default App;

import React, { useState } from 'react';
import { FeedbackSection } from './feedback.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function HendleBtn(event) {
    const value = event.target.value;

    switch (value) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        alert('Не могу записать такой ответ');
    }
  }

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    const positiveFeedback = (100 / countTotalFeedback()) * good;
    return Math.round(positiveFeedback) + '%';
  }

  return (
    <FeedbackSection>
      <Section title="Пожалуйста оставьте свой отзыв">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={HendleBtn}
        />
      </Section>

      <Section title="Статистика">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="Отзывы еще не собраны"></Notification>
        )}
      </Section>
    </FeedbackSection>
  );
}

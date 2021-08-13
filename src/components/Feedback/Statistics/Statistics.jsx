import React from 'react';
import { StatsItem } from '../feedback.styled';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul>
      <StatsItem>Хорошо: {good}</StatsItem>
      <StatsItem>Нормально: {neutral}</StatsItem>
      <StatsItem>Плохо: {bad}</StatsItem>
      <StatsItem>Всего отзывов: {total}</StatsItem>
      <StatsItem>Позитивных отзывов: {positivePercentage}</StatsItem>
    </ul>
  );
}

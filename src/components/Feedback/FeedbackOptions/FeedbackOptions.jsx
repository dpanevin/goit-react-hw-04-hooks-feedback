import React from 'react';
import { BtnWrapper, FeedbackBtn } from 'components/Feedback/feedback.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <BtnWrapper>
      {options.map(item => {
        return (
          <FeedbackBtn
            type="button"
            value={item}
            onClick={onLeaveFeedback}
            key={item}
          >
            {item}
          </FeedbackBtn>
        );
      })}
    </BtnWrapper>
  );
}

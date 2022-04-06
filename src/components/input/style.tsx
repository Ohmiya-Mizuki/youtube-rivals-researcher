import type { FontSizeType } from "../const/style";
import { COLOR_CODE, FONT_SIZE } from "../const/style";
import styled from "@emotion/styled";

export const LabelRoot = styled.label`
  display: inline-flex;
  align-items: center;
  background-color: ${COLOR_CODE.GRAY};
  border-radius: 4px;
  width: 80%;

  /** TODO : focus時の仕様未確定なので仮決め */
  &:focus-within {
    outline: 3px solid ${COLOR_CODE.WHITE};
  }
`;

export const InputField = styled.input<{
  fontSize: FontSizeType;
}>`
  padding: 10px;
  width: 100%;
  font-size: ${({ fontSize }) => `${FONT_SIZE[fontSize]}px`};

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  /** TODO : hover時の仕様未確定なので仮決め */
  &:hover {
    cursor: pointer;
  }

  /** TODO : フォーカス時の仕様未確定なので仮決め */
  &:focus {
    outline: none;
  }
`;

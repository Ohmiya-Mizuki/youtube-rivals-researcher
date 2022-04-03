import {Input as _Input} from '../input';
import styled from '@emotion/styled';

export const FormWrapper = styled.form`
  position: relative;
  display: flex;
  width: 500px;

  > button {
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    width: 20%;
  }
`;

export const Input = styled(_Input)`
  padding: 0 48px;
`;

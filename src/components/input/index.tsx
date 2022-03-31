import {forwardRef} from 'react';
import {InputField, LabelRoot} from './style';
import type {FontSizeType} from '../const/style';

export type InputProps = {
  /** コントロールの種別 */
  type: Exclude<JSX.IntrinsicElements['input']['type'], undefined>;
  /** コントロールの名称 */
  name: string;
  /** コントロールの値 */
  value: string;
  /** コントロール未入力時に表示するテキスト */
  placeholder?: string;
  /** コントロールの入力が可能な最大文字数 */
  maxLength?: number;
  /** コントロールの値変更時のイベントハンドラー */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** コントロール上で key 操作をした時のイベントハンドラー */
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  /** input に入力されるテキストの大きさ */
  fontSize?: FontSizeType;
  /** 非活性にするかどうか */
  isActive?: boolean;
  /** input tag のネイティブ属性 */
  inputProps?: JSX.IntrinsicElements['input'];
} & Omit<JSX.IntrinsicElements['label'], 'onChange' | 'onKeyDown'>;

/**
 * 汎用的な textbox コンポーネント
 * @param props {@link InputProps}
 * @param ref {@link HTMLLabelElement}
 */
export const Input = forwardRef<HTMLLabelElement, InputProps>(
    (
        {
          type,
          name,
          value,
          maxLength,
          placeholder,
          onChange,
          onKeyDown,
          fontSize = 'M',
          isActive = true,
          inputProps,
          ...props
        },
        ref,
    ) => {
      return (
        <LabelRoot ref={ref} {...props}>
          <InputField
            type={type}
            name={name}
            value={value}
            maxLength={maxLength}
            placeholder={placeholder}
            onChange={onChange}
            onKeyDown={onKeyDown}
            fontSize={fontSize}
            disabled={!isActive}
            {...inputProps}
          />
        </LabelRoot>
      );
    },
);

Input.displayName = 'Input';

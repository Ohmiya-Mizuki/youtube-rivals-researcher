/* eslint-disable max-len */
import {ChangeEvent} from 'react';
import {Input} from '../input';
import {FormWrapper} from './style';

type SearchFormProps = {
  /** 検索キーワード */
  keyword: string;
  /** 検索用inputのプレイスホルダー */
  placeholder: HTMLInputElement['placeholder'];
  /** inputの変更処理 */
  onChangeInputVal: (e: ChangeEvent<HTMLInputElement>) => void;
} & JSX.IntrinsicElements['form']

export const SearchForm = ( {keyword, placeholder, onChangeInputVal}: SearchFormProps ) => {
  return (
    <FormWrapper>
      <Input
        name="keyword"
        type="text"
        placeholder={placeholder}
        value={keyword}
        onChange={onChangeInputVal}
        inputProps={{
          'aria-label': '検索フォーム',
        }}
      />
      {/* TODO: 押下時に検索するようにする？ 仕様が固まり次第見直し */}
      <button type="submit" aria-label="検索ボタン">
        検索
      </button>
    </FormWrapper>
  );
};

/**
 * @author William Velazquez <info@williamvelazquez.com>
 */
import React from 'react';

import { DivCheckbox, InputCheckbox, LabelCheckbox, SpanButtonCheckbox } from './styles';

// eslint-disable-next-line import/prefer-default-export
export const ToggleSwitch = (props) => {
  const { id, disabled = false, isChecked, handleToggle, trueColor, falseColor } = props;
  return (
    <DivCheckbox>
      <InputCheckbox
        type='checkbox'
        id={id || null}
        disabled={disabled}
        checked={isChecked}
        onChange={disabled ? null : handleToggle}
      />
      <LabelCheckbox
        disabled={disabled}
        isChecked={isChecked}
        trueColor={trueColor}
        falseColor={falseColor}
        htmlFor={id || null}
      >
        <SpanButtonCheckbox />
      </LabelCheckbox>
    </DivCheckbox>
  );
};
// export default ToggleSwitch;

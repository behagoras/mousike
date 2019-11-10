/**
 * @author William Velazquez <info@williamvelazquez.com>
 */
import React from 'react';
import { DivElementGroup, LabelElementGroup, InputElementGroup, SmallElementGroup } from './styles';

// eslint-disable-next-line import/prefer-default-export
export const LabelInput = (props) => {
  const { id, label, validate, value, type, placeholder, autocomplete, handleChange, helpText } = props;
  return (
    <DivElementGroup>
      {
        label && (
          <LabelElementGroup htmlFor={id || null}>
            {label}
          </LabelElementGroup>
        )
      }
      <InputElementGroup
        id={id || null}
        name={id || null}
        validate={validate || false}
        // className={validate?"form-control form-control-error":"form-control"}
        value={value || ''}
        type={type || 'text'}
        placeholder={placeholder || ''}
        autoComplete={autocomplete || 'off'}
        onChange={handleChange && handleChange.bind(this)}
        required
      />
      {
        validate && helpText &&
        // className="form-text form-text-error"
        <SmallElementGroup validate>{helpText}</SmallElementGroup>
      }
    </DivElementGroup>
  );
};
// export default LabelInput;

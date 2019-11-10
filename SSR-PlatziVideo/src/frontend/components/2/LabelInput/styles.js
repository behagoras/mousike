/**
 * @author William Velazquez <info@williamvelazquez.com>
 */
import styled, { css } from 'styled-components';

export const SmallElementGroup = styled.small`
  margin-bottom: 10px;
  ${(props) => props.validate &&
    css`
      color: #D0021B;
    `
}
`;

export const InputElementGroup = styled.input`
  width: 100%;
  height: 39px;
  padding: 6px 12px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  font-size: 18px;
  line-height: 1.428571429;
  color: #555;
  display: block;
  background-image: none;
  font-family: inherit;
  margin: 0;

  ${(props) => props.validate &&
    css`
      border-color: #D0021B;
      box-shadow:0 0 4px red; 
      -moz-box-shadow: 0 0 4px red; 
      -webkit-box-shadow:0 0 4px red; 
    `
}
`;

export const LabelElementGroup = styled.label`
  max-width: 100%;
  font-weight: 700;
  margin-bottom: 5px;
  display: inline-block;
`;

export const DivElementGroup = styled.div`
  margin-bottom: 15px;
`;

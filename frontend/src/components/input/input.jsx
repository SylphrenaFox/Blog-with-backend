import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputContainer = forwardRef(({ className, width, ...props }, ref) => {
	return <input className={className} {...props} ref={ref} />;
});

export const Input = styled(InputContainer)`
	width: ${({ width = '100%' }) => width}
	height: 40px;
	padding: 12px 15px;
  	margin: 10px 0;
  	border: 1px solid #ccc;
  	border-radius: 5px;
  	font-size: 16px;
  	transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    outline: none;
  }

  &::placeholder {
    color: #aaa;
    opacity: 1;
  }
`;

Input.propTypes = {
	width: PropTypes.string,
};

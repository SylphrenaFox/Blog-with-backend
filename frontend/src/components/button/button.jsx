import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonContainer = ({ children, className, width = '100%', ...props }) => {
	return (
		<button className={className} style={{ width }} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	margin: 10px 0 5px 0px;
	padding: 7px 10px 5px 10px;
	border: none;
	border-radius: 4px;
	background-color: #e0e0e0;
	transition:
		background-color 0.3s,
		transform 0.2s;

	&:hover {
		background-color: #d5d5d5;
		transform: translateY(-2px);
		cursor: pointer;
	}

	&:disabled {
		background-color: #f0f0f0;
		color: #ccc;
		border: 1px solid #ccc;
		cursor: not-allowed;

		& i {
			color: #ccc;
		}
	}
`;

Button.propTypes = {
	children: PropTypes.node.isRequired,
	width: PropTypes.string,
};

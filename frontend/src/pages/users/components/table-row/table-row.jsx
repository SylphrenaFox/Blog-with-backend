import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableRowContainer = ({ className, children }) => (
	<div className={className}>{children}</div>
);
export const TableRow = styled(TableRowContainer)`
	display: flex;
	align-items: center;
	border-bottom: 1px solid #e9ecef;
	padding: 12px 0;
	transition: background-color 0.2s ease;

	&:hover {
		background-color: #f8f9fa;
	}

	& > div {
		display: flex;
		padding: 0 10px;
		align-items: center;
	}

	& .login-column {
		width: 172px;
		font-weight: 500;
	}

	& .registered-at-column {
		width: 213px;
	}

	.role-column {
		width: auto;
	}
`;

TableRow.propTypes = {
	children: PropTypes.node.isRequired,
};

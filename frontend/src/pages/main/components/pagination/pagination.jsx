import { Icon, Button } from '../../../../components';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PaginationContainer = ({ className, page, setPage, lastPage }) => {
	return (
		<div className={className}>
			<Button disabled={page === 1} onClick={() => setPage(1)}>
				<Icon id="fa-angle-double-left" />
			</Button>
			<Button disabled={page === 1} onClick={() => setPage(page - 1)}>
				<Icon id="fa-angle-left" />
			</Button>
			<div className="current-page">{page}</div>
			<Button onClick={() => setPage(page + 1)} disabled={page === lastPage}>
				<Icon id="fa-angle-right" />
			</Button>
			<Button onClick={() => setPage(lastPage)} disabled={page === lastPage}>
				<Icon id="fa-angle-double-right" />
			</Button>
		</div>
	);
};

export const Pagination = styled(PaginationContainer)`
	display: flex;
	padding: 0 33px;

	& button {
		margin: 0 5px;
		padding: 8px 12px;
		height: 30px;
	}

	& .current-page {
		width: 100%;
		height: 30px;
		border: 1px solid #ccc;
		border-radius: 4px;
		text-align: center;
		line-height: 30px;
		background-color: #ffffff;
		color: #333;
		font-size: 18px;
		font-weight: bold;
		margin: 0 10px;
	}
`;

Pagination.propTypes = {
	page: PropTypes.number.isRequired,
	lastPage: PropTypes.number.isRequired,
	setPage: PropTypes.func.isRequired,
};

import { Icon, Input } from '../../../../components';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchContainer = ({ className, onChange, searchPhrase }) => {
	return (
		<div className={className}>
			<Input onChange={onChange} value={searchPhrase} />
			<Icon id="fa-search" size="18px" margin="0 7px 0 0" inactive={true} />
		</div>
	);
};

export const Search = styled(SearchContainer)`
	display: flex;
	position: relative;
	margin: 40px auto 0;
	width: 340px;
	height: 40px;
	border-radius: 20px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);

	& > input {
		padding: 10px 15px;
		margin: 0;
		width: 100%;
		text-align: center;
		box-sizing: border-box;
		border: none;
		border-radius: 20px;
		font-size: 16px;
		color: #333;
		outline: none;
	}

	& > div {
		display: flex;
		align-items: center;
		position: absolute;
		top: 50%;
		right: 10px;
		transform: translateY(-50%);
		font-size: 18px;
		color: #888;
	}

	&:focus-within {
		box-shadow: 0 0 8px rgba(0, 153, 255, 0.5);
	}
`;

Search.propTypes = {
	searchPhrase: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

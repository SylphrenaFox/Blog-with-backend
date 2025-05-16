import { useDispatch, useSelector } from 'react-redux';
import { removeCommentAsync } from '../../../../../actions';
import { Icon } from '../../../../../components';
import { openModal, CLOSE_MODAL } from '../../../../../actions';
import { selectUserRole } from '../../../../../selectors';
import { ROLE } from '../../../../../constants';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentContainer = ({ className, postId, id, author, content, publishedAt }) => {
	const dispatch = useDispatch();
	const userRole = useSelector(selectUserRole);

	const onCommentRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить комментарий?',
				onConfirm: () => {
					dispatch(removeCommentAsync(postId, id));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	const isAdminOrModerator = [ROLE.ADMIN, ROLE.MODERATOR].includes(userRole);
	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						{author}
						<Icon
							id="fa-user-circle-o"
							size="18px"
							margin="0 0 0 10px"
							inactive={true}
						/>
					</div>
					<div className="published-at">
						<Icon
							id="fa-calendar-o"
							size="18px"
							margin="-3px 7px 0 0"
							inactive={true}
						/>
						{publishedAt}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			{isAdminOrModerator && (
				<Icon
					id="fa-trash-o"
					size="20px"
					margin="-4px 0 0 10px"
					onClick={() => onCommentRemove(id)}
				/>
			)}
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	margin-top: 15px;
	background: white;
	border-radius: 8px;
	padding: 15px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
	border: 1px solid #e9ecef;
	border-radius: 6px;

	& .comment {
		width: 100%;
	}

	& .information-panel {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
		padding-bottom: 10px;
		border-bottom: 1px solid #e9ecef;
	}

	& .author {
		display: flex;
		align-items: center;
		font-weight: 500;
		color: #212529;
	}

	& .published-at {
		display: flex;
		align-items: center;
		gap: 5px;
		color: #6c757d;
		font-size: 14px;
	}

	& .comment-text {
		margin-top: 10px;
		color: #212529;
		line-height: 1.5;
	}
`;

Comment.propTypes = {
	postId: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	author: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
};

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Comment } from './components';
import { Icon } from '../../../../components';
import { selectUserRole } from '../../../../selectors';
import { addCommentAsync } from '../../../../actions/add-comment-async';
import { ROLE } from '../../../../constants/role.js';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PROP_TYPE } from '../../../../constants/prop-type.js';

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('');
	const dispatch = useDispatch();
	const userRole = useSelector(selectUserRole);

	const OnNewCommentAdd = (postId, content) => {
		dispatch(addCommentAsync(postId, content));
		setNewComment('');
	};

	const isGuest = userRole === ROLE.GUEST;

	return (
		<div className={className}>
			{!isGuest && (
				<div className="new-comment">
					<textarea
						name="comment"
						value={newComment}
						placeholder="Комментарий..."
						onChange={({ target }) => setNewComment(target.value)}
					></textarea>
					<Icon
						id="fa-paper-plane-o"
						size="18px"
						margin="0 0 0 10px"
						onClick={() => OnNewCommentAdd(postId, newComment)}
					/>
				</div>
			)}
			<div className="comments">
				{comments.map(({ id, author, content, publishedAt }) => (
					<Comment
						key={id}
						postId={postId}
						id={id}
						author={author}
						content={content}
						publishedAt={publishedAt}
					/>
				))}
			</div>
		</div>
	);
};

export const Comments = styled(CommentsContainer)`
	width: 580px;
	margin: 20px auto;
	padding: 20px;

	.new-comment {
		display: flex;
		width: 100%;
		background: white;
		border-radius: 8px;
		width: 570px;
	}

	.new-comment textarea {
		resize: none;
		width: 100%;
		height: 120px;
		font-size: 16px;
		border: 1px solid #e9ecef;
		border-radius: 6px;
		padding: 10px;
		background: white;
		transition: all 0.3s ease;

		&:focus {
			outline: none;
			border-color: #0d6efd;
			box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.1);
		}
	}
`;
Comments.propTypes = {
	comments: PropTypes.arrayOf(PROP_TYPE.COMMENT).isRequired,
	postId: PropTypes.string.isRequired,
};

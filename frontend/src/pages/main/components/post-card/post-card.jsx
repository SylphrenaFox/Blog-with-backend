import { Link } from 'react-router-dom';
import { Icon } from '../../../../components';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostCardContainer = ({
	className,
	id,
	title,
	imageUrl,
	publishedAt,
	commentsCount,
}) => {
	return (
		<div className={className}>
			<Link to={`/post/${id}`}>
				<img src={imageUrl} alt={title} />
				<div className="post-card-footer">
					<h3>{title}</h3>
					<div className="post-card-info">
						<div className="published-at">
							<Icon
								id="fa-calendar-o"
								size="18px"
								margin="0 7px 0 0"
								inactive={true}
							/>
							{publishedAt}
						</div>
						<div className="comments-count">
							<Icon
								id="fa-comment-o"
								size="18px"
								margin="0 7px 0 0"
								inactive={true}
							/>
							{commentsCount}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export const PostCard = styled(PostCardContainer)`
	border-radius: 10px;
	width: 280px;
	display: flex;
	flex-direction: column;
	margin: 20px;
	overflow: hidden;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	transition:
		transform 0.3s ease,
		box-shadow 0.3s ease;

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
	}

	& img {
		display: block;
		width: 100%;
		transition: transform 0.3s ease;

		&:hover {
			transform: scale(1.05);
		}
	}

	& h3 {
		margin: 5px 0px 15px 0;
		padding: 0;
		color: rgb(0, 0, 0);
		font-size: 18px;
		line-height: 1.4;
		font-weight: 600;
		height: 72px;
		text-align: center;
		overflow: hidden;
	}

	& .post-card-footer {
		padding: 15px;
		background: #ffffff;
	}

	& .post-card-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 0;
		border-top: 1px solid #e9ecef;
	}

	& .published-at,
	& .comments-count {
		display: flex;
		align-items: center;
		color: #6c757d;
		font-size: 14px;
	}

	& .published-at,
	& .comments-count {
		margin-right: 8px;
	}
`;

PostCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	commentsCount: PropTypes.number.isRequired,
};

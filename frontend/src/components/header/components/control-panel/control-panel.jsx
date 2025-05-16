import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Icon, Button } from '../../../../components';
import { ROLE } from '../../../../constants';
import { selectUserRole, selectUserLogin } from '../../../../selectors';
import { logout } from '../../../../actions';
import { checkAccess } from '../../../../utils';
import styled from 'styled-components';

const RightAligned = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 150px;
`;

const UserName = styled.div`
	font-size: 18px;
	font-weight: bold;
	height: 30px;
	margin: 10px 0 5px 0px;
	display: flex;
	align-items: center;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);

	const onLogout = () => {
		dispatch(logout());
		sessionStorage.removeItem('userData');
	};

	const isAdmin = checkAccess([ROLE.ADMIN], roleId);

	return (
		<div className={className}>
			<RightAligned>
				{roleId === ROLE.GUEST ? (
					<Button width="110px">
						<Link to="/login">Войти</Link>
					</Button>
				) : (
					<>
						<UserName>{login}</UserName>
						<Icon id="fa-sign-out" margin="0 0 0 10px" onClick={onLogout} />
					</>
				)}
			</RightAligned>
			<RightAligned>
				<Icon id="fa-backward" margin="0 0 0 0px" onClick={() => navigate(-1)} />
				{isAdmin && (
					<>
						<Link to="/post">
							<Icon id="fa-file-text-o" margin="0 0 0 15px" />
						</Link>
						<Link to="/users">
							<Icon id="fa-users" margin="0 0 0 15px" />
						</Link>
					</>
				)}
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

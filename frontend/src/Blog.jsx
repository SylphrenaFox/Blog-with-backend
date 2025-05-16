import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Error, Header, Footer, Modal } from './components';
import { Authorization, Main, Registration, Users, Post } from './pages';
import { setUser } from './actions';
import { ERROR } from './constants';
import styled from 'styled-components';

const AppColum = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	position: relative;
	width: 1000px;
	min-height: 100vh;
	background-color: white;
	margin: 0 auto;
`;
const Page = styled.div`
	padding: 120px 0 20px;
	flex: 1;
	display: flex;
	justify-content: space-between;
`;

export const Blog = () => {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');

		if (!currentUserDataJSON) {
			return;
		}
		const currentUserData = JSON.parse(currentUserDataJSON);

		dispatch(setUser({ ...currentUserData, roleId: Number(currentUserData.roleId) }));
	}, [dispatch]);

	return (
		<AppColum>
			<Header />
			<Page>
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/login" element={<Authorization />}></Route>
					<Route path="/register" element={<Registration />}></Route>
					<Route path="/users" element={<Users />}></Route>
					<Route path="/post" element={<Post />}></Route>
					<Route path="/post/:id" element={<Post />}></Route>
					<Route path="/post/:id/edit" element={<Post />}></Route>
					<Route
						path="*"
						element={<Error error={ERROR.PAGE_NOT_EXIST} />}
					></Route>
				</Routes>
			</Page>
			<Footer />
			<Modal />
		</AppColum>
	);
};

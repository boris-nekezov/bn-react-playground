import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';

import reportWebVitals from './reportWebVitals';

import './index.css';
import Posts from './pages/Posts';
import Comments from './pages/Comments';
import Albums from './pages/Albums';
import Photos from './pages/Photos';
import Todos from './pages/Todos';
import Users from './pages/Users';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />}>
						<Route path="posts" element={<Posts />} />
						<Route path="comments" element={<Comments />} />
						<Route path="albums" element={<Albums />} />
						<Route path="photos" element={<Photos />} />
						<Route path="todos" element={<Todos />} />
						<Route path="users" element={<Users />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

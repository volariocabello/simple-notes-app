import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Account from "./pages/Account";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./components/Protected";
import "antd/dist/reset.css";
import NavbarTwo from "./components/NavbarTwo";
import Listview from "./pages/Listview";

function App() {
	return (
		<div className='App'>
			<AuthContextProvider>
				<NavbarTwo />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/signin' element={<Signin />} />
					<Route path='/listview' element={<Listview />} />
					<Route
						path='/account'
						element={
							<Protected>
								<Account />
							</Protected>
						}
					/>
				</Routes>
			</AuthContextProvider>
		</div>
	);
}

export default App;

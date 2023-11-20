import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/Login.jsx"
import "./index.css"
import Dashboard from "./pages/Dashboard.jsx"
import Providers from "./utils/Providers.jsx"
import CreateUser from "./pages/CreateUser.jsx"
import CreateChangeRequest from "./pages/CreateChangeRequestPage.jsx"
import ChangeRequest from "./pages/ChangeRequestPage.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Providers>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/createuser" element={<CreateUser />} />
					<Route path="/change-request/:id" element={<ChangeRequest />} />
					<Route path="/change-request" element={<CreateChangeRequest />} />
				</Routes>
			</BrowserRouter>
		</Providers>
	</React.StrictMode>
)

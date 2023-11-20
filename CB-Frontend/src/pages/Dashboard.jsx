import React, {useEffect, useState} from "react"
import { useQuery } from "@tanstack/react-query"
import {Link, useNavigate} from "react-router-dom"
import apiFetch from "../utils/apiFetch"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)

function Dashboard() {
	const { data, isError, isLoading } = useQuery({
		queryKey: ["dashboard"],
		queryFn: async () => {
			const res = await apiFetch("GET", "/api/v1/change")
			console.log(res.data)
			return res.data.content
		},
	})
	const navigate = useNavigate()

	const handleCreateChangeRequest = () => {
		navigate('/changerequest')
	}

	if (isLoading) {
		//https://flowbite.com/docs/components/spinner/
		return (
			<div>
				<div className="flex justify-center place-items-center w-44 h-44">
					<div role="status">
						<svg
							aria-hidden="true"
							className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
							viewBox="0 0 100 101"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
								fill="currentColor"
							/>
							<path
								d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
								fill="currentFill"
							/>
						</svg>
						<span className="sr-only">Loading...</span>
					</div>
				</div>
			</div>
		)
	}

	return (
		//	https://flowbite.com/docs/components/tables/
		<div className="">
			<NavBar />
			<div className="flex flex-col m-10 sm: mx-4 opacity-75">
				<div className="m-6 p-4 relative overflow-x-auto shadow-md sm:rounded-lg bg-slate-300">
					<div className="inline-block min-w-full">
						<div className="overflow-hidden">
							<table className="w-full text-sm text-left text-gray-50">
								<thead className="text-xs text-gray-700 uppercase bg-gray-50 t">
									<tr className=" transition duration-200 ease-in-out">
										<th scope="col" className="px-6 py-3 hover:bg-neutral-300 transition duration-300 ease-in-out">
											Id
										</th>
										<th scope="col" className="px-6 py-3 hover:bg-neutral-300 transition duration-300 ease-in-out">
											Application Id
										</th>
										<th scope="col" className="px-6 py-3 hover:bg-neutral-300 transition duration-300 ease-in-out">
											Change Type
										</th>
										<th scope="col" className="px-6 py-3 hover:bg-neutral-300 transition duration-300 ease-in-out">
											Date
										</th>
									</tr>
								</thead>
								<tbody className="bg-white">
									{data.map(change => (
										<tr className="bg-white" key={change.id}>
											<th
												scope="row"
												className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
												{change.id}
											</th>
											<td
												className="px-6 py-4			console.log(res.data)">
												{change.applicationId}
											</td>
											<td className="px-6 py-4 ">{change.changeType}</td>
											<td className="px-6 py-4 ">
												{dayjs(change.dateCreated).format("DD/MM/YYYY")}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}


function NavBar() {
	const [showNav, setShowNav] = useState(false);
	const toggleNav = () => {
		setShowNav(!showNav);
	};
	const [innerWidth, setInnerWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setInnerWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []); // Run only on mount and unmount


	return (
		<div>
			<nav className={`relative ${innerWidth < 768 ? 'bg-green-800' : 'bg-slate-200'}`}>
				<div className="max-w-screen flex flex-wrap items-center p-2 relative">
					{/* Displayed on screens smaller than 768px */}
					<a className={`${innerWidth < 768 ? 'flex' : 'hidden'} items-center mr-auto`}>
						<img
							src="whitelogo.svg"
							className="h-12 mr-3"
							alt="Commerce Bank Logo"
						/>
					</a>

					{/* Displayed on screens 768px and larger */}
					<a className={`${innerWidth >= 768 ? 'flex' : 'hidden'} items-center mr-auto`}>
						<img
							src="greenlogo.png"
							className="h-12 mr-3"
							alt="Commerce Bank Logo"
						/>
					</a>

					<div className="flex">
						{/* "Submit Request" link */}
						<a
							href="http://localhost:5173/changerequest"
							className={`${innerWidth >= 768 ? 'flex' : 'hidden'} items-center mr-4 py-2 pl-3 pr-4 text-black font-bold bg-slate-100 hover:bg-slate-200 transition duration-300 ease-in-out`}
							aria-current="page"
						>
							Submit Request
						</a>

						{/* "Dashboard" link */}
						<a
							href="http://localhost:5173/dashboard#"
							className={`${innerWidth >= 768 ? 'flex' : 'hidden'} items-center mr-4 py-2 pl-3 pr-4 text-black font-bold bg-slate-200 hover:bg-slate-200`}
							aria-current="page"
						>
							Dashboard
						</a>

						<button
							onClick={() => {
								localStorage.removeItem("token");
								navigate("/");
							}}
							className={`${innerWidth >= 768 ? 'text-black' : 'text-white'} block py-2 px-4 border-x-2 border-slate-500 bg-transparent hover:bg-slate-300 transition duration-300 ease-in-out`}
							aria-current="page"
						>
							Sign Out
						</button>

						<button
							onClick={toggleNav}
							className="inline-flex items-center m-2 w-12 h-12 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 dark:text-gray-400"
							aria-controls="navbar-default"
							aria-expanded={showNav}
						>
							<span className="sr-only">Open main menu</span>
							<svg
								className="w-5 h-5"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 17 14"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M1 1h15M1 7h15M1 13h15"
								/>
							</svg>
						</button>
					</div>

					{/* The responsive navigation controlled by the showNav state */}
					{showNav && (
						<div
							className={`${innerWidth < 768 ? 'absolute block' : 'hidden'} max-w-screen top-full left-0 right-0 bg-white border border-gray-100 rounded-md shadow-md mt-2 z-10`}
							id="navbar-dropdown"
						>
							<ul className="font-medium md:text-lg flex flex-col p-2 space-y-2">
								<li>
									<Link
										to="/createchange"
										className={`${innerWidth >= 768 ? 'bg-transparent' : 'bg-transparent hover:bg-slate-200'} block w-full py-2 pl-3 pr-4 text-black font-bold transition duration-300 ease-in-out"`}
										aria-current="page"
									>
										Submit Request
									</Link>
								</li>
								<li>
									<Link
										to="/dashboard"
										className="block w-full py-2 pl-3 pr-4 text-black font-bold bg-slate-200 hover:bg-slate-200"
										aria-current="page"
									>
										Dashboard
									</Link>
								</li>
							</ul>
						</div>
					)}
				</div>
			</nav>
		</div>
	);
}




	export default Dashboard

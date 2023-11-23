import React, { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Link, useNavigate } from "react-router-dom"
import NavBar from "@/components/NavBar.jsx"
import apiFetch from "../utils/apiFetch"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import { useMutation, useQueryClient } from "react-query"

dayjs.extend(relativeTime)

function Dashboard() {
	const [apiEndpoint, setApiEndpoint] = useState("/api/v1/change")

	const { data, isError, isLoading } = useQuery({
		queryKey: ["changeRequest"],
		queryFn: async () => {
			const res = await apiFetch("GET", apiEndpoint)
			console.log(res.data)
			return res.data.content
		},
	})

	const queryClient = useQueryClient()

	const changeTab = async () => {
		queryClient.invalidateQueries({ queryKey: ["changeRequest"] })
	}

	if (isError) {
		return (
			<div>
				<NavBar />
				<p> There is an error </p>
			</div>
		)
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
		<div>
			<NavBar />
			<div className="flex flex-col m-10 sm: mx-4 opacity-75">
				<div className="m-6 p-4 relative overflow-x-auto shadow-md sm:rounded-lg bg-slate-300">
					<div className="flex items-center pb-4 gap-5">
						<button
							className="text-white p-2 bg-gray-400"
							onClick={() => {
								setApiEndpoint("/api/v1/change")
							}}>
							Application
						</button>
						<button
							className="text-white p-2 bg-gray-400"
							onClick={() => {
								setApiEndpoint("/api/v1/change")
							}}>
							Department
						</button>
						<button className="text-white p-2 bg-gray-400"> Complete </button>
						<button
							className="text-white p-2 bg-gray-400"
							onClick={() => {
								setApiEndpoint(
									"/api/v1/change?page=0&size=5&showAuthorUsername=false&state=FROZEN"
								)
								changeTab()
							}}>
							Frozen
						</button>
					</div>

					<div className="inline-block min-w-full">
						<div className="overflow-hidden">
							<table className="w-full text-sm text-left text-gray-50">
								<thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
									<tr className=" transition duration-200 ease-in-out">
										<th
											scope="col"
											className="px-6 py-3 hover:bg-neutral-300 transition duration-300 ease-in-out">
											Id
										</th>
										<th
											scope="col"
											className="px-6 py-3 hover:bg-neutral-300 transition duration-300 ease-in-out">
											Application Id
										</th>
										<th
											scope="col"
											className="px-6 py-3 hover:bg-neutral-300 transition duration-300 ease-in-out">
											Change Type
										</th>
										<th
											scope="col"
											className="px-6 py-3 hover:bg-neutral-300 transition duration-300 ease-in-out">
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
											<td className="px-6 py-4 text-black">
												{change.applicationId}
											</td>
											<td className="px-6 py-4  text-black">
												{change.changeType}
											</td>
											<td className="px-6 py-4 text-black ">
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

export default Dashboard

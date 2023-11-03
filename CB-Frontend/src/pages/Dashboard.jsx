import { useQuery } from "@tanstack/react-query"
import apiFetch from "../utils/apiFetch"

function Dashboard() {
	const {} = useQuery({
		queryKey: ["dashboard"],
		queryFn: async () => {
			apiFetch("POST", "/change")
		},
	})

	return (
		<div>
			<div className="bg-emerald-700 p-4">
				<h1 className="text-4xl text-white text-center">Dashboard</h1>
			</div>
		</div>
	)
}

export default Dashboard

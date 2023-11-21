import * as yup from "yup"
import dayjs from "dayjs"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import NavBar from "../components/NavBar"

function CreateChangeRequest() {
	const schema = yup.object().shape({
		authorId: yup.number().required('Author ID is required'),
		changeType: yup.string().oneOf(['PLANNED', 'UNPLANNED']).required('Change type is required'),
		applicationId: yup.number().required('Application ID is required'),
		title: yup.string().required("Title is required"),

		dateCreated: yup.date().required('Date created is required'),
		dateUpdated: yup.date().required('Date updated is required'),
		timeWindowStart: yup
			.mixed()
			.test('combinedDateTime', 'Scheduled Start Date-Time is required', function (value) {
				const { date, time } = this.parent;

				// Combine date and time into a single date-time string
				const combinedDateTime = new Date(`${date} ${time}`);

				// Check if the combined value is a valid date-time
				return !isNaN(combinedDateTime);
			})
			.required('Scheduled Start Date-Time is required'),

		// Combined field using custom validation for timeWindowEnd
		timeWindowEnd: yup
			.mixed()
			.test('combinedDateTime', 'Scheduled End Date-Time is required', function (value) {
				const { date, time } = this.parent;

				// Combine date and time into a single date-time string
				const combinedDateTime = new Date(`${date} ${time}`);

				// Check if the combined value is a valid date-time
				return !isNaN(combinedDateTime);
			})
			.required('Scheduled End Date-Time is required'),


		description: yup.string().required('Description is required'),
		reason: yup.string().required('Reason is required'),
		backoutPlan: yup.string().required("Backout plan is required"),
		timeToRevert: yup.number().required('Time to revert is required'),

		approveOrDeny: yup.string().oneOf(['APPROVE', 'DENY']).required('Approval status is required'),
		state: yup.string().required('State is required'),
		roles: yup.object().shape({
			name: yup.string().required('Role name is required'),
		}),
		riskLevel: yup.string().oneOf(['LOW', 'MEDIUM', 'HIGH']).required('Risk level is required'),
		implementer: yup.string().required('Implementer is required'),
	});

	const {
		register,
		handleSubmit,
		formState: { isValid },
	} = useForm({
		resolver: yupResolver(schema),
	})

	const onSubmit = data => {
		data.dataCreated = dayjs().format();
		console.log(data);

		const createChangeRequest = async () => {

		};
		createChangeRequest();
	}

	return (
		<div className="flex-wrap w-full">
			<NavBar />
			<div className="p-4 rounded-full">
				<div>
					<form onSubmit={handleSubmit(onSubmit)} className="Form px-4">
						<div className="changeType flex items-center p-2">
							<label className="m-2">Change Type:</label>
							<select
								id="ChangeType"
								required
								{...register("changeType", { required: true })}
								className="bg-slate-200 border border-gray-300 text-gray-900 font-medium rounded-lg p-2"
								placeholder="Select Change Type">
								<option disabled value="">
									Select Change Type
								</option>
								<option value="PLANNED">
									Planned
								</option>
								<option value="UNPLANNED">
									Unplanned
								</option>
							</select>
						</div>

						<div className="title flex items-center p-2">
							<label className="m-2">Title:</label>
							<input
								type="text"
								autoComplete="off"
								required
								{...register("title", { required: true })}
								className="flex-box m-2 block p-2 text-gray-900 border-2 border-gray-400 rounded-lg bg-gray-50 outline-none sm:text-md"
								placeholder="Enter Title"
							/>
						</div>

						<div className="scheduleDATE/TIME p-2">
							<div className="start flex items-center p-2">
								<label className="m-2">Scheduled Start Date/Time:</label>
								<input
									type="datetime-local"
									required
									{...register("timeWindowStart", { required: true })}
									className="flex-box m-2 block p-2 text-gray-900 border-2 border-gray-400 rounded-lg bg-gray-50 outline-none sm:text-md"

								/>
							</div>
							<div className="end flex items-center p-2">
								<label className="m-2">Scheduled End Date/Time:</label>
								<input
									type="datetime-local"
									required
									{...register("timeWindowEnd", { required: true })}
									className="flex-box m-2 block p-2 text-gray-900 border-2 border-gray-400 rounded-lg bg-gray-50 outline-none sm:text-md"
								/>
							</div>
						</div>

						<div className="description flex-box p-2">
							<h1 className="text-2xl ml-2">Detailed Event Description:</h1>
							<div className="description">
								<label className="m-2">1. What is changing and why?</label>
								<textarea
									className="flex-box resize-none m-2 w-full block p-2 text-gray-900 border-2 border-gray-400 rounded-lg bg-gray-50 outline-none sm:text-md"
									required
									{...register("description", { required: true })}
								/>
							</div>
							<div className="reason">
								<label className="m-2">2. Why is change needed?</label>
								<textarea
									className="flex-box resize-none m-2 w-full block p-2 text-gray-900 border-2 border-gray-400 rounded-lg bg-gray-50 outline-none sm:text-md"
									required
									{...register("reason", { required: true })}
								/>
							</div>
							<div>
								<label className="m-2">Backout Plan:</label>
								<textarea
									className="flex-box resize-none m-2 w-full block p-2 text-gray-900 border-2 border-gray-400 rounded-lg bg-gray-50 outline-none sm:text-md"
									required
									{...register("backoutPlan", { required: true })}
								/>
							</div>
							<div className="flex items-center p-2">
								<label className="m-2"
								>
									Minutes to execute plan:
								</label>
								<input
									type="time"
									autoComplete="off"
									className="flex-box m-2 block p-2 text-gray-900 border-2 border-gray-400 rounded-lg bg-gray-50 outline-none sm:text-md"
								/>
							</div>
							<div className="risk flex p-2">
								<fieldset className="flex items-center p-2">
									<label className="me-4">Risk Assessment:</label>
									<div className="flex items-center me-4">
										<input
											id="riskLow"
											className="peer riskLow"
											type="radio"
											name="risk"
										/>
										<label
											htmlFor="riskLow"
											className="peer-checked riskLow font-bold">
											Low
										</label>
									</div>
									<div className="flex items-center me-4">
										<input
											id="riskMed"
											className="peer riskMed"
											type="radio"
											name="risk"
										/>
										<label
											htmlFor="riskMed"
											className="peer-checked riskMed font-bold">
											Med
										</label>
									</div>
									<div className="flex items-center me-4">
										<input
											id="riskHigh"
											className="peer riskHigh"
											type="radio"
											name="risk"
										/>
										<label
											htmlFor="riskHigh"
											className="peer-checked riskHigh font-bold">
											High
										</label>
									</div>
								</fieldset>
							</div>
						</div>
						<div className="flex items-center">
							<div className="Submit">
								<button
									className="hover:border-black border-2 bg-gray-200 font-bold text-black p-2 rounded-lg m-2">
									Cancel
								</button>
								<button
									type="submit"
									className="hover:border-black border-2 bg-gray-200 font-bold text-black p-2 rounded-lg m-2">
								    Submit
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default CreateChangeRequest

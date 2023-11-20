import * as yup from "yup";
import moment from "moment/moment.js";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import React, {useEffect, useState} from "react";
import {Dialog, DialogTitle} from "@mui/material";
import {useNavigate} from "react-router-dom";

function ChangeRequest() {

    const schema = yup.object().shape({
        changeType: yup.string().required("Change type is required"),
        title: yup.string().required("Title is required"),
        time: yup.object().shape({
            start: yup.string().required("Start time cannot be empty"),
            end: yup
                .string()
                .required("End time cannot be empty")
                .test("is-greater", "End time should be greater", function (value) {
                    const { start } = this.parent;
                    return moment(value, "HH:mm").isSameOrAfter(moment(start, "HH:mm"));
                }),
        }),
        date: yup.object().shape({
            // start: yup.string().required("Start date must be completed"),
            // end: yup
            // 	.date()
            // 	.min(new Date(state.start),)
            // .string()
            // .required("end time cannot be empty")
            // .test("is-greater", "end time should be greater", function (value) {
            // 	const { start } = this.parent;
            // 	return moment(value, "HH:mm").isSameOrAfter(moment(start, "HH:mm"));
            // }),
        }),
        description: yup.string().required("Missing description"),
        reason: yup.string().required("Reason for change is required"),
        applicationId: yup.string().required("Something went wrong"), /* Not completed*/
        risk: yup.string().required("Risk assessment is required"),
        userId: yup.string().required("Something went wrong"), /* Not completed*/
    });

    const {
        register,
        handleSubmit,
        formState: { isValid },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
        const { userName, password, roles } = data;

        const createChangeRequest = async () => {

        }
        createChangeRequest();
    };


    return(
        <div className="flex-wrap w-full">
            <div className="p-4 rounded-full">
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="Form px-4">
                        <div className="changeType flex items-center p-2">
                            <label className="m-2">Change Type:</label>
                            <select id="roleselection" required {...register("changeType", { required: true })}
                                    className="bg-slate-200 border border-gray-300 text-gray-900 font-medium rounded-lg p-2" placeholder="Select Change Type">
                                <option disabled value="">Select Change Type</option>
                            </select>
                        </div>

                        <div className="title flex items-center p-2">
                            <label className="m-2">Title:</label>
                            <input
                                type="text"
                                autoComplete="off"
                                required {...register("title", { required: true })}
                                className="flex-box m-2 block p-2 text-gray-900 border-2 border-gray-400 rounded-lg bg-gray-50 outline-none sm:text-md"
                                placeholder="Enter Title"
                            />
                        </div>
                        <div className="schedule p-2">
                            <div className="start flex items-center p-2">
                                <label className="m-2">Scheduled Start Date:</label>
                                <input type="date"
                                       required {...register("date.start", { required: true })}
                                />
                                <label className="m-2">Scheduled Start Time:</label>
                                <input type="time" autoComplete="off"
                                       required {...register("time.start", { required: true })}
                                       className="flex-box m-2 block p-2 text-gray-900 border-2 border-gray-400 rounded-lg bg-gray-50 outline-none sm:text-md"
                                       placeholder="Enter Title"/>
                            </div>
                            <div className="end flex items-center p-2">
                                <label className="m-2">Scheduled End Date:</label>
                                <input type="date"
                                       required {...register("date.end", { required: true })}
                                />
                                <label className="m-2">Scheduled End Time:</label>
                                <input type="time" autoComplete="off"
                                       required {...register("time.end", { required: true })}
                                       className="flex-box m-2 block p-2 text-gray-900 border-2 border-gray-400 rounded-lg bg-gray-50 outline-none sm:text-md"
                                       placeholder="Enter Title"/>
                            </div>
                        </div>
                        <div className="description flex-box p-2">
                            <h1 className="text-2xl ml-2">
                                Detailed Event Description:
                            </h1>
                            <div className="whtChg">
                                <label className="m-2">1. What is changing?</label>
                                <textarea
                                    className="flex-box resize-none m-2 w-full block p-2 text-gray-900 border-2 border-gray-400 rounded-lg bg-gray-50 outline-none sm:text-md"
                                    required {...register("description", { required: true })}
                                />
                            </div>
                            <div className="whyChg">
                                <label className="m-2">2. Why is change needed?</label>
                                <textarea
                                    className="flex-box resize-none m-2 w-full block p-2 text-gray-900 border-2 border-gray-400 rounded-lg bg-gray-50 outline-none sm:text-md"
                                    required {...register("reason", { required: true })}
                                />
                            </div>
                            <div>
                                <label className="m-2">Backout Plan:</label>
                                <textarea className="flex-box resize-none m-2 w-full block p-2 text-gray-900 border-2 border-gray-400 rounded-lg bg-gray-50 outline-none sm:text-md"/>
                            </div>
                            <div className="flex items-center p-2">
                                <label className="m-2">Minutes to execute plan:</label>
                                <input type="text" autoComplete="off"
                                       className="flex-box m-2 block p-2 text-gray-900 border-2 border-gray-400 rounded-lg bg-gray-50 outline-none sm:text-md"
                                />
                            </div>
                            <div className="risk flex p-2">
                                <fieldset className="flex items-center p-2">
                                    <label className="me-4">Risk Assessment:</label>
                                    <div className="flex items-center me-4">
                                        <input id="riskLow" className="peer riskLow" type="radio" name="risk"/>
                                        <label htmlFor="riskLow" className="peer-checked riskLow font-bold">Low</label>
                                    </div>
                                    <div className="flex items-center me-4">
                                        <input id="riskMed" className="peer riskMed" type="radio" name="risk"/>
                                        <label htmlFor="riskMed" className="peer-checked riskMed font-bold">Med</label>
                                    </div>
                                    <div className="flex items-center me-4">
                                        <input id="riskHigh" className="peer riskHigh" type="radio" name="risk"/>
                                        <label htmlFor="riskHigh" className="peer-checked riskHigh font-bold">High</label>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="Submit">
                                {/*<button onClick={handleClose} type="submit"*/}
                                {/*        className="hover:border-black border-2 bg-gray-200 font-bold text-black p-2 rounded-lg m-2"*/}
                                {/*>*/}
                                {/*    Submit*/}
                                {/*</button>*/}
                                {/*<button onClick={handleClose} className="hover:border-black border-2 bg-gray-200 font-bold text-black p-2 rounded-lg m-2">*/}
                                {/*    Close*/}
                                {/*</button>*/}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

function NavBar() {
    const [showNav, setShowNav] = useState(false);
    const navigate = useNavigate();

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
                                    <a
                                        href="http://localhost:5173/changerequest"
                                        className={`${innerWidth >= 768 ? 'bg-transparent' : 'bg-transparent hover:bg-slate-200'} block w-full py-2 pl-3 pr-4 text-black font-bold transition duration-300 ease-in-out"`}
                                        aria-current="page"
                                    >
                                        Submit Request
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="http://localhost:5173/dashboard#"
                                        className="block w-full py-2 pl-3 pr-4 text-black font-bold bg-slate-200 hover:bg-slate-200"
                                        aria-current="page"
                                    >
                                        Dashboard
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
}
export default ChangeRequest
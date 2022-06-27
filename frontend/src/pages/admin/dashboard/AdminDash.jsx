import React from "react";
import Swal from "sweetalert2"
import axios from "../../../api/axios";
import { AuthContext } from "../../../App";

import "../../../styles/admin/dashboard/_admindash.scss";

export default function AdminDash() {

    const [user, setUser] = React.useState([])
    const [users, setUsers] = React.useState([])
    const [userCount, setUserCount] = React.useState([])
    const [mentorCount, setMentorCount] = React.useState([])

    // const [searchKey, setSeacrhKey] = React.useState("");

    const {state} = React.useContext(AuthContext);

     const deleteUser = (id) => {
        axios.delete("/user/delete?id=" + id, {
            withCredentials: true
        }).then(res => {
            Swal.fire({
                toast: true,
                timer: 1900,
                icon: 'success',
                position: "top-end",
                showConfirmButton: false,
                title: 'Data telah dihapus',
                customClass: {
                    container: 'poppins'
                }    
                // console.log(res.data + res.status)
            })
            setUsers(users.filter((e)=> {
                return e.id === id
            }))
            // console.log(res)
        }).catch( er => {
                console.log(er.message)
                Swal.fire({
                    timer: 3000,
                    icon: 'error',
                    titleText: 'Coba lagi yuk',
                    showConfirmButton: false,
                    text: `Ada kesalahan teknis`,
                    customClass: {
                        container: 'poppins',
                    }
                })
            })
    }    

    const getUser = React.useCallback( async () => {
        await axios.get(`/user/id?id=${state.id}`, {
            withCredentials: true
        }).then(res => {
            setUser(res.data.users)
        }).catch( er => {
            console.log(er)
        })
        // eslint-disable-next-line
    }, [])
    const getUsers = React.useCallback( async () => {
       await axios.get(`/user`, {
            withCredentials: true
        }).then(res => {
            setUsers(res.data.users)
        }).catch( er => {
            console.log(er)
        })
    }, [])
    const getUsersCount = React.useCallback(async () => {
       await axios.get(`/user/count`, {
            withCredentials: true
        }).then(res => {
            setUserCount(res.data)
        }).catch( er => {
            console.log(er)
        })
    }, [])
    const getMentorsCount = React.useCallback( async () => {
       await axios.get(`/mentor/count`, {
            withCredentials: true
        }).then(res => {
            setMentorCount(res.data)
        }).catch( er => {
            console.log(er)
        })
    }, [])

    // const handleChange = (e) => {
    //     setSeacrhKey({
    //         searchKey,
    //         [e.target.name]: e.target.value
    //     })
    // }

    React.useEffect( () => {
        getUser()
        getUsers()
        getUsersCount()
        getMentorsCount()
    }, [users, user, userCount, mentorCount, getUser, getUsers, getUsersCount, getMentorsCount])

    return (
        <div className="admindash-component">
            <div className="card-highlight w-full space-y-6">
                <div className="heading-admindash inter space-y-2">
                    {
                        user ? (
                            user.map((e, i) => {
                                return (
                                    <h1 key={i}>Halo, {e.name}</h1>
                                )
                            })
                        )
                        : "Student tidak memiliki hak akses"
                    }
                    <h3>Semangat dalam menjalankan tugas ya, Admin.</h3>
                </div>
                <div className="total-card bg-white flex w-full space-x-4">
                    <div className="total-card-content inter w-full">
                        <div className="title-items-total border-b border-solid border-gray-300">
                            <h4>Total Murid</h4>
                        </div>
                        <div className="value-items-total py-1">
                            <h1>
                                <span className="number-value">
                                    {
                                        userCount
                                    }
                                </span>
                                <span className="text-value text-gray-500 text-[18px]">  Murid</span>
                            </h1>
                        </div>
                    </div>
                    <div className="total-card-content inter w-full">
                        <div className="title-items-total border-b border-solid border-gray-300">
                            <h4>Total Mentor</h4>
                        </div>
                        <div className="value-items-total py-1">
                            <h1>
                                <span className="number-value">
                                    {
                                        mentorCount
                                    }
                                </span>
                                <span className="text-value text-gray-500 text-[18px]">  Mentor</span>
                            </h1>
                        </div>
                    </div>
                </div>  
            </div>
            <div className="container poppins">
                <div className="py-8">
                    <div>
                        <h2 className="text-2xl font-semibold leading-tight">Daftar Pengguna</h2>
                    </div>
                    <div className="my-3 flex sm:flex-row flex-col">
                        {/* <div classname="flex flex-row mb-1 sm:mb-0">
                            <div classname="relative">
                                <select
                                    classname="appearance-none h-full rounded-l border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                    <option>5</option>
                                    <option>10</option>
                                    <option>20</option>
                                </select>
                                <div
                                    classname="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg classname="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                            <div classname="relative">
                                <select
                                    classname="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                                    <option>All</option>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                                <div
                                    classname="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg classname="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div> */}
                        {/* Next Feature */}
                        {/* <form className="block relative" onSubmit={handleSearchBar}>
                            <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                                    <path
                                        d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                    </path>
                                </svg>
                            </span>
                            <input placeholder="Search"
                                className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" 
                                onChange={handleChange}
                                id="search"
                                name="search"
                                />
                        </form> */}
                    </div>
                    <div className="overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Users
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Role
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Created at
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((e,i)=> {
                                            return (
                                                <tr key={i}>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0 w-10 h-10">
                                                                <img className="w-full h-full rounded-full"
                                                                    src={`/asset/img/user/${e.photo}`}
                                                                    alt="User IMG" />
                                                            </div>
                                                            <div className="ml-3">
                                                                <p className="text-gray-900 whitespace-no-wrap">
                                                                   {e.name}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">{e.role}</p>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {e.created_at.slice(0, 10)}
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <span
                                                            className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight cursor-pointer"
                                                            onClick={()=> deleteUser(e.id)}
                                                            >
                                                            <span aria-hidden
                                                                className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                                            <span className="relative">Delete</span>
                                                        </span>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            {/* <div
                                className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                <span className="text-xs xs:text-sm text-gray-900">
                                    Showing 1 to 4 of 50 Entries
                                </span>
                                <div className="inline-flex mt-2 xs:mt-0">
                                    <button
                                        className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                        Prev
                                    </button>
                                    <button
                                        className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                        Next
                                    </button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
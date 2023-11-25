/* eslint-disable @next/next/no-img-element */
import { Dialog, IconButton } from "@material-ui/core";
import { Close, Person } from "@material-ui/icons";
import Image from "next/image";
import React, { useEffect, useState, useContext } from "react";
import { useRecoilState } from "recoil";
import { editprofilepopup } from "../../atoms/popup";
import Button from "../inputs/Button";
import { ModalHeading } from "./utils";
import ApiClient from '../../methods/api/apiClient'
import { getFromStorage } from '../../functions/getFromStorage'
import { setToStorage } from '../../functions/setToStorage'
import { UserContext } from '../../pages/_app'
import methodModel from "../../methods/methods";
const Editprofile = () => {
    const [user, setuser] = useContext(UserContext);
    const [open, setOpen] = useRecoilState(editprofilepopup);
    const [addVariation, setvariation] = useState({ stylebaseImg: '' })
    const [form, setform] = useState({})
    const handleClose = () => {
        setOpen({ ...open, show: false });
    };
    const [profileImage, setProfileImage] = useState(null);
    const [userdetail, setuserdetails] = useState()
    const handleform = () => {
        let value = {
            firstName: form.firstName,
            lastName: form.lastName,
            mobileNo: form.mobileNo,
            country: 'india',
            image: form.image ? form.image : ''
        }
        ApiClient.put(`edit/profile?id=${userdetail && userdetail.id}`, value).then(res => {
            if (res.success) {
                let user = JSON.stringify(res.data)
                setToStorage('userdata', user)
                // location.reload();
                setuser(res.data)
                handleClose()
            }
        })
    }
    const handleSelectImage = (e) => {
        if (e.target.files[0] != undefined) {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setProfileImage(reader.result);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const removeImage = () => {
        setform({ ...form, image: '' })
    }
    useEffect(() => {
        if (getFromStorage('userdata')) {
            let user = JSON.parse(getFromStorage('userdata'))
            setuserdetails(user)
        }
    }, [user])
    const styleImage = (e) => {
        // styleImage
        setform({ ...form, stylebaseImg: e.target.value })
        let files = e.target.files
        let file = files[0]
        // setVarLoader(true)
        ApiClient.postFormData('image/upload?modelName=userss&width=360&height=360', { file: file, modelName: 'users' }).then(res => {
            if (res.success) {
                let image = res.data.fullpath
                setform({ ...form, image: image && image, stylebaseImg: '' })
            } else {
                setform({ ...form, stylebaseImg: '' })
            }
            // setVarLoader(false)
        })
    }


    // const data = {
    //     name: "Aman pandey",
    //     date: "18",
    //     month: "07",
    //     year: "2005",
    // };
    // var monthNames = [
    //     "January",
    //     "February",
    //     "March",
    //     "April",
    //     "May",
    //     "June",
    //     "July",
    //     "August",
    //     "September",
    //     "October",
    //     "November",
    //     "December",
    // ];

    const year = new Date().getFullYear();
    return (
        <>
            <Dialog
                open={open.show}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >

                <div className="flex flex-col text-coolBlack pb-3 pt-4 pl-4 pr-4 relative w-full lg:min-w-[700px] max-w-[700px] ">
                    <div className="flex flex-col md:flex-row flex-[0.9] justify-between">
                        <div class="mb-2"><h2 class="text-lg md:text-xl text-coolBlack font-bold lg:text-2xl undefined text-coolDarkerGreen">Edit Profile</h2></div>
                        <div className="close">
                            <IconButton
                                onClick={handleClose}
                                variant="outlined"
                                className="absolute top-[-10px] right-[0px] self-end w-fit"
                            >
                                <Close />
                            </IconButton>
                        </div>
                    </div>
                    {/* <img src={methodModel.userImg(image && form.styleimage, 'products')} className="numberOfimg" />
                                <input
                                    id="bannerImage"
                                    type="file"
                                    className="d-none"
                                    accept="image/*"
                                    value={form.stylebaseImg}
                                    onChange={(e) => { styleImage(e); }}
                                />*/}
                    <form onSubmit={handleform}>
                        {/* <div class="upload">
                            <div className="profile-image">
                                <img src="/imagefirst.png" alt="profile" />
                            </div>
                            <div className="edit-pencil py-3 w-fit hover:opacity-60 cursor-pointer my-3 px-8 mx-auto rounded-[50] text-sm bg-coolDarkerGreen text-white ">Edit Profile Image

                            </div>
                            <input
                                id="bannerImage"
                                hidden
                                type="file"
                                className="d-none"
                                accept="image/*"
                                value={form.stylebaseImg}
                                onChange={(e) => { styleImage(e); }}
                            />

                        </div> */}


                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-2  w-100 md:max-h-screen">
                            <div class="flex flex-col pr-4">
                                <label for="firstname" class="my-2 font-semibold text-coolDarkerGreen">First Name</label>
                                <div class="flex text-coolBlack border rounded-[4px] border-coolBlack overflow-hidden items-center w-full">
                                    <input type="text" required="" placeholder="First Name" id="firstname" class="text-coolBlack w-full p-2" defaultValue={userdetail && userdetail.firstName} onChange={e => setform({ ...form, firstName: e.target.value })} />
                                </div>
                            </div>
                            <div class="flex flex-col ">
                                <label for="lastname" class="my-2 font-semibold text-coolDarkerGreen">Last Name</label>
                                <div class="flex text-coolBlack border rounded-[4px] border-coolBlack overflow-hidden items-center w-full">
                                    <input type="text" required="" placeholder="Last Name" id="lastname" class="text-coolBlack w-full p-2" onChange={e => setform({ ...form, lastName: e.target.value })} defaultValue={userdetail && userdetail.lastName} />
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col pb-4">
                            <label for="email" class="my-2 font-semibold text-coolDarkerGreen">Email</label>
                            <div class="flex text-coolBlack border rounded-[4px] border-coolBlack overflow-hidden items-center w-full">
                                <input type="text" required="" placeholder="Email" id="email" class="text-coolBlack w-full p-2 bg-slate-200" defaultValue={userdetail && userdetail.email} disabled />
                            </div>
                        </div>

                        <label className="proheadclss"><p>Upload an image for this style, if you have one Image size must be 360x360</p>

                            <div className="profile-image">

                                <div className="upload-wrapper">
                                    <div className=" py-3 w-fit hover:opacity-60 cursor-pointer my-3 px-8 float-left rounded-[50] text-sm bg-coolDarkerGreen text-white ">Edit Profile Image

                                    </div>
                                    <input
                                        id="bannerImage"
                                        type="file"
                                        className="d-none"
                                        accept="image/*"
                                        value={form.stylebaseImg}
                                        onChange={(e) => { styleImage(e); }}
                                    />
                                </div>
                                <div className="upload">

                                    <img src={form && form.image ? `http://74.208.206.18:4600/images/users/${form && form.image}` : "/profile.jpg"} alt="profile" objectFit="cover"
                                        layout="fill" />
                                    {/* <img src="/profile.jpg"></img>
                                    <img src={methodModel.noImg(form && form.styleimage, 'products')} className="numberOfimg" /> */}
                                    {/* <img src={`http://74.208.206.18:4600/images/users/${form.image}`||"profile.jpg"} alt="profile" /> */}
                                   <div class="close-icon">
                                    <IconButton
                                        onClick={removeImage}
                                        variant="outlined"
                                        className="close-modal"
                                    >
                                        <Close />
                                    </IconButton>
                                    </div>
                                </div>
                            </div>
                        </label>

                    </form>
                    <div class="mt-4 md:mt-0 flex flex-[0.55] justify-end items-center"><button onClick={handleform} class="hover:opacity-60 cursor-pointer py-3 px-6 md:px-6 rounded-[4px] bg-coolDarkerGreen text-sm text-white mr-2 lg:mr-4">Save</button><div class="hover:opacity-60 cursor-pointer cursor-pointer py-3 px-6 rounded-[4px] text-sm bg-coolDarkerGreen text-white" onClick={handleClose}>Cancel</div></div>
                </div>
            </Dialog>
        </>
    );
};

export default Editprofile;

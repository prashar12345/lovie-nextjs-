/* eslint-disable @next/next/no-img-element */
import { Dialog, IconButton } from "@material-ui/core";
import { Close, Person } from "@material-ui/icons";
import Image from "next/image";
import React, { useEffect, useState, useContext } from "react";
import { useRecoilState } from "recoil";
import { guestloginpop } from "../../atoms/popup";
import Button from "../inputs/Button";
import { ModalHeading } from "./utils";
import ApiClient from '../../methods/api/apiClient'
import { getFromStorage } from '../../functions/getFromStorage'
import { setToStorage } from '../../functions/setToStorage'
import { UserContext } from '../../pages/_app'
import methodModel from "../../methods/methods";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
const Guestpopup = () => {
    const [user, setuser] = useContext(UserContext);
    const [open, setOpen] = useRecoilState(guestloginpop);
    const [addVariation, setvariation] = useState({ stylebaseImg: '' })
  
    const [form, setform] = useState({})
    const handleClose = () => {
        setOpen({ ...open, show: false });
    };
    const [profileImage, setProfileImage] = useState(null);
    const [userdetail, setuserdetails] = useState()
    const router = useRouter();
    const { redirect } = router.query;
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


    
    const year = new Date().getFullYear();

    const LoginGuest =()=>{
        ApiClient.post('guest').then(res=>{
            if(res.success){
                // toast.success(res.message)
                let data = JSON.stringify(res.data);
                setToStorage("userdata", data);
                setToStorage("token", res.data.access_token);
                if(localStorage.getItem('guestcart')){
                    let arr =JSON.parse(localStorage.getItem('guestcart'))
                    for (let i = 0; i < arr.length; i++) {
                      let param ={
                        quantity:arr[i].quantity,
                        product:arr[i].productId
                      }
                      ApiClient.post('add/cart',param).then(res=>{
                        if(res.success){
                       setTimeout(() => {
                        location.reload()
                       }, 500);
                        }
                      })
                    }
                  }
                  router.push(redirect || `/cart`)
                handleClose()
            }
        })
    }
    return (
        <>
            <Dialog
                open={open.show}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >

                <div className="flex flex-col text-coolBlack pb-3 pt-4 pl-4 pr-4 relative w-full lg:min-w-[700px] max-w-[700px] ">
                    <div className="flex flex-col md:flex-row flex-[0.9] justify-between">
                        <div class="mb-2"><h2 class="text-lg md:text-xl text-coolBlack font-bold lg:text-2xl undefined text-coolDarkerGreen"></h2></div>
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
              
  


                        <div className="grid grid-cols-1 lg:grid-cols-1 mb-4 gap-4 pb-2  w-100 md:max-h-screen">
                          
                        <div class="mt-4 md:mt-0 flex justify-center ...">
                            <button class="hover:opacity-60 cursor-pointer py-3 px-6 md:px-6 rounded-[4px] bg-coolDarkerGreen text-lg text-white mr-2 lg:mr-4" onClick={e=> router.push(redirect || `/auth/signin`)} >Login as User</button>
                            <div class="hover:opacity-60 cursor-pointer cursor-pointer py-3 px-6 rounded-[4px] text-lg bg-coolDarkerGreen text-white" onClick={LoginGuest} >Login as Guest</div></div>
                        </div>
                      

                        

              
                    {/* <div class="mt-4 md:mt-0 flex flex-[0.55] justify-end items-center"><button onClick={handleform} class="hover:opacity-60 cursor-pointer py-3 px-6 md:px-6 rounded-[4px] bg-coolDarkerGreen text-sm text-white mr-2 lg:mr-4">Save</button><div class="hover:opacity-60 cursor-pointer cursor-pointer py-3 px-6 rounded-[4px] text-sm bg-coolDarkerGreen text-white" onClick={handleClose}>Cancel</div></div> */}
                </div>
            </Dialog>
        </>
    );
};

export default Guestpopup;



{/* <div className="process_to_checkout">
<button className="btn btn-primary">Product as user</button>
<button className="btn btn-primary">Product as Guest</button>
</div> */}
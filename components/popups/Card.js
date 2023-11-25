/* eslint-disable @next/next/no-img-element */
import { Dialog, IconButton } from "@material-ui/core";
import { Close, Person } from "@material-ui/icons";
import Image from "next/image";
import React, { useEffect, useState, useContext } from "react";
import { useRecoilState } from "recoil";
import { ordercard } from "../../atoms/popup";
import Button from "../inputs/Button";
import { ModalHeading } from "./utils";
import ApiClient from '../../methods/api/apiClient'
import { getFromStorage } from '../../functions/getFromStorage'
import { setToStorage } from '../../functions/setToStorage'
import { UserContext } from '../../pages/_app'
import methodModel from "../../methods/methods";
import { ToastContainer, toast } from "react-toastify";
const Editprofile = ({filterBlog}) => {
  const [user, setuser] = useContext(UserContext);
  const [open, setOpen] = useRecoilState(ordercard);
  const [form, setform] = useState({})
  const [cardnumber, setcardnumber] = useState()
  const handleClose = () => {
    setOpen({ ...open, show: false });
    filterBlog()
  };
  const [userdetail, setuserdetails] = useState()

  const isNumber = (e) => {
    let key = e.target;
    let maxlength = key.maxLength ? key.maxLength : 1;

    let max = Number(key.max ? key.max : key.value);
    if (Number(key.value) > max) key.value = max;

    // let min = key.min;
    // if (min && Number(key.value)<Number(min)) key.value = min;

    if (key.value.length > maxlength) key.value = key.value.slice(0, maxlength);
    key.value = key.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');

    return key.value
}


  const handleform = () => {
    let value = {
      card_number: form.card_number,
      exp_month: form.exp_month,
      exp_year: form.exp_year,
      cvc: form.cvc,
      cardHolderName:form.holdername
      // address:{
      //   email: form.email,
      //account holder name
      //   country: form.country,
      //   province: form.province,
      //   city: form.city,
      //   postalcode: form.postalcode
      // }

    }
    ApiClient.post(`add/card`, value).then(res => {
      if (res.success) {
        toast.success(res?.message)
        let user = JSON.stringify(res.data)
        handleClose()
        
      }
      else {
        toast.error(res?.error?.message)
       
    }
    })
  }
  
 

  const removeImage = () => {
    setform({ ...form, image: '' })
  }
  useEffect(() => {
    if (getFromStorage('userdata')) {
      let user = JSON.parse(getFromStorage('userdata'))
      setuserdetails(user)
    }
  }, [user])

  const year = new Date().getFullYear();
  return (
    <>
      <Dialog
        open={open.show}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="flex flex-col  text-coolBlack  relative w-full lg:min-w-[700px] max-w-[700px] ">
          <div className="flex flex-col md:flex-row flex-[0.9] justify-between px-3 py-4 pb-0 headerclor">
            <div class="mb-2 px-4">
              <h2 class="text-lg md:text-xl font-bold lg:text-2xl undefined addcardtext"></h2>
              </div>
            <div className="close ">
              <IconButton
                onClick={handleClose}
                variant="outlined"
                className="absolute top-[-10px] right-[0px] self-end w-fit closeicon"
              >
                <Close />
              </IconButton>
            </div>
          </div>

          <form onSubmit={handleform} className="px-4 py-4 pb-4">
            <div class="flex flex-col pb-4">
              {/* <label for="email" class="my-2 font-semibold text-coolDarkerGreen">Card Number</label> */}
              <div class="flex bodercolorclss rounded-[4px] border-coolBlack overflow-hidden  w-full">
                <input type="text" maxlength="16" required="" placeholder="Card Number" id="card_number" class="form-control text-coolBlack placeholderclass w-full p-2 bg-slate-200" onChange={e => {setform({ ...form, card_number: e.target.value }),isNumber(e)}} />
              </div>
            </div>
            <div class="flex flex-col pb-4">
              {/* <label for="email" class="my-2 font-semibold text-coolDarkerGreen">Card Number</label> */}
              <div class="flex bodercolorclss rounded-[4px] border-coolBlack overflow-hidden  w-full">
                <input type="text" required="" placeholder="Account holder name" id="holdername" class="form-control text-coolBlack placeholderclass w-full p-2 bg-slate-200" onChange={e => setform({ ...form, holdername: e.target.value })} />
              </div>
            </div>
           
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pb-2  w-100 md:max-h-screen">
              <div class="flex flex-col pr-4">
                {/* <label for="firstname" class="my-2 font-semibold text-coolDarkerGreen">CVV</label> */}
                <div class="flex bodercolorclss rounded-[4px] border-coolBlack overflow-hidden  w-full">
                  <input type="text" required="" maxLength="3" placeholder="CVV" id="cvc" class="text-coolBlack placeholderclass w-full p-2" onChange={e => {setform({ ...form, cvc: e.target.value }),isNumber(e)}} />
                </div>
              </div>
              <div class="flex flex-col pr-4">
                {/* <label for="firstname" class="my-2 font-semibold text-coolDarkerGreen">Expiry Month</label> */}
                <div class="flex bodercolorclss rounded-[4px] border-coolBlack overflow-hidden  w-full">
                  <input type="text" required="" maxLength='2' placeholder="Expiry Month" id="exp_month" class="text-coolBlack placeholderclass w-full p-2" onChange={e => {setform({ ...form, exp_month: e.target.value }),isNumber(e)}} />
                </div>
              </div>
              <div class="flex flex-col ">
                {/* <label for="lastname" class="my-2 font-semibold text-coolDarkerGreen">Expiry Year</label> */}
                <div class="flex bodercolorclss rounded-[4px] border-coolBlack overflow-hidden  w-full">
                  <input type="text" maxLength="4" required="" placeholder="Expiry Year" id="exp_year" class="text-coolBlack placeholderclass w-full p-2" onChange={e => {setform({ ...form, exp_year: e.target.value }),isNumber(e)}} />
                </div>
              </div>
            </div>
            {/* <div class="useraddressdiv py-5 px-5 mt-5"> */}
          {/* <h3 className="useraddress">User Address</h3> */}
            
            {/* <div class="flex flex-col pb-4">
              {/* <label for="email" class="my-2 font-semibold text-coolDarkerGreen">Email</label> */}
              {/* <div class="flex bodercolorclss  rounded-[4px] border-coolBlack overflow-hidden  w-full">
                <input type="text" required="" placeholder="Email" id="email" class="text-coolBlack placeholderclass w-full p-2 bg-slate-200" onChange={e => setform({ ...form, email: e.target.value })} />
              </div>
            </div>  */}
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-2  w-100 md:max-h-screen">
              <div class="flex flex-col pr-4"> */}
                {/* <label for="firstname" class="my-2 font-semibold text-coolDarkerGreen">Country</label> */}
                {/* <div class="flex bodercolorclss rounded-[4px] border-coolBlack overflow-hidden  w-full">
                  <input type="text" required="" placeholder="Country" id="country" class="text-coolBlack placeholderclass w-full p-2" onChange={e => setform({ ...form, country: e.target.value })} />
                </div>
              </div> */}
              {/* <div class="flex flex-col "> */}
                {/* <label for="firstname" class="my-2 font-semibold text-coolDarkerGreen">Province</label> */}
                {/* <div class="flex  bodercolorclss rounded-[4px] border-coolBlack overflow-hidden  w-full">
                  <input type="text" required="" placeholder="Province" id="province" class="text-coolBlack placeholderclass w-full p-2" onChange={e => setform({ ...form, province: e.target.value })} />
                </div>
              </div>
            </div> */}
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-2  w-100 md:max-h-screen">
              <div class="flex flex-col pr-4"> */}
                {/* <label for="firstname" class="my-2 font-semibold text-coolDarkerGreen">City</label> */}
                {/* <div class="flex  bodercolorclss rounded-[4px] border-coolBlack overflow-hidden  w-full">
                  <input type="text" required="" placeholder="City" id="city" class="text-coolBlack placeholderclass w-full p-2" onChange={e => setform({ ...form, city: e.target.value })} />
                </div>
              </div> */}
              {/* <div class="flex flex-col "> */}
                {/* <label for="firstname" class="my-2 font-semibold text-coolDarkerGreen">Postal Code</label> */}
                {/* <div class="flex  bodercolorclss rounded-[4px] border-coolBlack overflow-hidden  w-full">
                  <input type="text" required="" placeholder="Postal Code" id="postalcode" class="text-coolBlack placeholderclass w-full p-2" onChange={e => setform({ ...form, postalcode: e.target.value })} />
                </div>
              </div>
              </div> */}
            {/* </div> */}

          </form>
          <div class="mt-4 md:mt-0 flex flex-[0.55] justify-end  px-4 pb-5">
            <button onClick={handleform} class="hover:opacity-60 cursor-pointer py-3 px-6 md:px-6 rounded-[4px] bg-coolDarkerGreen text-sm text-white mr-2 lg:mr-4 ">Save</button>
            <div class="hover:opacity-60 cursor-pointer cursor-pointer py-3 px-6 rounded-[4px] text-sm bg-coolDarkerGreen text-white mr-4" onClick={handleClose}>Cancel</div>
            </div>
        </div>
      </Dialog>
    </>
  );
};

export default Editprofile;

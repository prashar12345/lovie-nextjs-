/* eslint-disable react/no-unescaped-entities */
import { Dialog } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Button from "../inputs/Button";
import { buyerPopup } from "../../atoms/popup";
import { ModalHeading } from "./utils";
import CheckButton from "../CheckButton";
import { Checkmark } from "react-ionicons";
import { useRouter } from "next/router";
import Link from "next/link";
import ApiClient from "../../methods/api/apiClient";
import { render } from "react-dom";
import { removeFromStorage } from '../../functions/setToStorage'
import { toast } from "react-toastify";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";

const BuyerPupups = () => {
  const [data, setData] = useRecoilState(buyerPopup);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { type, open } = data;

  const handleClose = () => {
    setData({ ...open, open: false });
  };



  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {type === "changePassword" ? (
          <div className="w-full  p-3 md:p-8">
            <ChangePass
              handleClose={handleClose}
              oldPassword={oldPassword}
              setOldPassword={setOldPassword}
              newPassword={newPassword}
              setNewPassword={setNewPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
            />
          </div>
        ) : (
          ""
        )}
        {type === "changeCard" ? (
          <div className="w-full  p-3 md:p-8">
            <ChangeCardNumber handleClose={handleClose} />
          </div>
        ) : (
          ""
        )}
        {type === "addCard" ? (
          <div className="w-full  p-3 md:p-8">
            <AddCard handleClose={handleClose} />
          </div>
        ) : (
          ""
        )}
        {type === "editAddress" ? (
          <div className="w-full  p-3 md:p-8">
            <EditAddress handleClose={handleClose} />
          </div>
        ) : (
          ""
        )}
        {type === "showLogin" ? (
          <div className="w-full  p-3 md:p-8">
            <LoginPopup handleClose={handleClose} />
          </div>
        ) : (
          ""
        )}
        {type === "signInSuccess" ? (
          <div className="w-full  p-3 md:p-8">
            <SignInSuccess handleClose={handleClose} />
          </div>
        ) : (
          ""
        )}
        {type === "addShippingAddress" ? (
          <div className="w-full  p-3 md:p-8">
            <AddAddress type="addShippingAddress" handleClose={handleClose} />
          </div>
        ) : type === "addBillingAddress" ? (
          <div className="w-full  p-3 md:p-8">
            <AddAddress type="addBillingAddress" handleClose={handleClose} />
          </div>
        ) : (
          ""
        )}
      </Dialog>
    </>
  );
};

function ChangePass({
  oldPassword,
  handleClose,
  setOldPassword,
  newPassword,
  setNewPassword,
  confirmPassword,
  setConfirmPassword,
}) {
  const router = useRouter();
  const [error, seterror] = useState()
  const [showPass, setShowPass] = useState(false)
  const [showPassA, setShowPassA] = useState(false)
  const [showPassB, setShowPassB] = useState(false)
  const { redirect } = router.query;
  const logout = () => {
    removeFromStorage('userdata')
    removeFromStorage('username')
    removeFromStorage('token')
  }
  const handleChangePassword = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      let objparam = {
        newPassword: newPassword,
        confirmPassword: confirmPassword,
        currentPassword: oldPassword
      }
      ApiClient.put('change/password', objparam).then(res => {
        if (res.success) {
          handleClose(true)
          logout()
          router.push(redirect || `/auth/signin`);
          toast.success(res.message)

        } else {
          seterror(res.error.message)
        }
      })
    }
  };
  return (
    <div className="w-full max-w-[25rem] sm:min-w-[300px] md:min-w-[500px] ">
      <div className="mb-4">
        <ModalHeading color="coolDarkerGreen" text="Change Your Password" />
      </div>
      <form onSubmit={handleChangePassword}>
        <div className=" mx-auto  flex flex-col">
          <div className="mb-5 space-y-2">
            <label
              htmlFor="oldPass"
              className=" text-coolDarkerGreen font-semibold"
            >
              Current password
            </label>
            <input
              onFocus={e => seterror('')}
              required
              min={6}
              id="oldPass"
              className="rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4  uppercase text-coolBlack tracking-tight w-full"
              type={showPass ? "text" : "password"}
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <button
              type="button"
              className="eye-button3 "
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <IoMdEyeOff class=" viewicon" /> : <IoMdEye class=" viewicon" />}
            </button>

            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye viewicon2" viewBox="0 0 16 16"> <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/> <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/> </svg>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash viewslash" viewBox="0 0 16 16">
            /><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye viewicon2" viewBox="0 0 16 16"> <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/> <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/> </svg>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash viewicon2" viewBox="0 0 16 16">
  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
  <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
</svg> */}
          </div>
          {
            error ? <p className="text-red-600">{error}</p> : <></>
          }
          <div className="mb-5  space-y-2">
            <label
              htmlFor="newPass"
              className=" text-coolDarkerGreen font-semibold"
            >
              New password
            </label>
            <input
              required
              min={6}
              id="newPass"
              className={`${newPassword === confirmPassword
                ? "border-coolDarkerGreen outline-coolDarkerGreen"
                : "border-[red] border-2 outline-[red]"
                } rounded-md border py-2 px-4  uppercase text-coolBlack tracking-tight w-full`}
              type={showPassA ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
              type="button"
              className="eye-button "
              onClick={() => setShowPassA(!showPassA)}
            >
              {showPassA ? <IoMdEyeOff class=" viewicon1" /> : <IoMdEye class=" viewicon1" />}
            </button>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye viewicon1" viewBox="0 0 16 16"> <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/> <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/> </svg>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash viewicon1" viewBox="0 0 16 16">
  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
  <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
</svg> */}
            {/* {newPassword != confirmPassword && (
              <p className="text-[red] font-md text-sm py-1">
                Passwords do not match.
              </p>
            )} */}
          </div>
          <div className="mb-5  space-y-2">
            <label
              htmlFor="confirmPass"
              className=" text-coolDarkerGreen font-semibold"
            >
              Confirm password
            </label>
            <input
              required
              min={6}
              id="confirmPass"
              className={`${newPassword === confirmPassword
                ? "border-coolDarkerGreen outline-coolDarkerGreen"
                : "border-[red] border-2 outline-[red]"
                } rounded-md border  py-2 px-4  uppercase text-coolBlack tracking-tight w-full `}
              type={showPassB ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              className="eye-button "
              onClick={() => setShowPassB(!showPassB)}
            >
              {showPassB ? <IoMdEyeOff class=" viewicon2" /> : <IoMdEye class=" viewicon2" />}
            </button>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye viewicon" viewBox="0 0 16 16"> <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/> <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/> </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash viewicon" viewBox="0 0 16 16">
  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
  <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
</svg> */}
            {confirmPassword && confirmPassword != newPassword && (
              <p className="text-[red] font-md text-sm py-1">
                Passwords do not match.
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-4 ">
          <Button text="Save" color="bg-coolDarkerGreen w-fit px-6" />
          <Button
            text="Cancel"
            onClick={handleClose}
            color="bg-coolDarkerGreen w-fit px-6"
          />
        </div>
      </form>
    </div>
  );
}

function ChangeCardNumber({ handleClose }) {
  const [cardData, setCardData] = useState({
    cardNumber: null,
    cardName: null,
    expiry: null,
    CVC: null,
  });


  const cardInfo = {
    cardName: "Aman pandey",
    cardNumber: "1887267634445334",
    expiry: "2014-02-09",
    CVC: "276",
  };

  useEffect(() => {
    setCardData({
      cardNumber: cardInfo?.cardNumber,
      cardName: cardInfo?.cardName,
      expiry: cardInfo?.expiry,
      CVC: cardInfo?.CVC,
    });
  }, [
    cardInfo?.cardNumber,
    cardInfo?.cardName,
    cardInfo?.expiry,
    cardInfo?.CVC,
  ]);

  const handleChange = (e) => {
    setCardData({ ...cardData, [e.target.name]: e.target.value });
  };

  const handleChangeCardNumber = (e) => {
    e.preventDefault();
    if (cardData.cardNumber) {
      console.log(cardData);
    }
  };
  return (
    <div className="w-full max-w-[25rem] sm:min-w-[300px] md:min-w-[500px] ">
      <div className="mb-4">
        <ModalHeading color="coolDarkerGreen" text="Edit Card" />
      </div>
      <form onSubmit={handleChangeCardNumber}>
        <div className=" mx-auto  flex flex-col">
          <div className="mb-5 space-y-2">
            <label
              htmlFor="cardNum"
              className="text-coolDarkerGreen font-semibold"
            >
              Change Card Number
            </label>
            <input
              required
              minLength={16}
              maxLength={16}
              id="cardNum"
              className="rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 uppercase text-coolBlack tracking-tight w-full"
              type="number"
              name="cardNumber"
              defaultValue={cardData.cardNumber}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5 space-y-2">
            <label
              htmlFor="nameOncard"
              className="text-coolDarkerGreen font-semibold"
            >
              Name on Card
            </label>
            <input
              required
              id="nameOncard"
              className="rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4   text-coolBlack tracking-tight w-full"
              type="text"
              defaultValue={cardData.cardName}
              name="cardName"
              onChange={handleChange}
            />
          </div>
          <div className="mb-5 space-y-2">
            <label htmlFor="CVC" className="text-coolDarkerGreen font-semibold">
              CVC Number
            </label>
            <input
              required
              minLength={3}
              maxLength={3}
              id="CVC"
              className="rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 uppercase text-coolBlack tracking-tight w-full"
              type="number"
              defaultValue={cardData.CVC}
              name="CVC"
              onChange={handleChange}
            />
          </div>
          <div className="mb-5 space-y-2">
            <label
              htmlFor="date"
              className="text-coolDarkerGreen font-semibold"
            >
              Expiry Date
            </label>
            <input
              required
              id="date"
              className="rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 uppercase text-coolBlack tracking-tight w-full"
              type="date"
              defaultValue={cardData.expiry}
              name="expiry"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex items-left">
          <Button text="Save" color="bg-coolDarkerGreen max-w-[28rem]" />
          <div onClick={handleClose}>
            <Button
              text="Cancel"
              color="bg-coolDarkerGreen max-w-[28rem] ml-4"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

function AddCard({ handleClose }) {
  const [error, seterror] = useState()
  const [cardData, setCardData] = useState({
    cardNumber: null,
    exp_month: null,
    exp_year: null,
    CVC: null,
  });

  const handleAddCardNumber = (e) => {
    e.preventDefault();
    let value = {
      card_number: cardData.cardNumber,
      exp_month: cardData.exp_month,
      exp_year: cardData.exp_year,
      cvc: cardData.CVC,
      cardHolderName: cardData.HolderName
    }
    // if (
    //   cardData.cardNumber &&
    //   cardData.cardName &&
    //   cardData.expiry &&
    //   cardData.CVC
    // ) {
    //   console.log(cardData);
    // }
    ApiClient.post('add/card', value).then(res => {
      if (res.success) {
        toast.success(res.message)
      } else {
        seterror(res.error.message)
      }
    })
  };

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

  const handleChange = (e) => {
    setCardData({ ...cardData, [e.target.name]: e.target.value });
  };

  return (
    <div className="maincardcls">
    <div className=" w-full max-w-[25rem] sm:min-w-[300px] md:min-w-[500px] ">

      <div className="flex flex-col md:flex-row flex-[0.9] justify-between px-3 py-4 pb-0 headerclor">
        <div class="mb-2 px-4">
          <h2 class="text-lg md:text-xl font-bold lg:text-2xl undefined addcardtext">Add Card</h2>
        </div>
        <div className="close ">
          {/* <IconButton
<div className="flex flex-col md:flex-row flex-[0.9] justify-between px-3 py-4 pb-0 headerclor">
            <div class="mb-2 px-4">
              <h2 class="text-lg md:text-xl font-bold lg:text-2xl undefined addcardtext"></h2>
              </div>
            <div className="close ">
              {/* <IconButton
                onClick={handleClose}
                variant="outlined"
                className="absolute top-[-10px] right-[0px] self-end w-fit closeicon"
              >
                <Close />
              </IconButton> */}
        </div>
      </div>

      <form onSubmit={handleAddCardNumber} className="px-4 py-4 pb-4">

        <div className=" mx-auto  flex flex-col">
          <div className="mb-5 space-y-2">
            {/* <label
              htmlFor="cardNum"
              className="text-coolDarkerGreen font-semibold"
            >
              Account holder name
            </label> */}
            <input
              onFocus={e => seterror('')}
              required
              id="holderName"
              placeholder="Account holder name"
              className="placeholderclass rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 text-coolBlack tracking-tight w-full"
              type="text"
              name="HolderName"
              defaultValue={cardData.HolderName}
              onChange={e => setCardData({ ...cardData, HolderName: e.target.value })}
            />
            {/* {error ? <p className="text-red-400">{error}</p> : <></>} */}
          </div>
          <div className="mb-5 space-y-2">
            {/* <label
              htmlFor="cardNum"
              className="text-coolDarkerGreen font-semibold"
            >
              Card Number
            </label> */}
            <input
              onFocus={e => seterror('')}
              required
              minLength={16}
              maxLength={16}
              id="cardNum"
              placeholder="Card Number"
              className="placeholderclass rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 text-coolBlack tracking-tight w-full"
              type="text"
              name="cardNumber"
              defaultValue={cardData.cardNumber}
              onChange={e => { setCardData({ ...cardData, cardNumber: e.target.value }), isNumber(e) }}
            />
            {error ? <p className="text-red-400">{error}</p> : <></>}
          </div>
          <div className="mb-5 space-y-2">

            <div className="flex items-center gap-2">
              {/* <label
              htmlFor="nameOncard"
              className="text-coolDarkerGreen font-semibold"
            >
              Expiry Month
            </label> */}
              {/* <input
                required
                id="nameOncard"
                className="rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4   text-coolBlack tracking-tight w-full"
                type="text"
                name="cardName"
                placeholder="First Name"
                // onChange={handleChange}
                onChange={e => setCardData({ ...cardData, cardName: e.target.value })}
              /> */}
              {/* <input
                required
                id="nameOncard"
                className="rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4   text-coolBlack tracking-tight w-full"
                type="text"
                name="cardName"
                placeholder="Last Name"
                onChange={handleChange}
              /> */}
              <input
                onFocus={e => seterror('')}
                required
                id="exp-month"
                className="placeholderclass rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4   text-coolBlack tracking-tight w-full"
                type="text"
                maxlength="2"
                name="cardName"
                placeholder="exp-month"
                onChange={e => { setCardData({ ...cardData, exp_month: e.target.value }), isNumber(e) }}
              />
              {/* <label
              htmlFor="nameOncard"
              className="text-coolDarkerGreen font-semibold"
            >
              Expiry year
            </label> */}
              <input
                onFocus={e => seterror('')}
                required
                id="exp-year"
                className="placeholderclass rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4   text-coolBlack tracking-tight w-full"
                type="text"
                name="cardName"
                maxlength="4"
                placeholder="exp-year"
                onChange={e => { setCardData({ ...cardData, exp_year: e.target.value }), isNumber(e) }}
              />
              <input
                onFocus={e => seterror('')}
                required
                minLength={3}
                maxLength={3}
                placeholder="CVV"
                id="CVC"
                className="placeholderclass rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 uppercase text-coolBlack tracking-tight w-full"
                name="CVC"
                type="text"
                defaultValue={cardData.CVC}
                // onChange={handleChange}
                onChange={e => { setCardData({ ...cardData, CVC: e.target.value }), isNumber(e) }}

              />
            </div>
          </div>
          <div className="mb-5 space-y-2">
            {/* <label htmlFor="CVC" className="text-coolDarkerGreen font-semibold">
              CVC Number
            </label> */}
            {/* <input
              onFocus={e => seterror('')}
              required
              minLength={3}
              maxLength={3}
              id="CVC"
              className="rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 uppercase text-coolBlack tracking-tight w-full"
              name="CVC"
              type="number"
              defaultValue={cardData.CVC}
              // onChange={handleChange}
              onChange={e => setCardData({ ...cardData, CVC: e.target.value })}

            /> */}
          </div>
          {/* <div className="mb-5 space-y-2">
            <label
              htmlFor="date"
              className="text-coolDarkerGreen font-semibold"
            >
              Expiry Date
            </label>
            <input
              required
              id="date"
              className="rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 uppercase text-coolBlack tracking-tight w-full"
              name="expiry"
              type="date"
              defaultValue={cardData.expiry}
              // onChange={handleChange}
              onChange={e => setCardData({ ...cardData, CVC: e.target.value })}

            />
          </div> */}
        </div>
        <div className="flex items-left">
          <Button text="Save" color="bg-coolDarkerGreen max-w-[28rem]" />
          <div onClick={handleClose}>
            <Button
              text="Cancel"
              color="bg-coolDarkerGreen max-w-[28rem] ml-4"
            />
          </div>
        </div>
      </form>
    </div>
    </div>
  );
}

function EditAddress({ handleClose }) {
  const [addresses, setAddresses] = useState({
    billingAddress: null,
    shippingAddress: null,
  });
  const addressData = {
    billingAddress: "971 Sherman Brock Cir, Newmarket, ON, CANADA, L3X 0G7",
    shippingAddress: "971 Sherman Brock Cir, Newmarket, ON, CANADA, L3X 0G7",
  };

  const handleChangeAddress = (e) => {
    e.preventDefault();
    if (addresses.billingAddress && addresses.shippingAddress) {
      console.log(addresses);

      //proceed
    }
  };

  const handleChange = (e) => {
    setAddresses({ ...addresses, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setAddresses({
      billingAddress: addressData?.billingAddress,
      shippingAddress: addressData?.shippingAddress,
    });
  }, [addressData?.billingAddress, addressData?.shippingAddress]);
  const [selected, setSelected] = useState(false);

  return (
    <div className="w-full max-w-[25rem] sm:min-w-[300px] md:min-w-[500px] ">
      <div className="mb-4">
        <ModalHeading color="coolDarkerGreen" text=" Edit  Address" />
      </div>
      <form onSubmit={handleChangeAddress}>
        <div className="mx-auto flex flex-col">
          <div className="mb-5">
            <label
              htmlFor="shippingAddress"
              className="text-coolDarkerGreen font-semibold"
            >
              Shipping Address
            </label>
            <div className="flex items-center mt-4">
              <button
                onClick={() => setSelected(!selected)}
                type="button"
                className={`${selected
                  ? "bg-coolDarkGreen border border-white"
                  : "border border-coolDarkGreen"
                  } rounded h-8 px-1 mr-2`}
              >
                <Checkmark color="white" />
              </button>
              <p className="text-coolBlack ml-2 text-sm md:text-[15px]">
                {addressData.shippingAddress}
              </p>
            </div>
            <div className="flex items-center mt-4">
              <button
                onClick={() => setSelected(!selected)}
                type="button"
                className={`${selected
                  ? "bg-coolDarkGreen border border-white"
                  : "border border-coolDarkGreen"
                  } rounded h-8 px-1 mr-2`}
              >
                <Checkmark color="white" />
              </button>
              <p className="text-coolBlack ml-2 text-sm md:text-[15px]">
                {addressData.shippingAddress}
              </p>
            </div>
            <div className="flex items-left mt-4">
              <LinkTypeBtn text="Delete" color="text-coolDarkerGreen " />
              <div className="ml-auto">
                <LinkTypeBtn
                  text="Add Shipping Address"
                  color="text-coolDarkerGreen "
                />
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="shippingAddress"
              className="text-coolDarkerGreen font-semibold"
            >
              Billing Address
            </label>
            <div className="flex items-center mt-4">
              <button
                onClick={() => setSelected(!selected)}
                type="button"
                className={`${selected
                  ? "bg-coolDarkGreen border border-white"
                  : "border border-coolDarkGreen"
                  } rounded h-8 px-1 mr-2`}
              >
                <Checkmark color="white" />
              </button>
              <p className="text-coolBlack ml-2 text-sm md:text-[15px]">
                {addressData.shippingAddress}
              </p>
            </div>
            <div className="flex items-center mt-4">
              <button
                onClick={() => setSelected(!selected)}
                type="button"
                className={`${selected
                  ? "bg-coolDarkGreen border border-white"
                  : "border border-coolDarkGreen"
                  } rounded h-8 px-1 mr-2`}
              >
                <Checkmark color="white" />
              </button>
              <p className="text-coolBlack ml-2 text-sm md:text-[15px]">
                {addressData.shippingAddress}
              </p>
            </div>
            <div className="flex items-left mt-4">
              <LinkTypeBtn text="Delete" color="text-coolDarkerGreen " />
              <div className="ml-auto">
                <LinkTypeBtn
                  text="Add Billing Address"
                  color="text-coolDarkerGreen "
                />
              </div>
            </div>
          </div>
          <div className="flex mt-4 space-x-4 items-center">
            <Button text="Save" color="bg-coolDarkerGreen" />
            <Button
              onClick={handleClose}
              text="Cancel"
              color="bg-coolDarkerGreen"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

function AddAddress({ handleClose, type }) {
  const [addresses, setAddresses] = useState({
    billingAddress: null,
    shippingAddress: null,
  });
  const addressData = {
    billingAddress: "971 Sherman Brock Cir, Newmarket, ON, CANADA, L3X 0G7",
    shippingAddress: "971 Sherman Brock Cir, Newmarket, ON, CANADA, L3X 0G7",
  };

  const handleChangeAddress = (e) => {
    e.preventDefault();
    if (addresses.billingAddress && addresses.shippingAddress) {
      console.log(addresses);

      //proceed
    }
  };

  const handleChange = (e) => {
    setAddresses({ ...addresses, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setAddresses({
      billingAddress: addressData?.billingAddress,
      shippingAddress: addressData?.shippingAddress,
    });
  }, [addressData?.billingAddress, addressData?.shippingAddress]);
  return (
    <div className="w-full max-w-[25rem] sm:min-w-[300px] md:min-w-[500px] ">
      <div className="mb-4">
        <ModalHeading
          text={Add`${type === "addShippingAddress" ? "Shipping" : "Billing"
            }Address`}
        />
      </div>
      <form onSubmit={handleChangeAddress}>
        <div className=" mx-auto  flex flex-col">
          <div className="mb-5">
            <label
              htmlFor="houseOrAptNo"
              className="text-coolDarkerGreen font-semibold"
            >
              House / Apt No. <span className="text-coolOrange">*</span>
            </label>
            <input
              required
              minLength={16}
              maxLength={16}
              id="houseOrAptNo"
              className=" mt-2 rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 uppercase text-coolBlack tracking-tight w-full"
              name="houseOrAptNo"
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="streetAddress"
              className="text-coolDarkerGreen font-semibold"
            >
              Street Address <span className="text-coolOrange">*</span>
            </label>
            <textarea
              required
              minLength={16}
              maxLength={16}
              id="streetAddress"
              className="min-h-[80px] mt-2 max-w-[100%] rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 uppercase text-coolBlack tracking-tight w-full"
              name="streetAddress"
              onChange={handleChange}
            />
          </div>

          <div className="flex space-x-2">
            <div className="mb-5 flex-1">
              <label
                htmlFor="City"
                className="text-coolDarkerGreen font-semibold"
              >
                City <span className="text-coolOrange">*</span>
              </label>
              <input
                required
                minLength={16}
                maxLength={16}
                id="City"
                className=" mt-2 rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 uppercase text-coolBlack tracking-tight w-full"
                name="city"
                onChange={handleChange}
              />
            </div>
            <div className="mb-5 flex-1">
              <label
                htmlFor="state"
                className="text-coolDarkerGreen font-semibold"
              >
                State / Province <span className="text-coolOrange">*</span>
              </label>
              <input
                required
                minLength={16}
                maxLength={16}
                id="state"
                className=" mt-2 rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 uppercase text-coolBlack tracking-tight w-full"
                name="state"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="mb-5 flex-1">
              <label
                htmlFor="country"
                className="text-coolDarkerGreen font-semibold"
              >
                Country <span className="text-coolOrange">*</span>
              </label>
              <input
                required
                minLength={16}
                maxLength={16}
                id="country"
                className=" mt-2 rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 uppercase text-coolBlack tracking-tight w-full"
                name="country"
                onChange={handleChange}
              />
            </div>
            <div className="mb-5 flex-1">
              <label
                htmlFor="postcode"
                className="text-coolDarkerGreen font-semibold"
              >
                Post Code <span className="text-coolOrange">*</span>
              </label>
              <input
                required
                minLength={16}
                maxLength={16}
                id="postcode"
                className=" mt-2 rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 uppercase text-coolBlack tracking-tight w-full"
                name="postcode"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-8 mt-4 flex items-center space-x-2">
            <input type="checkbox" name="checked" id="checkbox" />
            <label htmlFor="checkbox">
              is {type === "addShippingAddress" ? "Billing" : "Shipping"}{" "}
              Address same as{" "}
              {type === "addShippingAddress" ? "Shipping" : "Billing"} Address?
            </label>
          </div>
        </div>
        <div className="flex items-left">
          <Button text="Save" color="bg-coolOrange max-w-[28rem]" />
          <div
            onClick={handleClose}
            className="ml-2 cursor-pointer py-2 px-8 rounded-md text-sm lg:text-[17px] bg-coolOrange text-white mr-4"
          >
            Cancel
          </div>
        </div>
      </form>
    </div>
  );
}

function SignInSuccess() {
  return (
    <div className="w-full space-y-4 md:space-y-6 lg:space-y-8 max-w-[25rem] sm:min-w-[300px] md:min-w-[500px] ">
      <ModalHeading
        color="coolDarkerGreen text-center"
        text="Thank You for Your Registration"
      />
      <p className="text-md text-coolBlack text-center text-xs md:text-base md:max-w-[93%] mx-auto">
        Lovie Aurora has sent an activation letter to your email. Please login
        your email and complete the account activation process.{" "}
      </p>
      <div className="flex flex-col space-y-4 md:space-y-6 lg:space-y-8">
        <Button
          color="bg-coolDarkerGreen w-fit mx-auto text-xs md:text-base"
          text="Resend Confirmation Letter"
          padding="py-2.5 px-4"
        />
        <Button
          color="bg-coolDarkerGreen w-fit mx-auto text-xs md:text-base"
          text="Invite Your Friends / Family to Get 10% Off "
          padding="py-2.5 px-4"
        />
        <div className="flex border w-full rounded-md border-coolBlack">
          <input
            type="text"
            className="flex-1 py-1 md:py-2 w-full px-2 outline-none border-none rounded-md"
            name=""
            placeholder="example@email.com"
            id=""
          />
          <div className="bg-coolDarkerGreen flex items-center cursor-pointer hover:opacity-60 text-white px-4 text-xs md:text-md">
            Send
          </div>
        </div>
      </div>
    </div>
  );
}
function LoginPopup() {
  return (
    <div className="w-full flex flex-col items-center space-y-4 md:space-y-6 lg:space-y-8 max-w-[25rem] sm:min-w-[300px] md:min-w-[500px] ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={"80"}
        height={"80"}
        viewBox="0 0 73.5 60.75"
      >
        <g
          id="Group_490"
          data-name="Group 490"
          transform="translate(-521.263 -39.906)"
        >
          <g
            id="Group_228"
            data-name="Group 228"
            transform="translate(521.263 39.906)"
          >
            <g
              id="Artwork_5"
              data-name="Artwork 5"
              transform="translate(36.75 30.375)"
            >
              <path
                id="Path_220"
                data-name="Path 220"
                d="M64.33,24.751l-7.789,7.791L55.411,33.67H18.094l-1.132-1.132L9.174,24.751A11.015,11.015,0,0,1,24.751,9.174l7.787,7.789,4.212,4.212,4.212-4.212,7.787-7.789A11.016,11.016,0,0,1,64.33,24.751M36.75,52.33l-12.7-12.707H49.457ZM68.537,4.962a16.989,16.989,0,0,0-24,0L36.75,12.751,28.963,4.962a16.971,16.971,0,0,0-24,24L9.671,33.67H5.07v5.953H15.625L36.75,60.75,57.875,39.623H68.434V33.67h-4.6l4.707-4.708a16.988,16.988,0,0,0,0-24"
                transform="translate(-36.75 -30.375)"
                fill={"#337357"}
              />
            </g>
          </g>
        </g>
      </svg>
      <ModalHeading
        color="coolDarkerGreen text-center"
        text="Sign in to send and recieve messages."
      />
      <div className="flex flex-col space-y-4 md:space-y-4 lg:space-y-6">
        <Link href="/auth/signin">
          <Button
            color="bg-coolDarkerGreen w-fit mx-auto text-xs md:text-base"
            text="Sign In"
            padding="py-2.5 px-4"
          />
        </Link>
        <div className="justify-center flex items-center text-sm text-coolBlack space-x-2">
          Don't have an account ?{" "}
          <Link href="/auth/signup">
            <a className="font-semibold ml-1"> Sign Up</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

const LinkTypeBtn = ({ color, text }) => {
  return <p className={`${color} text-sm hover:underline cursor-pointer`}>{text}</p>;
};
export default BuyerPupups;

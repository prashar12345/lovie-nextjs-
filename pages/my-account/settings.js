import React, { useState, useEffect } from "react";
import AppLayout from "../../components/layout/AppLayout";
import { Checkmark } from "react-ionicons";
import { buyerPopup, createProfilePopup } from "../../atoms/popup";
import { useRecoilState } from 'recoil'
import BuyerPopups from '../../components/popups/BuyerPupups'
import CreateProfile from '../../components/popups/ProfilePopup'
import { getFromStorage } from '../../functions/getFromStorage'
import ApiClient from "../../methods/api/apiClient";
const AccountSettings = () => {
  const [selected, setSelected] = useState("");
  const [billingAd, setBillingAd] = useState(false);
  const [shippingAd, setShippingAd] = useState(false);
  const [terms, setTerms] = useState(false);
  const [buyerPopupData, setBuyerPopupData] = useRecoilState(buyerPopup)
  const [profileData, setProfileData] = useRecoilState(createProfilePopup)
  const [carddata, setcardData] = useState()
  const [user, setuser] = useState()
  useEffect(() => {
    if (getFromStorage('userdata')) {
      let user = JSON.parse(getFromStorage('userdata'))
      setuser(user)
    }
    ApiClient.get('cards').then(res => {
      if (res.success) {
        setcardData(res.data)
      }
    })
  }, [])
  const changePass = () => {
    setBuyerPopupData({ ...buyerPopupData, type: 'changePassword', open: true })
  }
  const editAddress = () => {
    setBuyerPopupData({ ...buyerPopupData, type: 'editAddress', open: true })

  }
  const addCard = () => {
    setBuyerPopupData({ ...buyerPopupData, type: 'addCard', open: true })

  }
  const editCard = () => {
    setBuyerPopupData({ ...buyerPopupData, type: 'changeCard', open: true })

  }
  const editProfile = () => {
    setProfileData({ ...buyerPopupData, type: 'edit', show: true })
  }
  return (
    <AppLayout>
      <BuyerPopups />
      <CreateProfile />
      <div className="flex  text-coolBlack flex-col mt-6">
        <h1 className="text-xl md:text-4xl text-center font-semibold text-coolDarkerGreen">
          Your Account
        </h1>
        {/* ITEMS */}
        <div className="rounded-lg shadow-xl bg-[#FDFDFD] py-10 md:py-20 px-4 md:px-20 mt-10">
          <div className="flex gap-10 flex-col md:flex-row justify-between">
            <div className="flex-1">
              <div className=" pb-2">
                <h3 className=" font-bold text-[18px]  text-coolDarkerGreen">
                  Personal Details
                </h3>
              </div>
              <div className="flex justify-between mt-4 ">
                <div>
                  <p className="mb-1 text-coolBlack">Name:</p>
                  <p className="mb-1 text-coolBlack">Customer No.:</p>
                  <p className="mb-1 text-coolBlack">Email:</p>
                  {/* <p className="text-textColor">Date of Birth:</p> */}
                </div>
                <div className="flex flex-col items-start">
                  <input
                    className="mb-1 text-coolBlack bg-[#FDFDFD] focus:outline-none"
                    placeholder="Suzy Butler"
                    defaultValue={user && user.fullName}
                  />
                  <input
                    className="mb-1 text-coolBlack bg-[#FDFDFD] focus:outline-none"
                    placeholder="012345"
                    defaultValue={user && user.customerNo}
                  />
                  <input
                    className="mb-1 text-coolBlack bg-[#FDFDFD] focus:outline-none"
                    placeholder="suzybutler@gmail.com"
                    defaultValue={user && user.email}
                  />
                  {/* <input
                    className="text-textColor bg-[#FDFDFD] focus:outline-none"
                    placeholder="02 / 12 / 1981"
                    defaultValue="02 / 12 / 1981"
                  /> */}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={editProfile} className="text-coolDarkerGreen text-sm mt-6 hover:underline">
                  edit
                </button>
                <button onClick={changePass} className="text-coolDarkerGreen text-sm mt-6 hover:underline">
                  change password
                </button>
              </div>
            </div>
            <div className="flex-1">
              <div className=" pb-2">
                <h3 className=" font-bold text-[18px]  text-coolDarkerGreen">
                  Payment Methods
                </h3>
              </div>
              {
                carddata?.map(itm => {
                  return <div className="flex justify-between mt-4">
                    <div className="font-semubild">
                      <p className="mb-1 text-coolBlack">Name on card:</p>
                      <p className="mb-1 text-coolBlack">Card Number:</p>
                      <p className="mb-1 text-coolBlack">Expiry Date:</p>
                      {/* <p className="text-textColor">CVC:</p> */}
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="mb-1 text-coolBlack">Suzy Butler</p>
                      <p className="mb-1 text-coolBlack">XXXX XXXX XXXX {itm.last4}</p>
                      <p className="mb-1 text-coolBlack">{itm.exp_month}/{itm.exp_year}</p>
                      {/* <p className="text-textColor">123</p> */}
                    </div>
                    <div className="flex items-center">
                      <button onClick={editCard} className="text-coolDarkerGreen text-sm mt-6 hover:underline mr-4">
                        edit
                      </button>

                    </div>
                  </div>
                })
              }

              <button onClick={addCard} className="text-coolDarkerGreen text-sm mt-6 hover:underline">
                add new card
              </button>
            </div>
          </div>
          <div className="flex gap-10 flex-col md:flex-row justify-between mt-20">
            <div className="flex-1">
              <div className=" pb-2">
                <h3 className=" font-bold text-[18px]  text-coolDarkerGreen">
                  Addresses
                </h3>
              </div>
              <div className="mt-4 flex">
                <div className="flex flex-1 flex-col">
                  <h1 className="text-[16px] mb-4 font-semibold text-coolDarkerGreen">Shipping Address</h1>
                  <p className="mb-1 text-coolBlack">26 Jamway Road</p>
                  <p className="mb-1 text-coolBlack">Twearlsodn</p>
                  <p className="mb-1 text-coolBlack">Convetry,</p>
                  <p className="mb-1 text-coolBlack">Warwickshire</p>
                  <p className="text-textColor mb-4">CV1 678</p>
                  <button onClick={editAddress} className="w-fit text-coolDarkerGreen text-sm hover:underline mr-2">
                    edit
                  </button>
                </div>
                <div className="flex flex-1 flex-col">
                  <h1 className="text-[16px] mb-4 font-semibold text-coolDarkerGreen">Billing Address</h1>
                  <p className="mb-1 text-coolBlack">26 Jamway Road</p>
                  <p className="mb-1 text-coolBlack">Twearlsodn</p>
                  <p className="mb-1 text-coolBlack">Convetry,</p>
                  <p className="mb-1 text-coolBlack">Warwickshire</p>
                  <p className="text-textColor mb-4">CV1 678</p>
                  <button onClick={editAddress} className="w-fit text-coolDarkerGreen text-sm hover:underline mr-2">
                    edit
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className=" pb-2">
                <h3 className=" font-bold text-[18px]  text-coolDarkerGreen">
                  Order History
                </h3>
              </div>
              <table className="w-full mt-4">
                <thead>
                  <tr className="text-left text-sm my-2">
                    <th className="pb-1 text-xs md:text-base font-bold text-coolDarkerGreen">
                      Order Date:
                    </th>
                    <th className="pb-1 text-xs md:text-base font-bold text-coolDarkerGreen">
                      Order No:
                    </th>
                    <th className="pb-1 text-xs md:text-base font-bold text-coolDarkerGreen">
                      Tracking No:
                    </th>
                    <th className="pb-1 text-xs md:text-base font-bold text-coolDarkerGreen">
                      Status
                    </th>
                    <th className="pb-1 text-xs md:text-base font-bold text-coolDarkerGreen">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-xs md:text-sm text-coolBlack pt-4">
                      12/09/2021
                    </td>
                    <td className="text-xs md:text-sm text-coolBlack pt-4">
                      #12345
                    </td>
                    <td className="text-xs md:text-sm text-coolBlack pt-4">
                      #54321
                    </td>
                    <td className="text-xs md:text-sm text-coolBlack pt-4">
                      Delivered
                    </td>
                    <td className="text-xs md:text-sm text-coolBlack pt-4">
                      $123.00
                    </td>
                  </tr>

                  <tr>
                    <td className="text-xs md:text-sm text-coolBlack pt-4">
                      12/09/2021
                    </td>
                    <td className="text-xs md:text-sm text-coolBlack pt-4">
                      #12345
                    </td>
                    <td className="text-xs md:text-sm text-coolBlack pt-4">
                      #54321
                    </td>
                    <td className="text-xs md:text-sm text-coolBlack pt-4">
                      Delivered
                    </td>
                    <td className="text-xs md:text-sm text-coolBlack pt-4">
                      $123.00
                    </td>
                  </tr>

                  <tr>
                    <td className="text-xs md:text-sm text-coolBlack pt-4">
                      12/09/2021
                    </td>
                    <td className="text-xs md:text-sm text-coolBlack pt-4">
                      #12345
                    </td>
                    <td className="text-xs md:text-sm text-coolBlack pt-4">
                      #54321
                    </td>
                    <td className="text-xs md:text-sm text-coolBlack pt-4">
                      Delivered
                    </td>
                    <td className="text-xs md:text-sm text-coolBlack pt-4">
                      $123.00
                    </td>
                  </tr>

                  <tr>
                    <td className="text-xs md:text-sm text-coolBlack pt-4">
                      12/09/2021
                    </td>
                    <td className="text-xs md:text-sm text-coolBlack pt-4">
                      #12345
                    </td>
                    <td className="text-xs md:text-sm text-coolBlack pt-4">
                      #54321
                    </td>
                    <td className="text-xs md:text-sm text-coolBlack pt-4">
                      Delivered
                    </td>
                    <td className="text-xs md:text-sm text-coolBlack pt-4">
                      $123.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 justify-between mt-20">
            <div className="flex-1">
              <div className="border-b border-gray-200 pb-2">
                <h3 className=" font-bold text-[18px]  text-coolDarkerGreen">
                  Contact Preferences
                </h3>
              </div>
              <div className="flex items-center mt-4">
                <button
                  type="button"
                  onClick={() => setTerms(!terms)}
                  className={`${terms
                    ? "bg-coolDarkGreen border border-white"
                    : "border border-coolDarkGreen"
                    } rounded-md`}
                >
                  <Checkmark color="white" />
                </button>
                <p className="text-coolBlack ml-2 text-xs">
                  Yes, I want to receive the Lovie Aurora newsletter, as well as
                  hear about special offers, events, news and updates
                </p>
              </div>
              <button className="text-white bg-coolDarkGreen py-2 px-4 hover:opacity-60 text-sm mt-6 rounded-[4px]">
                Update Preferences
              </button>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default AccountSettings;

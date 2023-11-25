import React, { useContext, useState, useEffect } from "react";
import ShippingInputs from "./ShippingInputs";
import JoinMailingInput from "./JoinMailingInput";
import Payment from "./Payment"
import Button from "../inputs/Button";
import { useRouter } from "next/router";
import Link from "next/link";
import ApiClient from '../../methods/api/apiClient'
import { toast } from "react-toastify";
import { IoMdTrash } from 'react-icons/io'
import { UserContext } from '../../pages/_app'

const CheckoutForm = ({ cartLis }) => {

  const router = useRouter();
  const { costomber, priceto } = useContext(UserContext);
  const [form, setform] = useState({})
  const [cardnumber, setcardnumber] = useState()
  const [catrid, setcatrid] = useState(false)
  const [useid, setuseid] = costomber;
  // const [Ite, setcartItems] = priceto;
  // const [totalpri, settotalpri] = useState()
  // const [guestTotal,setguestTotal]=useState()

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


  const total = (cartLis?.reduce((total, item) => total + (item.product?.price * item.quantity), 0))
  // console.log(Ite,"cardnumber");
  useEffect(() => {
if(localStorage.getItem('userdata')){
  filterBlog()
}

  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()
   let value = {
    card_id:catrid,
    order_detail:cartLis,
    customer_id:useid.customer_id,
    payPrice:total,
    shippingDetail:{
      first_name: form.first_name,
      last_name: form.last_name,
      address: form.address,
      city: form.city,
      zipCode: form.zipCode,
      states: form.states,
      country: form.country,
    },
    billingDetail:{"Address":"mohali","state":"punjab","dist":"mohali","country":"India","pincode":"123645"},
    deliveryCharge:"50",
    gst:"10",
    userEmail: form.email,
   // payMode,
    };


    ApiClient.post(`checkout`, value).then(res => {

      if (res && res.success == true) {
        toast.success('Payment done successfully.')
        console.log();
        router.push("/confirmation")

      }
      else {
        toast.error(res?.message)
        router.push("/checkout");
      }

    })

  };

  const filterBlog = () => {
    ApiClient.get('cards').then(res => {
      if (res?.success) {
        setcardnumber(res.data)
      }
    })
  }
  const deleteItem = (card_id) => {
    if (window.confirm("Do you want to delete this")) {

      ApiClient.delete('delete/card', { card_id: card_id }).then(res => {
        if (res?.success) {
          filterBlog()
        }
      })
    }
  }



  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="border-b border-coolBlack mt-10 pb-4 flex justify-between items-center">
          <h2 className="uppercase tracking-[-1.5px] font-cool text-2xl font-medium w-[12rem]">
            Delivery
          </h2>
          <p className="text-xs text-coolDarkGreen">Required</p>
        </div>
        <div className="flex flex-col mt-6">
          <label className="text-xs mb-1">Country</label>
          <select
            className="border border-coolBlack rounded-md px-2 py-1.5 text-sm"
            // value={country}
            id="country"
            onChange={e => setform({ ...form, country: e.target.value })}
          >
            <option value="United Kingdom">United Kingdom</option>
            <option value="Germany">Germany</option>
            <option value="Spain">Spain</option>
            <option value="France">France</option>
            <option value="Italy">Italy</option>
          </select>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-col w-full mr-3">
            <label className="text-xs mb-1">First Name</label>
            <input
              className="border border-coolBlack rounded-md px-2 py-1.5 text-sm"
              type="text"
              required
              onChange={e => setform({ ...form, first_name: e.target.value })}
              id="first_name"
            />
          </div>
          <div className="flex flex-col w-full ml-3">
            <label className="text-xs mb-1">Last Name</label>
            <input
              className="border border-coolBlack rounded-md px-2 py-1.5 text-sm"
              type="text"
              required
              onChange={e => setform({ ...form, last_name: e.target.value })}
              id="last_name"
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="flex flex-col w-full mr-3">
            <label className="text-xs mb-1">Address</label>
            <input
              className="border border-coolBlack rounded-md px-2 py-1.5 text-sm"
              type="text"
              required
              onChange={e => setform({ ...form, address: e.target.value })}
              id="address"
            />
          </div>
          <div className="flex items-start justify-between mt-4">
            <div className="flex flex-col w-full mr-3">
              <label className="text-xs mb-1">City</label>
              <input
                className="border border-coolBlack rounded-md px-2 py-1.5 text-sm"
                type="text"
                required
                onChange={e => setform({ ...form, city: e.target.value })}
                id="city"
              />
              <label className="text-xs mb-1 mt-4">ZIP / Post Code</label>
              <input
                className="border border-coolBlack rounded-md px-2 py-1.5 text-sm"
                type="text"
                required
                maxLength={6}
                onChange={e => {setform({ ...form, zipCode: e.target.value }),isNumber(e)}}
                id="zipCode"
              />
            </div>
            <div className="flex flex-col w-full ml-3">
              <label className="text-xs mb-1">State </label>
              <input
                className="border border-coolBlack rounded-md px-2 py-1.5 text-sm"
                type="text"
                required
                onChange={e => setform({ ...form, states: e.target.value })}
                id="states"
              />
            </div>
          </div>
        </div>
      </div>
      <ShippingInputs />
      {/* <PaymentInputs /> */}
      <Payment filterBlog={filterBlog} />

      <label className="card_number">

        {
          cardnumber?.map((itm) => {
            return <p>
              <div className="carsnumclss">
                {/* <input
                  className="border border-coolBlack rounded-md px-2 py-1.5 text-sm mr-1"
                  type="checkbox"
                  onClick={e => setcatrid(itm.card_id)}
          
                /> */}
                <div class="mainpayment">
                <input className="mr-2 mt-1" type="radio" id="html" name="fav_language" value="HTML"  onClick={e => setcatrid(itm.card_id)}></input>

                <p className="mt-1">Card Number:- XXXX XXXX XXXX {itm.last4}</p>
                </div>
                <div className="trashdivcls mt-1">
                <IoMdTrash onClick={() => deleteItem(itm.card_id)} className="detelebtncls"/>
                </div>
              </div>
              {/* <a className="linkclass mx-2" title="Delete" onClick={() => deleteItem(itm.id)}><i className="fa fa-trash"></i></a> */}
            </p>

          })
        }
      </label>

      <div>
        <div className="border-b border-coolBlack mt-10 pb-4 flex justify-between items-center">
          <h2 className="uppercase tracking-[-1.5px] font-cool text-2xl font-medium ">
            Contact Information
          </h2>
          <p className="text-xs text-coolDarkGreen">Required</p>
        </div>
        <div className="flex flex-col w-full mr-3 mt-4">
          <label className="text-xs mb-1">Email Address</label>
          <input
            className="border border-coolBlack rounded-md px-2 py-1.5 text-sm"
            required
            onChange={e => setform({ ...form, email: e.target.value })}
            id="email"
          />
        </div>
        <p className="text-coolBlack mt-4 text-xs underline">
          We'll only contact you regarding your order
        </p>
      </div>

      <JoinMailingInput />

      <Button
        // TODO: NEEDS TO BE FIXED
        type="submit"
        //onClick={() => router.push("/confirmation")}
        text="Confirm & Purchase"
        color="bg-coolDarkGreen text-xl"
        margin="mt-10"
      />
      <p className="text-xs text-coolDarkGreen mt-4 font-light">
        By placing an order, you affirm you have read, understood and consent to
        our{" "}
        <Link href="/privacy-policy">
          <a className="font-medium">Privacy Policies</a>
        </Link>{" "}
        and{" "}
        <Link href="/terms-of-conditions">
          <a className="font-medium">Terms Of Conditions</a>
        </Link>
      </p>
    </form>
  );
};

export default CheckoutForm;

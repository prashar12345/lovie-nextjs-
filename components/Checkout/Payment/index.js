import {React,useState } from "react";
import Card from '../../popups/Card'
//import { editprofilepopup } from "../../../atoms/popup";
import { ordercard } from "../../../atoms/popup";
import { useRecoilState } from "recoil";


function Example({filterBlog}) {
    const [profi, setProfi] = useRecoilState(ordercard);

    const editProfile = () => {
        setProfi({ ...profi, type: "ordercard", show: true });
      };
 
  return (
    <>
    <Card filterBlog={filterBlog}/>
      <p
           className="text-coolDarkGreen text-sm font-semibold hover:underline"
            // onClick={editProfile}
          >
            <button onClick={editProfile} className="addcart_btn addcart_btn mt-5 mb-5" type="button">Add card</button>
          </p>
    </>
  );
}

export default Example;
import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const loginModal = atom({ 
  key: "loginState",
  default: false,
});


export const paypalpopup = atom({
  key: "paypal",
  default: false,
});

export const Paypaldraw = atom({
  key: "Paypal Withdraw",
  default: false,
});

export const bankWithdraw = atom({
  key: "bank withdraw",
  default: false,
});

export const createProfilePopup = atom({
  key: "createProfilePopup",
  default: {
    type: 'create',
    show: false
  },
});

export const editprofilepopup = atom({
  key: "editprofilepopup",
  default: {
    type: 'edit',
    show: false
  },
});
export const guestloginpop = atom({
  key: "guestloginpop",
  default: {
    type: 'guestpopup',
    show: false
  },
});
export const ordercard = atom({
  key: "ordercard",
  default: {
    type: 'ordercard',
    show: false
  },
});
export const OrderPopup = atom({
  key: "OrderPopup",
  default: {
    type: 'cancel',
    show: false
  },
});
export const reviewPopup = atom({
  key: "reviewPopup",
  default: false
});
export const sellership = atom({
  key: "sellership",
  default: false
});
export const buyerPopup = atom({
  key: "BuyerPOPUP",
  default: {
    type: 'changePassword',
    open: false
  }
});
export const scorePopup = atom({
  key: "scorePopup",
  default: {
    type: 'handmade',
    open: false
  }
});
export const financePopup = atom({
  key: "financePopup",
  default: {
    type: 'GoToPaypal',
    open: false
  }
});
export const sellerPopup = atom({
  key: "sellerPopup",
  default: {
    type: 'ApplyForMoreUnits',
    open: false,
    cardData: {},
    accountData: {}
  }
});
export const scoreExplain = atom({
  key: "scoreExplain",
  default: {
    type: 'HS',
    open: false
  }
});


export const variation = atom({
  key: "addVariation",
  default: {
   
    open: false
  }
});
// export const variation1 = atom({
//   key: "addVariation",
//   default: {
   
//     open: false
//   }
// });
// export const variation = atom({
//   key: "addVariation",
//   default: {
   
//     open: false
//   }
// });


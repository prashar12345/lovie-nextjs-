
import Layout from 'antd/lib/layout/layout'
import React from 'react'
// import BigCartIcon from "../components/icons/BigCartIcon";

function OrderListing() {
    return (
        <Layout>

            {/* <div className='maindiv'>
                <div className='cardcls '>
                    <div className='imgcls'>
                        <img src="http://74.208.206.18:4600//images/products/5d475a6d-7366-470d-a9a2-cef94e3052a81669109057613.jpeg" className="orlistimg" />
                    </div>
                    <div className='detaildiv'>
                        <h3 className='itemscls'>items</h3>
                        <p className='pricecls'>price</p>
                        <p className='reviewcls'>review</p>

                    </div>
                </div>

            </div> */}

            <div className='  mt-6 mx-auto md:px-[9.52655%] px-4'>
                <div className='my-14'>
                <h1 class="text-coolBlack uppercase tracking-[-2.4px] font-sans text-5xl font-bold ">Order Product</h1>

                  <div className='mt-10 text-coolBlack'>

                           <div className='flex flex-col md:flex-row gap-10 lg:gap-20 place-items-start'>
    
<div className='flex-1 w-full basis-3/5'>


                  


                            <div class="col-span-2 p-4 shadow border rounded-4 mb-5 mt-5 ml-5">
                                <div>
                                    <div class="flex items-start">
                                        <button class="hover:bg-gray-50 text-coolBlack transition duration-150 mr-2 rounded">
                                        </button>
                                        <div class="relative card-img">
                                            <img src="http://74.208.206.18:4600/images/products/eb09e9e5-66c9-453f-b9a6-bb37f6af29791669029902917.jpeg" objectfit="cover" layout="fill" alt="" />
                                        </div>
                                        <div class="flex flex-col md:flex-row items-start justify-between w-full ml-4 lg:ml-10">
                                            <div class="-mt-[3px]">
                                                <h3 class="break-all text-[20px] lg:text-[26px] tracking-[-0.05em] font-medium antialiased">Vintage wood calendar with original design</h3><div class="break-all flex items-center gap-2 mt-0.5 mb-2"><div class="flex items-center gap-1"><span height="14px" width="14px" color="#E84414" rotate="0" class="sc-bcXHqe epxxro">
                                                    <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"></path></svg></span>
                                                    <span height="14px" width="14px" color="#E84414" rotate="0" class="sc-bcXHqe epxxro"><svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"></path></svg></span><span height="14px" width="14px" color="#E84414" rotate="0" class="sc-bcXHqe epxxro"><svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"></path></svg></span><span height="14px" width="14px" color="#E84414" rotate="0" class="sc-bcXHqe epxxro"><svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"></path></svg></span><span height="14px" width="14px" color="#E84414" rotate="0" class="sc-bcXHqe epxxro"><svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"></path></svg></span></div><p class="break-all text-xs text-coolBlack">321 reviews</p></div><p class="break-all font-semibold text-xl text-md">$29.99</p>
                                                <div class="flex items-center flex-wrap gap-2 mt-1.5"><p class="font-normal text-sm text-coolBlack">Style: </p><p class="capitalize text-sm text-coolBlack">Color: </p><p class=" text-sm text-coolBlack">Size: </p><p class=" text-sm text-coolBlack">Quantity: 1</p></div></div><div class="md:items-end flex md:flex-col flex-row-reverse items-center md:mt-0 mt-4">
                                                <div class="dropdown cart-dropdown cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z"></path></svg><div class="dropdown-content"><div class="flex mb-3 dropdown-list items-center"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 55.44 55.44"><path id="Path_1610" data-name="Path 1610" d="M10.208,54.44A10.209,10.209,0,0,1,0,44.232V10.208A10.209,10.209,0,0,1,10.208,0H44.232A10.209,10.209,0,0,1,54.44,10.208V44.232A10.209,10.209,0,0,1,44.232,54.44Zm0-28.649a12.629,12.629,0,0,0,4.763,9.64.567.567,0,0,1,.137.68L12.2,41.9a.567.567,0,0,0,.748.771l7.916-3.72a1.139,1.139,0,0,1,.795,0,20.453,20.453,0,0,0,5.557.748v-.022c9.391,0,17.013-6.192,17.013-13.859S36.611,11.931,27.22,11.931,10.208,18.147,10.208,25.791Zm23.817.294a2.268,2.268,0,1,1,2.269,2.268A2.27,2.27,0,0,1,34.025,26.086Zm-9.073,0a2.268,2.268,0,1,1,2.268,2.268A2.269,2.269,0,0,1,24.952,26.086Zm-9.073,0a2.268,2.268,0,1,1,2.268,2.268A2.269,2.269,0,0,1,15.879,26.086Z" transform="translate(0.5 0.5)" fill="#337357" stroke="rgba(0,0,0,0)" stroke-width="1"></path></svg> <span class="ml-2">Chat</span></div><div class="flex mb-3 dropdown-list items-center icon-bg"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="cursor-pointer" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg> <span class="ml-2">Delete</span></div><div class="flex mb-3 dropdown-list items-center icon-bg"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="cursor-pointer" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg> <span class="ml-2">Edit</span></div></div></div></div></div></div></div>
                            </div>
                        


                        
                            <div class="col-span-2 p-4 shadow border rounded-4 mb-5 mt-5 ml-5">
                                <div>
                                    <div class="flex items-start">
                                        <button class="hover:bg-gray-50 text-coolBlack transition duration-150 mr-2 rounded">
                                        </button>
                                        <div class="relative card-img">
                                            <img src="http://74.208.206.18:4600/images/products/eb09e9e5-66c9-453f-b9a6-bb37f6af29791669029902917.jpeg" objectfit="cover" layout="fill" alt="" />
                                        </div>
                                        <div class="flex flex-col md:flex-row items-start justify-between w-full ml-4 lg:ml-10">
                                            <div class="-mt-[3px]">
                                                <h3 class="break-all text-[20px] lg:text-[26px] tracking-[-0.05em] font-medium antialiased">Vintage wood calendar with original design</h3><div class="break-all flex items-center gap-2 mt-0.5 mb-2"><div class="flex items-center gap-1"><span height="14px" width="14px" color="#E84414" rotate="0" class="sc-bcXHqe epxxro">
                                                    <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"></path></svg></span>
                                                    <span height="14px" width="14px" color="#E84414" rotate="0" class="sc-bcXHqe epxxro"><svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"></path></svg></span><span height="14px" width="14px" color="#E84414" rotate="0" class="sc-bcXHqe epxxro"><svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"></path></svg></span><span height="14px" width="14px" color="#E84414" rotate="0" class="sc-bcXHqe epxxro"><svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"></path></svg></span><span height="14px" width="14px" color="#E84414" rotate="0" class="sc-bcXHqe epxxro"><svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"></path></svg></span></div><p class="break-all text-xs text-coolBlack">321 reviews</p></div><p class="break-all font-semibold text-xl text-md">$29.99</p>
                                                <div class="flex items-center flex-wrap gap-2 mt-1.5"><p class="font-normal text-sm text-coolBlack">Style: </p><p class="capitalize text-sm text-coolBlack">Color: </p><p class=" text-sm text-coolBlack">Size: </p><p class=" text-sm text-coolBlack">Quantity: 1</p></div></div><div class="md:items-end flex md:flex-col flex-row-reverse items-center md:mt-0 mt-4">
                                                <div class="dropdown cart-dropdown cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z"></path></svg><div class="dropdown-content"><div class="flex mb-3 dropdown-list items-center"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 55.44 55.44"><path id="Path_1610" data-name="Path 1610" d="M10.208,54.44A10.209,10.209,0,0,1,0,44.232V10.208A10.209,10.209,0,0,1,10.208,0H44.232A10.209,10.209,0,0,1,54.44,10.208V44.232A10.209,10.209,0,0,1,44.232,54.44Zm0-28.649a12.629,12.629,0,0,0,4.763,9.64.567.567,0,0,1,.137.68L12.2,41.9a.567.567,0,0,0,.748.771l7.916-3.72a1.139,1.139,0,0,1,.795,0,20.453,20.453,0,0,0,5.557.748v-.022c9.391,0,17.013-6.192,17.013-13.859S36.611,11.931,27.22,11.931,10.208,18.147,10.208,25.791Zm23.817.294a2.268,2.268,0,1,1,2.269,2.268A2.27,2.27,0,0,1,34.025,26.086Zm-9.073,0a2.268,2.268,0,1,1,2.268,2.268A2.269,2.269,0,0,1,24.952,26.086Zm-9.073,0a2.268,2.268,0,1,1,2.268,2.268A2.269,2.269,0,0,1,15.879,26.086Z" transform="translate(0.5 0.5)" fill="#337357" stroke="rgba(0,0,0,0)" stroke-width="1"></path></svg> <span class="ml-2">Chat</span></div><div class="flex mb-3 dropdown-list items-center icon-bg"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="cursor-pointer" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg> <span class="ml-2">Delete</span></div><div class="flex mb-3 dropdown-list items-center icon-bg"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="cursor-pointer" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg> <span class="ml-2">Edit</span></div></div></div></div></div></div></div>
                            </div>
                     




                    
                            <div class="col-span-2 p-4 shadow border rounded-4 mb-5 mt-5 ml-5">
                                <div>
                                    <div class="flex items-start">
                                        <button class="hover:bg-gray-50 text-coolBlack transition duration-150 mr-2 rounded">
                                        </button>
                                        <div class="relative card-img">
                                            <img src="http://74.208.206.18:4600/images/products/eb09e9e5-66c9-453f-b9a6-bb37f6af29791669029902917.jpeg" objectfit="cover" layout="fill" alt="" />
                                        </div>
                                        <div class="flex flex-col md:flex-row items-start justify-between w-full ml-4 lg:ml-10">
                                            <div class="-mt-[3px]">
                                                <h3 class="break-all text-[20px] lg:text-[26px] tracking-[-0.05em] font-medium antialiased">Vintage wood calendar with original design</h3><div class="break-all flex items-center gap-2 mt-0.5 mb-2"><div class="flex items-center gap-1"><span height="14px" width="14px" color="#E84414" rotate="0" class="sc-bcXHqe epxxro">
                                                    <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"></path></svg></span>
                                                    <span height="14px" width="14px" color="#E84414" rotate="0" class="sc-bcXHqe epxxro"><svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"></path></svg></span><span height="14px" width="14px" color="#E84414" rotate="0" class="sc-bcXHqe epxxro"><svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"></path></svg></span><span height="14px" width="14px" color="#E84414" rotate="0" class="sc-bcXHqe epxxro"><svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"></path></svg></span><span height="14px" width="14px" color="#E84414" rotate="0" class="sc-bcXHqe epxxro"><svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"></path></svg></span></div><p class="break-all text-xs text-coolBlack">321 reviews</p></div><p class="break-all font-semibold text-xl text-md">$29.99</p>
                                                <div class="flex items-center flex-wrap gap-2 mt-1.5"><p class="font-normal text-sm text-coolBlack">Style: </p><p class="capitalize text-sm text-coolBlack">Color: </p><p class=" text-sm text-coolBlack">Size: </p><p class=" text-sm text-coolBlack">Quantity: 1</p></div></div><div class="md:items-end flex md:flex-col flex-row-reverse items-center md:mt-0 mt-4">
                                                <div class="dropdown cart-dropdown cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z"></path></svg><div class="dropdown-content"><div class="flex mb-3 dropdown-list items-center"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 55.44 55.44"><path id="Path_1610" data-name="Path 1610" d="M10.208,54.44A10.209,10.209,0,0,1,0,44.232V10.208A10.209,10.209,0,0,1,10.208,0H44.232A10.209,10.209,0,0,1,54.44,10.208V44.232A10.209,10.209,0,0,1,44.232,54.44Zm0-28.649a12.629,12.629,0,0,0,4.763,9.64.567.567,0,0,1,.137.68L12.2,41.9a.567.567,0,0,0,.748.771l7.916-3.72a1.139,1.139,0,0,1,.795,0,20.453,20.453,0,0,0,5.557.748v-.022c9.391,0,17.013-6.192,17.013-13.859S36.611,11.931,27.22,11.931,10.208,18.147,10.208,25.791Zm23.817.294a2.268,2.268,0,1,1,2.269,2.268A2.27,2.27,0,0,1,34.025,26.086Zm-9.073,0a2.268,2.268,0,1,1,2.268,2.268A2.269,2.269,0,0,1,24.952,26.086Zm-9.073,0a2.268,2.268,0,1,1,2.268,2.268A2.269,2.269,0,0,1,15.879,26.086Z" transform="translate(0.5 0.5)" fill="#337357" stroke="rgba(0,0,0,0)" stroke-width="1"></path></svg> <span class="ml-2">Chat</span></div><div class="flex mb-3 dropdown-list items-center icon-bg"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="cursor-pointer" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg> <span class="ml-2">Delete</span></div><div class="flex mb-3 dropdown-list items-center icon-bg"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="cursor-pointer" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg> <span class="ml-2">Edit</span></div></div></div></div></div></div></div>
                            </div>
                       

                    </div>


                 
                        <div class="flex-1 basis-2/5 flex flex-col w-full lg:max-w-[25rem] border-t border-borderColor pt-4 md:pt-0 md:border-0">
                            <div class="flex items-center justify-between">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="0 0 30.089 40.585">
                                    <path id="Path_1652" data-name="Path 1652" d="M3429.966,7830.584a4.022,4.022,0,0,1-3.966-3.968V7810.75a4.02,4.02,0,0,1,2.728-3.74v-4.192a11.817,11.817,0,1,1,23.634,0v4.192a4.023,4.023,0,0,1,2.728,3.74v15.867a3.968,3.968,0,0,1-3.968,3.968Zm-1.323-19.835v15.867a1.306,1.306,0,0,0,1.323,1.323h21.156a1.3,1.3,0,0,0,1.323-1.323V7810.75a1.3,1.3,0,0,0-1.323-1.32h-21.156A1.305,1.305,0,0,0,3428.643,7810.75Zm2.563-7.932v3.966h18.677v-3.966a9.339,9.339,0,0,0-18.677,0Zm7.356,19.833.916-5.506a2.649,2.649,0,0,1,1.067-5.072,2.662,2.662,0,0,1,2.643,2.645,2.6,2.6,0,0,1-1.578,2.427l.918,5.506Z" transform="translate(-3425.5 -7790.499)" fill="#5B8B76" stroke="rgba(0,0,0,0)" stroke-width="1"></path></svg><p class="product_badge mr-3 undefined text-coolDarkGreen  text-white  tracking-[-0.05em] font-[400]">Secure Payment</p></div>
                            <div class="border-b border-coolBlack mt-10 pb-4 mb-4">
                                <div class="flex justify-between items-center mb-2">
                                    <h3 class="text-md undefined tracking-[-0.05em]  text-coolBlack antialiased font-[500]">Item(s) total:</h3>
                                    <h3 class="text-md undefined tracking-[-0.05em]  text-coolBlack antialiased font-[500]">853.96$</h3>
                                </div>
                                <div class="flex justify-between items-center">
                                    <h3 class="text-md undefined tracking-[-0.05em]  text-coolBlack antialiased font-[500]">Shipping:</h3>
                                    <h3 class="text-md undefined tracking-[-0.05em]  text-coolBlack antialiased font-[500]">0$</h3>
                                </div></div><h3 class="text-3xl text-right">TOTAL: $853.96</h3>
                            <button type="submit" class="mt-8 bg-coolDarkGreen w-full text-md font-semibold  rounded-[7px]  py-2 w-fit px-3 ml-auto hover:bg-opacity-60 transition duration-150  text-md truncate null text-white null">Proceed to Checkout</button><div>
                            </div>
                            <button class="flex items-center bg-coolDarkGreen rounded-md px-4 hover:opacity-80 transition duration-300 text-white text-xs mt-4 self-end"><div class="hidden lg:block">
                                <img src="/icons/van.png" class="invert h-[60px] w-full object-cover mb-2" alt="" />
                            </div>
                                <div class="flex flex-col ml-0 lg:ml-4">
                                    <span class="text-lg font-semibold">Worldwide Returns</span>
                                    <span class="self-start hover:underline lg:self-center text-[0.8rem]">click here for more details</span></div>
                            </button>
                            <button class="flex items-center bg-white border border-coolBlack rounded-md px-2 lg:px-4 py-1.5 lg:py-3 text-xs mt-4 self-end">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 55.098 55.098"><path id="Path_981" data-name="Path 981" d="M27.549,0C12.029,0,0,11.367,0,26.721A26.143,26.143,0,0,0,8.653,46.488,2.221,2.221,0,0,1,9.4,48.057l.149,4.9a2.208,2.208,0,0,0,3.093,1.951L18.1,52.5a2.2,2.2,0,0,1,1.469-.111,29.968,29.968,0,0,0,7.977,1.059C43.07,53.444,55.1,42.075,55.1,26.721S43.07,0,27.549,0M44.09,20.563,36,33.4a4.136,4.136,0,0,1-5.976,1.1L23.591,29.67a1.654,1.654,0,0,0-1.99.006l-8.7,6.6a1.307,1.307,0,0,1-1.9-1.74L19.1,21.7a4.136,4.136,0,0,1,5.976-1.1l6.436,4.828a1.653,1.653,0,0,0,1.99-.006l8.692-6.6a1.308,1.308,0,0,1,1.9,1.741" transform="translate(0 0.002)" fill="#337357" fill-rule="evenodd"></path>
                                </svg>
                                <div class="flex flex-col ml-4 items-start text-coolBlack">
                                    <span>Need help?</span>
                                    <span class="hidden lg:block self-end text-[0.7rem] text-coolBlack underline">Live chat or message us!</span></div>
                            </button>
                        </div>


                  
                    </div>
                </div>

                </div>
            </div>
         


            <div className="flex flex-col items-center justify-center my-24">
                <h1 className="text-5xl uppercase text-coolBlack font-sans font-semibold mb-12">
                    your order
                </h1>
                {/* <BigCartIcon /> */}
                <p className="text-coolBlack antialiased text-md md:text-lg font-light max-w-[38rem] mx-auto my-8">
                    Your order seems to be empty. Let’s change that.
                </p>
                {/* <Button
            
            text="Start Shopping"
            color="bg-coolDarkGreen max-w-[26rem]"
            padding="py-2.5 px-6"
          /> */}
            </div>

        </Layout>
    )


}

export default OrderListing;






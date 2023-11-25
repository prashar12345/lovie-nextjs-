import React from 'react'
import SidebarListItem from './SidebarListItem'
const ChatSidebar = () => {
    return (
        <div style={{
            height: 'inherit',
        }} className=' h-full w-full  overflow-y-scroll'>
            <h1 className='text-lg text-coolBlack font-semibold sticky bg-[#fff] inset-0 p-2 md:p-4 border-b w-full'>Messages</h1>
            {/* sidebar list  */}
            <div className="flex flex-col pb-2" >
                <SidebarListItem />
            </div>
        </div >
    )
}

export default ChatSidebar
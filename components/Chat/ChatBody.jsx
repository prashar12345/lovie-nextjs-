import React from 'react'
import { useRecoilState } from 'recoil'
import { chatState } from '../../atoms/chat'
import { modalState } from '../../atoms/popup'
import ChatFooter from './ChatFooter'
import ChatTopBar from './ChatTopBar'
import Message from './Message'
import PlaceHolderForChat from './PlaceHolderForChat'

const ChatBody = ({ smallScreen }) => {

    const [open, setOpen] = useRecoilState(modalState)

    const [chat, setChat] = useRecoilState(chatState)
    const messages = [
        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

    ]
    return (
        <div style={{
            height: 'inherit',
        }} className='flex flex-col '>
            {chat.showProfiles ? <PlaceHolderForChat /> :
                <>
                    <ChatTopBar smallScreen={smallScreen} />
                    {/* messages  */}
                    <div className="messages  px-8 ml-auto bg-white flex flex-1 flex-col overflow-y-scroll " style={{
                        height: 'inherit'
                    }}>
                        <Message smallScreen={smallScreen} messages={messages} />

                    </div>
                    <ChatFooter smallScreen={smallScreen} />
                </>
            }
        </div >
    )
}

export default ChatBody


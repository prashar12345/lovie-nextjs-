import React from 'react'
import { AttachFileOutlined, EmojiEmotionsOutlined, Mic, Send } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
const ChatFooter = ({ smallScreen }) => {
    return (
        <div className='px-0 md:px-4 py-2 border-t flex items-center justify-center w-full'>
            {smallScreen ?
                <div className="flex  border-2 border-gray-200 flex-1 rounded-lg items-center justify-space  mx-2">
                    <input type="text" placeholder='Start Typing Here...' className='px-4 py-1 flex-1 outline-none' />
                    <IconButton>
                        <EmojiEmotionsOutlined />
                    </IconButton>
                </div> :
                <>
                    <IconButton>
                        <AttachFileOutlined />
                    </IconButton>
                    <div className="flex  border-2 border-gray-200 flex-1 rounded-lg items-center justify-space  mx-2">
                        <input type="text" placeholder='Start Typing Here...' className='px-4 py-1 flex-1 outline-none' />
                        <IconButton>
                            <EmojiEmotionsOutlined />
                        </IconButton>
                    </div>
                    <IconButton>
                        <Mic />
                    </IconButton></>
            }

        </div>
    )
}

export default ChatFooter
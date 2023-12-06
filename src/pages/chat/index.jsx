import { useState } from 'react'
import './index.css'
import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'

function Chats() {
  const [chatVisibility, setChatVisibility] = useState(false)
  const [socket, setSocket] = useState(null)

  return (
    <div className="App">
      {
        chatVisibility ? <Chat socket={socket} /> : <Join setSocket={setSocket} setChatVisibility={setChatVisibility} />
      }
    </div>
  )
}

export default Chats
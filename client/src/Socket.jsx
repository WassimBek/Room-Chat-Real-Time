import io from 'socket.io-client'
const socket = io.connect(`${import.meta.env.VITE_REACT_BASE_URL}`) ;

export default socket ;
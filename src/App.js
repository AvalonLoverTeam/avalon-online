import socket from './utils/socketIO';
import { useState, useEffect } from 'react';

function App() {
    const [user, setUser] = useState({
        sessionID: localStorage.getItem('sessionID') || '',
        userId: '',
        username: '',
    });
    const [isConnected, setIsConnected] = useState(socket.connected);

    function connectSocket() {
        if (!socket.connected) {
            socket.auth = { ...user };
            socket.connect();
        } else {
            console.log(socket.connected);
        }
    }

    useEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true);
        });
        socket.on('disconnect', () => {
            setIsConnected(false);
        });

        socket.on('getUser', (userInfo) => {
            setUser(userInfo);
            localStorage.setItem('sessionID', userInfo.sessionID);
        });

        if (user.sessionID) {
            connectSocket();
        }

        return () => {
            socket.off('connect');
            socket.off('disconnect');
        };
    }, []);

    return (
        <div className="App">
            {!isConnected ? (
                <>
                    <input
                        type="text"
                        placeholder="Insert username"
                        value={user.username}
                        onChange={({ target }) =>
                            setUser((u) => ({
                                ...u,
                                username: target.value,
                            }))
                        }
                    />
                    <button
                        style={{
                            marginLeft: '15px',
                            border: '2px solid black',
                        }}
                        disabled={!user.username}
                        onClick={connectSocket}
                    >
                        Connect!
                    </button>
                </>
            ) : (
                <div>You are connected as {JSON.stringify(user)}!</div>
            )}
        </div>
    );
}

export default App;

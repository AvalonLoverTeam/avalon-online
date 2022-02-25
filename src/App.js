import socket from './utils/socketIO';

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });
    socket.on('disconnect', () => {
      setIsConnected(false);
    });
    // socket.on('message', (data) => {
    //   setLastMessage(data);
    // });
    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  });
  return (
    <div className="App">

    </div>
  );
}

export default App;

import socketio from 'socket.io-client';

const socket = socketio("https://omnistack-10-dev-radar-backend.herokuapp.com", {
    autoConnect: false,
});

function subscribeToNewDevs(subscribeFunction) {
    socket.on('new-dev', subscribeFunction);
}

function connect(latitude, longitude, techs) {
    socket.io.opts.query = {
        latitude,
        longitude,
        techs,
    };

    socket.connect();
}

function disconnect() {
    if (socket.connected)
        socket.disconnect();
}

export {
    connect,
    disconnect,
    subscribeToNewDevs,
};
// Run this on a host server

import net from "net";

const server = net.createServer(socket => {
  console.log(`Tunnel client connected from ${socket.remoteAddress}`);

  
});

server.listen(8192);
console.log(`Tunnel server listening on 8192`);

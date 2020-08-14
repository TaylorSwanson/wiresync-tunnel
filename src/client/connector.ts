// Run this on the rpi

import net from "net";

const hosts = {}

export function connector(hostname, socket: NodeJS.Socket) {
  // Proxy requests to remote server
  const proxySocket = net.connect(22, hosts[hostname], () => {
    proxySocket.on("data", data => {
      // Proxy straight through
      socket.write(data);
    })
  })
};

export function register(hostname, ip) {
  hosts[hostname] = ip;
  console.log(`Registered host ${hostname} to ${ip}`)
};

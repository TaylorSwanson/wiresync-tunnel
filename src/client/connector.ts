// Run this on the rpi

import net from "net";

const hosts = {};

export function register(hostname, ip, socket: NodeJS.Socket) {
  hosts[hostname] = { ip, socket };
  console.log(`Registered host ${hostname} to ${ip}, saved socket`)
  
  // Proxy requests to remote server
  const proxySocket = net.connect(22, hosts[hostname].ip, () => {
    console.log(`Client connected to proxy socket located at ${hosts[hostname].ip}`);

    proxySocket.on("data", data => {
      // Proxy straight through
      socket.write(data);
      console.log("ps", data.toString("utf8"));
    });
    socket.on("data", data => {
      // Now bind the other way
      proxySocket.write(data);
      console.log("s", data.toString("utf8"));
    });

    // @ts-ignore
    socket.setTimeout(0);
    proxySocket.setTimeout(0);

    // Don't crash for useless reasons
    socket.on("timeout", () => {});
    socket.on("error", () => {});
    socket.on("close", () => {});
    socket.on("end", () => {});
    proxySocket.on("timeout", () => {});
    proxySocket.on("error", () => {});
    proxySocket.on("close", () => {});
    proxySocket.on("end", () => {});
  });
};

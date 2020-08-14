// Run this on the rpi

import net from "net";

const socket = net.connect(22, "127.0.0.1", () => {
  console.log(`Connected to port`)
})

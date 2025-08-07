import {
  createStartHandler,
  defaultStreamHandler,
} from "@tanstack/react-start/server";
import { createRouter } from "./router";

export default createStartHandler({
  createRouter,
})((event) => {
  console.log("server called", new Date());

  return defaultStreamHandler(event);
});

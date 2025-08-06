import {
  createMiddleware,
  registerGlobalMiddleware,
} from "@tanstack/react-start";

const loggingMiddleware = createMiddleware({ type: "function" }).server(
  async ({ next, data }) => {
    console.log("[Global middleware] Request received");
    const result = await next();
    console.log("[Global middleware] Response processed");
    return result;
  }
);

registerGlobalMiddleware({
  middleware: [loggingMiddleware],
});

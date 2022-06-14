import { Handler, serve } from "https://deno.land/std@0.142.0/http/server.ts";

const handler: Handler = (request, response) => {
  return Response.json({ hey: "aew" });
};

serve(handler);

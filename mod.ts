import { serve, Handler } from "https://deno.land/std@0.142.0/http/server.ts";

const handler: Handler = (req, res) => {
  return Response.json({hey:"aew"})
};

serve(handler);

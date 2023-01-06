import { Handler, serve } from "https://deno.land/std@0.142.0/http/server.ts";
import { Circle } from "./mod.ts";

const handler: Handler = () => {
  const circle = Circle.random();

  return Response.json(circle);
};

serve(handler);

import type { Context, Config } from "@netlify/functions"
import { getProgram0 } from "./program0";

export default async (req: Request, context: Context) => {
    const program0 = getProgram0();
    const programs = [program0];
    return new Response(JSON.stringify(programs), { headers: { "content-type": "application/json" } });
}

export const config: Config = {
    path: "/programs"
};
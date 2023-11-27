import express from "express";
import cors from "cors";
import fs from "fs";
import { getProgram0 } from "./netlify/functions/program0";


async function main() {
    const program0 = getProgram0();
    const programs = [program0];
    fs.writeFileSync("programs.json", JSON.stringify(programs, null, 2));
    const app = express();
    app.use(cors())
    app.get("/programs", (req, res) => {
        res.send(programs);
        res.end();
    });
    const port = 3000;
    const server = app.listen(port, "0.0.0.0", () => {
        console.log(`Listening on ${port}`);
    });

}

main();
import * as shell from "shelljs";

shell.exec("tsc");
shell.exec("ts-node copyStaticAssets.ts");
shell.exec("node --inspect=9229 dist/server.js");

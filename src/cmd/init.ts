import fs from "fs";
import path from "path";
import { exit } from "process";

export const init = () => {
    
  // try {
  //   const dir_path = path.join(process.cwd(), ".config");
  //   fs.mkdirSync(dir_path);
  //   const content = {
  //     name: "test",
  //     version: "1.0.0",
  //   };
  //   console.log(`Create config file at ${dir_path}`);
  //   const file_path = path.join(dir_path, "aoj.json");
  //   fs.writeFileSync(file_path, JSON.stringify(content));
  // } catch (err) {
  //   const Err = err as NodeJS.ErrnoException;
  //   if (Err.code === "EEXIST") {
  //     console.log("file is still exists");
  //   } else{
  //     console.log(err)
  //   }
  //   process.exit(1);
  // }
};

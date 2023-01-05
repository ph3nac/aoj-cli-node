import figlet from "figlet";
import { Command } from "commander";
import { init } from "./cmd/init";

const program = new Command();

program.name("aoj-cli-node").description("CLI to AOJ").version("0.0.1");

program
  .command("init")
  .description("Initialize configuration")
  .action(() => {
    console.log(figlet.textSync("AOJ CLI TOOLS"));
    init();
    console.log("init!");
  });

program
  .command("gen <problem_id>")
  .description("Generate a boilerplate code and test cases")
  .action((problem_id) => {
    console.log(problem_id);
  });

program
  .command("test")
  .description("Test the solution")
  .action(() => {
    console.log("test");
  });

program
  .command("submit")
  .description("Submit a source code")
  .action(() => {
    console.log("submit");
  });

program.parse();

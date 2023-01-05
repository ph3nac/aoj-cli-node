import readline from "readline";

const question = (question: string): Promise<string> => {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve, reject) => {
    readlineInterface.question(question, (answer) => {
      resolve(answer);
      readlineInterface.close();
    });
  });
};

const prompt = async (msg: string): Promise<string> => {
  console.log(msg);
  const answer = await question("> ");
  return answer.trim();
};

export const main = async () => {
  try {
    for (;;) {
      const answer = await prompt("username:");
      if (answer !== "") break;
      console.log("");
    }
    for (;;) {
      const answer = await prompt("username:");
      if (answer !== "") break;
      console.log("");
    }
  } catch (err) {
    console.log(err);
  }
};

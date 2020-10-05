const { program } = require("commander");
const { pipeline } = require("stream");
const transform = require("./transform");
const caesarCodec = require("./codec");

program
  .option("-s, --shift  <shift>")
  .option("-i, --input  <file>")
  .option("-o, --output <file>")
  .option("-a, --action <type>");

program.parse(process.argv);

const { shift, input, output, action } = program;
const numShift = parseInt(shift);

const checkAction = () => {
  if (action && (action === "encode" || action === "decode")) {
    return true;
  }
  return false;
};

const checkShift = () => {
  if (shift && numShift) {
    return true;
  }
  return false;
};

this.getCaesarCodec = (chunk) => {
  const actionMethod = caesarCodec.action();

  return actionMethod.codec(chunk, numShift, action);
};

if (checkAction() && checkShift()) {
  console.log(
    `Your shift is ${numShift} and you have chosen ${action} as an action`
  );

  pipeline(
    transform.inputStream(input),
    transform.transformStream(this.getCaesarCodec),
    transform.outputStream(output),
    (err) => {
      if (err) {
        console.log("Failed.", err);
      } else {
        console.log("Succeeded");
      }
    }
  );
} else {
  console.error(`Check your input!`);
  if (!shift) console.error("Use -s or --shift");
  if (!numShift) console.error("Shift must be a number");
  if (!action)
    console.error('Use "encode" or "decode" after key -a or --action');

  process.exitCode = 1;
}

export const MY_MESSAGE = "Hello World";
export const PORT = process.env.PORT || 8080;

const FAILURE_CODE = 1;

const mandatory_vars: string[] = [];
mandatory_vars.forEach((envName) => {
  if (!process.env[envName]) {
    console.error(`env variable not defined "${envName}"`);
    process.exit(FAILURE_CODE);
  }
});

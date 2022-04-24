import "dotenv/config";

import app from "./app";
import { PORT } from "env";

app.listen(PORT, () => {
  console.log(`App is listening in port ${PORT}`);
});

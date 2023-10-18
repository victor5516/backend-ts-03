import dotenv from "dotenv";
import app from "./server";

dotenv.config({ path: ".env"});
const port = process.env.PORT || 3000;



app.listen(port, () => {
  console.log(`[server]:Server is running at http:localhost:${port}`);
})
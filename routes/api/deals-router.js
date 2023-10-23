import express from "express";

import authenticate from "../../middlewars/authenticate.js";
import dealsControllers from "../../controllers/deals-controllers.js";

const dealsRouter = express.Router();

dealsRouter.use(authenticate);

dealsRouter.get("/", dealsControllers.getAll);

export default dealsRouter;

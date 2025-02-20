import express from "express";

// Controllers
import { store } from "../controllers/User";

const router = express.Router();

router.post("/create", store);

export default router;

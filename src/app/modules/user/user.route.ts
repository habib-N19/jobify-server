import express from "express";
const router = express.Router();
router.post("/register", async (req, res) => {
	res.send("Register user");
});
router.post("/login", async (req, res) => {
	res.send("Login user");
});

export const UserRoutes = router;

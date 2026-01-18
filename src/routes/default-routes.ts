import { Router } from "express";

const router = Router();

router.get("*splat", (req, res) => {
  res.status(200).send({ message: "Hello from the catch all!" });
});

export default router;

import { Router } from "express";

const router = Router();

router.post("/new", (req, res) => {
  const body = req.body;

  const { title, distance, date } = body;

  if (!title || !distance || !date) {
    res
      .status(400)
      .send({ message: "Incomplete message body had been supplied" });
  }

  res.status(200).send({ message: "Hello from the runs router!" });
});

export default router;

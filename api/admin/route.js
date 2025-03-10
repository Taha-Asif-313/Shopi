import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email } = req.body;

    try {
      const user = await prisma.user.create({
        data: { name, email },
      });

      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: "User already exists or invalid data" });
    }
  }
  if (req.method === "GET") {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  }
  
}

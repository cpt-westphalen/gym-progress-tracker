import Fastify from "fastify";
import cors from "@fastify/cors";
import { config } from "dotenv";

config();

const app = Fastify();

app.register(cors);

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3333;

app.get("/", () => {
	return "Hello world";
});

app.listen({ port: PORT }).then(() => {
	console.log(`Server Running: http://localhost:${PORT}/`);
});

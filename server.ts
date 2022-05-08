// yarn add
// prisma typescript ts-node @types/node --save-dev

// first install prisma=> npm install prisma
// npx prisma
// npx prisma init
// npm install @prisma/client
// intialize the prisma in our project
// create connnection to the database
// add new models as you wish
// use npx prisma migrate dev --name init to migrate that changes to the database
// use can either check the sql workbench or you can check in the prisma studio
// npx prisma studio
// ts node is help full to execute the ts files directly instead of doing those stepwise
// like converting the ts to js and again exectuting the js files
// nodemon index.ts
// to execute the file





import express, { Request, Response } from "express";
const app = express();
import { PrismaClient } from "@prisma/client";
import { Resolver } from "dns";
const prisma = new PrismaClient();


app.use(express.json());

app.post("/adduser", (req: Request, res: Response) => {
	const { name, email, firstName, lastName, Age } = req.body;
	const user = prisma.user.create({
		data: {
			name: name,
			email: email,
			firstName: firstName,
			lastName: lastName,
			Age:Age
		}
	}
		
	)
	res.json(user);


})


app.get("/showusers", async(req: Request, res: Response) => {
	const users = await prisma.user.findMany();
	res.json(users);
	console.log(users)

	
})

app.get("/showuser/:id",async (req: Request, res: Response) => {
	const id = parseInt(req.params.id);

	const user = await prisma.user.findUnique(
		{
			where: {
				id:id
			},



		}
	);
	res.json(user);
	console.log(user);
	
})


app.listen(3333, () => {
	console.log("Helllo")
})








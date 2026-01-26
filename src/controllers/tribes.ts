import { type Request, type Response, Router } from "express";
import { tribes, type Tribe } from "../public/tribes";
import { createErrorResponse, createSuccessResponse } from "../utilities/error";

const router = Router();

const tribes_data = (req: Request, res: Response): void => {
	const tribe_name_query = req.query.name;
	const tribe: string = tribe_name_query as string;

	if (!tribe_name_query) {
		res.status(200).json(createSuccessResponse(tribes));
		return;
	}

	const found_tribe: Tribe | undefined = tribes.find(
		(u) => u.name.toLowerCase() === tribe.toLowerCase(),
	);

	if (found_tribe) {
		res.status(200).json(createSuccessResponse(found_tribe));
		return;
	}
	res
		.status(400)
		.json(createErrorResponse(`Tribe with the name '${tribe}' not found!`));
	return;
};

// Routes
router.get("/", tribes_data);

export default router;

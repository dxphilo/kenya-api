import { type Request, type Response, Router } from "express";
import { postal_stations, type PostalCode } from "../public/postal_codes";
import { createErrorResponse, createSuccessResponse } from "../utilities/error";

const router = Router();

const postal_data = (req: Request, res: Response): void => {
  const post_code_query = req.query.post_code;
  const postal_code: number = parseInt(post_code_query as string, 10);

  if (!post_code_query) {
    res.status(200).json(createSuccessResponse(postal_stations));
    return;
  }

  if (!Number.isNaN(postal_code)) {
    const found_post: PostalCode | undefined = postal_stations.find(
      (post) => post.code === postal_code
    );

    if (found_post) {
      res.status(200).json(createSuccessResponse(found_post));
      return;
    }

    res
      .status(400)
      .json(
        createErrorResponse(
          `Post station with the code '${postal_code}' not found`
        )
      );
    return;
  }

  res
    .status(400)
    .json(
      createErrorResponse(
        `Post code '${post_code_query}' is Invalid, please use a correct postal code`
      )
    );
  return;
};

// Routes
router.get("/", postal_data);

export default router;

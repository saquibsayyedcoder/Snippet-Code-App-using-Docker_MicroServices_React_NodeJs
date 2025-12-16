import express from 'express';

const router = express.Router();

import { createComment, getCommentBySnippetId } from '../controller/comment.controller.js';

router.route("/:id/comment").post(createComment);
router.route("/:id/comment").get(getCommentBySnippetId);

export default router;
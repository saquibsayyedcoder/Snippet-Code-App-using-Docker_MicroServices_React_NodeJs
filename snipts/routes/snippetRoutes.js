import expresss from 'express';
import { createSnippet, getSnippet } from '../controller/snippet.controller.js';

const router = expresss.Router();

router.route("/").post(createSnippet);
router.route("/").get(getSnippet);

export default router;
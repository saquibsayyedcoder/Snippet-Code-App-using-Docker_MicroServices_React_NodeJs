import expresss from 'express';
import { createSnippet, getAllSnippets, getSnippet } from '../controller/snippet.controller.js';

const router = expresss.Router();

router.route("/create").post(createSnippet);
router.route("/getall").get(getAllSnippets);
router.get("/:id", getSnippet);  

export default router;
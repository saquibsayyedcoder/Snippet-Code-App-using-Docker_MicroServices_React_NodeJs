import { snippets } from "../database/index.js";
import {randomBytes} from 'crypto';

export const createSnippet = (req, res) => {
const id = randomBytes(4).toString("hex");
const {title, code} = req.body;

snippets[id] = {id, title, code};


return res.status(201).json({
    success: true,
    message: "Snippets created successfully",
    data: snippets[id],
});     
};

export const getSnippet = (req, res) => {
    const {id} = req.params;
    const snip = snippets[id];       
    if(!snip){
        return res.status(404).json({
            success: false,         
            message: "Snippets not found",
        });
    }       
    return res.status(200).json({
        success: true,
        message: "Snippet fetched successfully",
        data: snip,
    });
}
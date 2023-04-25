import {Router} from "express";
import Post from "./post.js";
import PostController from "./PostController.js";


const router = new Router()

router.post('/posts', PostController.create )

router.get('/posts')
router.get('/posts/:id')
router.put('/posts/:id')
router.delete('/posts/:id')

export default router
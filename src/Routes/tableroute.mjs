import expres from 'express';
import authentication from '../auth/auth.mjs';
import * as tableController from '../Controllers/postController.mjs'
const tableRouter= expres.Router();

tableRouter.get('/',
(req,res)=>{
    return res.render('table');
});

tableRouter.post('/addmore', authentication, tableController.addPost)





export default tableRouter;
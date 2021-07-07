import { Router } from 'express';
import * as cfdiController from '../controller/cfdi.controller'
import {verifytoken,isAdmin,isModerator}  from '../middlewares';


const router = Router()

router.get('/Cfdis',[verifytoken,isModerator],cfdiController.getCfdis)
router.get('/CfdiById/:cfdiID',cfdiController.getCfdiById)

router.post('/CreateCfdi',[verifytoken,isModerator],cfdiController.createCfdi)
router.delete('/Cancele/:cfdiID',cfdiController.CancelCfdiById)



export default router;
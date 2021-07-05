import { Router } from 'express';
import * as cfdiController from '../controller/cfdi.controller'

const router = Router()

router.get('/Cfdis',cfdiController.getCfdis)
router.get('/CfdiById/:cfdiID',cfdiController.getCfdiById)

router.post('/CreateCfdi',cfdiController.createCfdi)
router.delete('/Cancele/:cfdiID',cfdiController.CancelCfdiById)



export default router;
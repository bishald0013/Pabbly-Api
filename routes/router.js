import express from 'express'
import CampaignController from '../controller/createCampaign.js'

const router = express.Router()

router.get('/getCampaign', CampaignController.getCampaign)
router.post('/postCampaign', CampaignController.createCampaign)


export default router
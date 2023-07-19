import express from 'express'
import url from 'url'
import csrf from 'csurf'
import { hydraAdmin } from '../config'

// Sets up csrf protection
const router = express.Router()

router.get('/', (_, res, __) => {
  res.render('device_success')
})

export default router

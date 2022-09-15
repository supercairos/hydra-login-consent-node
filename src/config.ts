import { Configuration, V0alpha2Api } from '@ory/hydra-client'

const baseOptions: any = {}

if (process.env.MOCK_TLS_TERMINATION) {
  baseOptions.headers = { 'X-Forwarded-Proto': 'https' }
}

const configuration = new Configuration({
  basePath: process.env.HYDRA_ADMIN_URL || 'http://localhost:4445',
  baseOptions
})

const hydraAdmin = new V0alpha2Api(configuration)

export { hydraAdmin }

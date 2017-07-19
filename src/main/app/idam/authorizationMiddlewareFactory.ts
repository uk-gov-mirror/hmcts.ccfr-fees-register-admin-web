import * as express from 'express'
import * as config from 'config'

import {AuthorizationMiddleware} from 'idam/authorizationMiddleware'
import {buildURL} from 'app/utils/CallbackBuilder'

export class AuthorizationMiddlewareFactory {

  static genericRequestHandler (): express.RequestHandler {
    function accessDeniedCallback (req: express.Request, res: express.Response): void {
      res.redirect(`${config.get('idam.authentication-web.url')}/login?continue-url=${buildURL(req, '')}`)
    }

    const requiredRoles = [
      'admin'
    ]
    const unprotectedPaths = [
      '/health',
      '/version',
      '/analytics'
    ]
    return AuthorizationMiddleware.requestHandler(requiredRoles, accessDeniedCallback, unprotectedPaths)
  }
}

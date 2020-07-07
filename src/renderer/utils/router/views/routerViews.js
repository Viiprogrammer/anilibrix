import __get from 'lodash/get'
import router from '@router'

const RELEASE_VIEW = 'release';
const ACCOUNT_LOGIN_VIEW = 'account.login';


/**
 * Go to login view
 * Check current route
 *
 * @return {Promise}
 */
export const toLogin = () => {
  if (router.currentRoute.name !== ACCOUNT_LOGIN_VIEW) {
    return router.push({name: ACCOUNT_LOGIN_VIEW});
  }
};


/**
 * Go to release
 *
 * @param release
 * @return {Promise}
 */
export const toRelease = (release = null) => {
  if (release) {

    const releaseId = __get(release, 'id');
    const releaseName = __get(release, 'names.original');

    return router.push({
      name: RELEASE_VIEW,
      params: {releaseId, releaseName}
    });
  }
};

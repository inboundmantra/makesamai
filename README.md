# MakeSamai
MakeSamai business website built with with [Gatsby](https://www.gatsbyjs.org/), and [Netlify CMS](https://www.netlifycms.org).
                                      
It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

### Access Locally
```
$ yarn install
$ yarn run develop
```
To test the CMS locally, you'll need run a production build of the site:
```
$ yarn run build
$ yarn run serve
```

### Setting up the CMS
Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting.

## Debugging
Windows users might encounter ```node-gyp``` errors when trying to npm install.
To resolve, make sure that you have both Python 2.7 and the Visual C++ build environment installed.
```
npm config set python python2.7
npm install --global --production windows-build-tools
```

[Full details here](https://www.npmjs.com/package/node-gyp 'NPM node-gyp page')

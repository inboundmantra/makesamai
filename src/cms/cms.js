import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import PricingPagePreview from './preview-templates/PricingPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('home', IndexPagePreview)
CMS.registerPreviewTemplate('pricing', PricingPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)

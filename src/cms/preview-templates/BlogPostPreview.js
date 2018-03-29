import React from 'react'
import PropTypes from 'prop-types'
import {BlogPostTemplate} from '../../templates/blog-post'

const BlogPostPreview = ({entry, widgetFor}) => (
    <BlogPostTemplate
        content={widgetFor('body')}
        cover={entry.getIn(['data', 'cover'])}
        meta_title={entry.getIn(['data', 'meta_title'])}
        meta_desc={entry.getIn(['data', 'meta_description'])}
        tags={entry.getIn(['data', 'tags'])}
        title={entry.getIn(['data', 'title'])}
    />
)

BlogPostPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default BlogPostPreview

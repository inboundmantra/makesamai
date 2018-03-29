import React from 'react'
import PropTypes from 'prop-types'
import {kebabCase} from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, {HTMLContent} from '../components/Content'
import config from "../../data/config";

export const BlogPostTemplate = ({
                                     content,
                                     contentComponent,
                                     cover,
                                     meta_title,
                                     meta_desc,
                                     tags,
                                     title,
                                 }) => {
    const PostContent = contentComponent || Content



    return (
        <section className="section">
            <Helmet>
                <title>{meta_title}</title>
                {/* General tags */}
                <meta name="description" content={meta_desc}/>
                <meta name="image" content={cover}/>
                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta
                    name="twitter:creator"
                    content={config.userTwitter ? config.userTwitter : ""}
                />
                <meta name="twitter:title" content={title}/>
                <meta name="twitter:description" content={meta_desc}/>
                <meta name="twitter:image" content={cover}/>
            </Helmet>
            <div className="container content">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                            {title}
                        </h1>
                        <img src={cover} alt={title}/>
                        <PostContent content={content}/>
                        {tags && tags.length ? (
                            <div style={{marginTop: `4rem`}}>
                                <h4>Tags</h4>
                                <ul className="taglist">
                                    {tags.map(tag => (
                                        <li key={tag + `tag`}>
                                            <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </section>
    )
}

BlogPostTemplate.propTypes = {
    content: PropTypes.string.isRequired,
    contentComponent: PropTypes.func,
    cover: PropTypes.string,
    meta_title: PropTypes.string,
    meta_desc: PropTypes.string,
    title: PropTypes.string,
}

const BlogPost = ({data}) => {
    const {markdownRemark: post} = data

    return (
        <BlogPostTemplate
            content={post.html}
            contentComponent={HTMLContent}
            cover={post.frontmatter.cover}
            meta_title={post.frontmatter.meta_title}
            meta_desc={post.frontmatter.meta_description}
            tags={post.frontmatter.tags}
            title={post.frontmatter.title}
        />
    )
}

BlogPost.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        cover
        meta_title
        meta_description
        tags
      }
    }
  }
`

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
                                     slug,
                                 }) => {
    const PostContent = contentComponent || Content
    let postURL = config.siteUrl + slug
    const realPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix
    let image = config.siteUrl + realPrefix + cover
    const blogURL = config.siteUrl + config.pathPrefix
    const schemaOrgJSONLD = [
        {
            "@context": "http://schema.org",
            "@type": "WebSite",
            url: blogURL,
            name: title,
            alternateName: config.siteTitleAlt ? config.siteTitleAlt : ""
        }
    ];

    schemaOrgJSONLD.push([
        {
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    item: {
                        "@id": postURL,
                        name: title,
                        image
                    }
                }
            ]
        },
        {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            url: blogURL,
            name: title,
            alternateName: config.siteTitleAlt ? config.siteTitleAlt : "",
            headline: title,
            image: {
                "@type": "ImageObject",
                url: image
            },
            meta_desc
        }
    ]);

    return (
        <section className="section">
            <Helmet>
                <title>{meta_title}</title>
                {/* General tags */}
                <meta name="description" content={meta_desc}/>
                <meta name="image" content={cover}/>
                {/* Schema.org tags */}
                <script type="application/ld+json">
                    {JSON.stringify(schemaOrgJSONLD)}
                </script>
                {/* OpenGraph tags */}
                <meta property="og:url" content={postURL}/>
                <meta property="og:type" content="article"/>
                <meta property="og:title" content={title}/>
                <meta property="og:description" content={meta_desc}/>
                <meta property="og:image" content={image}/>
                <meta
                    property="fb:app_id"
                    content={config.siteFBAppID ? config.siteFBAppID : ""}
                />
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
    slug: PropTypes.string,
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
            slug={post.fields.slug}
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
      fields {
            slug
          }
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

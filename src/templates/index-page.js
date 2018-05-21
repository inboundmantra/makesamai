/**
 * Created by vaibhav on 29/3/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'

export const IndexPageTemplate = ({
                                      image,
                                      title,
                                      heading,
                                      description,
                                      intro,
                                      main,
                                      testimonials,
                                      fullImage,
                                  }) => (
    <div>
        <section className="hero is-medium is-bold">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title">
                        {title}
                    </h1>
                    <a className="button is-primary" href="https://app.makesamai.com/signup">Start 30 Day Free Trial</a>
                </div>
            </div>
        </section>
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title">
                        Now Growth Teams can drive growth unhindered
                    </h1>
                </div>
            </div>
        </section>
        <section className="section section--gradient">
            <div className="container">

                <div className="section">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="content">
                                <div className="columns is-centered">
                                    <div className="column is-7">
                                        <h3 className="has-text-weight-semibold is-size-2 has-text-centered">
                                            {heading}
                                        </h3>
                                    </div>
                                </div>
                                <Features gridItems={intro.blurbs}/>
                                <div className="columns is-centered">
                                    <div className="column is-7">
                                        <h3 className="has-text-weight-semibold is-size-2 has-text-centered">
                                            Invoke AI
                                        </h3>
                                    </div>
                                </div>
                                <div className="columns is-multiline">
                                    <div className="column is-6">
                                        <section className="section has-text-centered">
                                            <p className="subtitle">Predictive Lead Intelligence</p>
                                        </section>
                                    </div>
                                    <div className="column is-6">
                                        <section className="section has-text-centered">
                                            <p className="subtitle">Predict Keyword Ranks</p>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title">
                        Customer Logos
                    </h1>
                </div>
            </div>
        </section>
        <section className="hero is-bold">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title">
                        Simple Pricing
                    </h1>
                    <br/>
                    <h2 className="subtitle">US $10 / Month for 1000 Contacts</h2>
                    <h1 className="subtitle">&#43;</h1>
                    <h3 className="subtitle">US $10 / month for every additional 1,000 Contacts</h3>
                    <a className="button is-primary" href="https://app.makesamai.com/signup">Start 30 Day Free
                        Trial</a>
                </div>
            </div>
        </section>
    </div>
)

IndexPageTemplate.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    intro: PropTypes.shape({
        blurbs: PropTypes.array,
    }),
    main: PropTypes.shape({
        heading: PropTypes.string,
        description: PropTypes.string,
        image1: PropTypes.object,
        image2: PropTypes.object,
        image3: PropTypes.object,
    }),
    testimonials: PropTypes.array,
    fullImage: PropTypes.string,
}

const IndexPage = ({data}) => {
    const {frontmatter} = data.markdownRemark

    return (
        <IndexPageTemplate
            image={frontmatter.image}
            title={frontmatter.title}
            heading={frontmatter.heading}
            description={frontmatter.description}
            intro={frontmatter.intro}
            main={frontmatter.main}
            testimonials={frontmatter.testimonials}
            fullImage={frontmatter.full_image}
        />
    )
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image
        heading
        description
        intro {
          blurbs {
            image
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image
          }
          image2 {
            alt
            image
          }
          image3 {
            alt
            image
          }
        }
        testimonials {
          author
          quote
        }
        full_image
      }
    }
  }
`
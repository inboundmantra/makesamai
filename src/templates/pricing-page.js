/**
 * Created by vaibhav on 28/3/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import Pricing from '../components/Pricing'

export const PricingPageTemplate = ({
                                        title,
                                        image,
                                        pricing,
                                    }) => (
    <section className="section section--gradient">
        <div className="container">
            <div className="section">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <div className="content">
                            <div
                                className="full-width-image-container margin-top-0"
                                style={{backgroundImage: `url(${image})`}}
                            >
                                <h2
                                    className="has-text-weight-bold is-size-1"
                                    style={{
                                        boxShadow: '0.5rem 0 0 #3273dc, -0.5rem 0 0 #3273dc',
                                        backgroundColor: '#3273dc',
                                        color: 'white',
                                        padding: '1rem',
                                    }}
                                >
                                    {title}
                                </h2>
                            </div>
                                <h2 className="has-text-weight-semibold is-size-2">
                                    {pricing.heading}
                                </h2>
                                <p className="is-size-5">{pricing.description}</p>
                                <Pricing data={pricing.plans}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
)

PricingPageTemplate.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    pricing: PropTypes.shape({
        heading: PropTypes.string,
        description: PropTypes.string,
        plans: PropTypes.array,
    }),
}

const PricingPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <PricingPageTemplate
            image={frontmatter.image}
            title={frontmatter.title}
            pricing={frontmatter.pricing}
        />
    )
}

PricingPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default PricingPage

export const pricingPageQuery = graphql`
  query PricingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`

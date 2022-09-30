import { graphql, PageProps } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'
import { Card, CardColumns, Container } from 'react-bootstrap'
import { Heading } from '../components/Heading'
import { Layout } from '../components/Layout'
import { Section } from '../components/Section'
import { SEO } from '../components/seo'
import { Must } from '../types'

interface ItemProps {
  title: string
  image: IGatsbyImageData
  text?: string
  link: string
}

function Item({ image, title, text, link }: ItemProps) {
  return (
    <Card as="a" href={link} target="_blank" className="text-dark">
      <Card.Img
        as={GatsbyImage}
        variant="top"
        image={image}
        loading="eager"
        objectFit="cover"
        alt=""
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  )
}

function ExplorePage({ data }: PageProps<Must<Queries.ExploreQuery>>) {
  return (
    <Layout>
      <SEO title="Travel" />
      <Section>
        <Container>
          <Heading className="text-center">Explore Kenya</Heading>
          <p className="text-center lead mb-5">
            Click on the images below to see more information on fun things to do while you&apos;re
            in Kenya.
          </p>
          <CardColumns>
            <Item
              title="Soak up sea, sun & sand at one of Kenya's best beaches!"
              image={data.beaches.childImageSharp.gatsbyImageData}
              link="https://traveltriangle.com/blog/beaches-in-kenya/"
              text="Top 10 Surreal Beaches In Kenya One Should Definitely Visit!"
            />
            <Item
              title="Head down to The Mombasa Lighthouse for the best street food!"
              image={data.lighthouse.childImageSharp.gatsbyImageData}
              link="https://trip101.com/article/the-mombasa-lighthouse-that-remains-a-great-spot-to-grab-some-food"
              text="The Mombasa Lighthouse: A Great Spot To Grab Some Food"
            />
            <Item
              title="Visit Tsavo, the closest National park to Mombasa, for a Safari"
              image={data.tsavo.childImageSharp.gatsbyImageData}
              link="https://www.tsavopark.com/"
              text="Tsavo National Park | Book Accommodation and Safaris"
            />
            <Item
              title="Visit the world famous Maasai Mara game reserve for a Safari to remember"
              image={data.maasaimara.childImageSharp.gatsbyImageData}
              link="https://www.maasaimara.com/"
              text="Maasai Mara | Book Accommodation and Safaris"
            />
            <Item
              title="Summit Mount Kenya"
              image={data.mountkenya.childImageSharp.gatsbyImageData}
              link="https://www.mountkenyasafaris.com/"
              text="Rising to just over 17,000 feet (3,800 meters), Mount Kenya is the continent's second highest peak. But the summit trails are far less crowded than its snowy counterpart (Kilimanjaro) across the border in Tanzania."
            />
          </CardColumns>
        </Container>
      </Section>
    </Layout>
  )
}

export default ExplorePage

export const pageQuery = graphql`
  query Explore {
    beaches: file(relativePath: { eq: "explore/beaches.jpg" }) {
      id
      childImageSharp {
        gatsbyImageData(
          transformOptions: { cropFocus: CENTER }
          width: 800
          height: 500
          layout: CONSTRAINED
        )
      }
    }
    lighthouse: file(relativePath: { eq: "explore/lighthouse.jpg" }) {
      id
      childImageSharp {
        gatsbyImageData(
          transformOptions: { cropFocus: CENTER }
          width: 800
          height: 500
          layout: CONSTRAINED
        )
      }
    }
    tsavo: file(relativePath: { eq: "explore/tsavo.jpg" }) {
      id
      childImageSharp {
        gatsbyImageData(
          transformOptions: { cropFocus: CENTER }
          width: 800
          height: 500
          layout: CONSTRAINED
        )
      }
    }
    maasaimara: file(relativePath: { eq: "explore/maasaimara.jpg" }) {
      id
      childImageSharp {
        gatsbyImageData(
          transformOptions: { cropFocus: CENTER }
          width: 800
          height: 500
          layout: CONSTRAINED
        )
      }
    }
    mountkenya: file(relativePath: { eq: "explore/mount-kenya.jpg" }) {
      id
      childImageSharp {
        gatsbyImageData(
          transformOptions: { cropFocus: CENTER }
          width: 800
          height: 500
          layout: CONSTRAINED
        )
      }
    }
  }
`

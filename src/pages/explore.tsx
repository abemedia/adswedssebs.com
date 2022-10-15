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
  text: string
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
        <Card.Text dangerouslySetInnerHTML={{ __html: text }} />
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
            Click on the images below to see more information on fun things to do in Kenya.
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
              text="Maasai Mara National Reserve is situated in southwest Kenya and is home to safaris and accommodation."
            />
            <Item
              title="Summit Mount Kenya"
              image={data.mountkenya.childImageSharp.gatsbyImageData}
              link="https://www.mountkenyasafaris.com/"
              text="Rising to just over 17,000 feet (3,800 meters), Mount Kenya is the continent's second highest peak. But the summit trails are far less crowded than its snowy counterpart (Kilimanjaro) across the border in Tanzania."
            />
            <Item
              title="Sail the Lamu Archipelago by dhow"
              image={data.dhow.childImageSharp.gatsbyImageData}
              link="https://www.facebook.com/hippodhow/"
              text=" A dhow is a lateen-rigged sailing vessel that once formed the main mode of transport between East Africa, India and the Middle East. On Lamu Island in Northern Kenya you can still explore the water on a dhow."
            />
            <Item
              title="Commune with crocodiles in Lake Turkana"
              image={data.turkana.childImageSharp.gatsbyImageData}
              link="https://eliyespringresort.com/"
              text="Central Island National Park in Lake Turkana is home to the world's largest colony of Nile crocodiles."
            />
            <Item
              title="Roam with rhinos at Lewa"
              image={data.rhinos.childImageSharp.gatsbyImageData}
              link="https://www.elewanacollection.com/lewa-safari-camp/at-a-glance/"
              text="Lewa Conservancy is a rhino conservation center which has grown its black and white rhino population from just 15 in 1984 to more than 150 today."
            />
            <Item
              title="Scuba or snorkel the Indian Ocean"
              image={data.dive.childImageSharp.gatsbyImageData}
              link="https://www.kws.go.ke/content/kisite-mpunguti-marine-park-reserve"
              text="Home to whales, dolphins and more than 250 species of tropical fish, Kisite-Mpunguti Marine National Park is a sea life haven and perfect for snorkeling."
            />
            <Item
              title="Flamingos at Lake Nakuru"
              image={data.flamingos.childImageSharp.gatsbyImageData}
              link="https://www.kws.go.ke/lake-nakuru-national-park"
              text="There are more than 240 bird species that frequent Lake Nakuru in Kenya's Great Rift Valley, but the flamingos are the most spectacular."
            />
            <Item
              title="Visit Fort Jesus in Mombasa"
              image={data.fortjesus.childImageSharp.gatsbyImageData}
              link="https://museums.or.ke/fort-jesus-mombasa/"
              text="This 16th century fort looks over Mombasa, Kenya's beautiful and historic port city."
            />
            <Item
              title="Get over your fear of snakes (or not)"
              image={data.snakes.childImageSharp.gatsbyImageData}
              link="https://www.eastafricanreptiles.com/watamu-snake-farm"
              text="The Bio-Ken Snake Farm near Watamu allows you to get close to Kenya's most dangerous snakes, including the black mamba, spitting cobra -- pictured here -- and puff adder."
            />
          </CardColumns>
        </Container>
      </Section>
      <Section variant="light">
        <Container className="text-center lead">
          <h2 className="display-4">Get a local travel agent</h2>
          <p>
            We have a trusted travel agent who can assist you with bookings. We have arranged
            discounted rates for our guests. Please mention the code <code>ANJAR0223</code> to get
            the discounted rate.
          </p>
          <h3>African Quest Safaris Ltd</h3>
          <p>
            Email: <a href="mailto:info@africanquest.co.ke">info@africanquest.co.ke</a> or{' '}
            <a href="mailto:taradamji@africanquest.co.ke">taradamji@africanquest.co.ke</a>
            <br />
            Catherine (Whatsapp): <a href="tel:+254723114911">+254 723 114 911</a>
            <br />
            Alice (Whatsapp): <a href="tel:+254704154227">+254 704 154 227</a>
            <br />
            Taher Adamji (Whatsapp): <a href="tel:+254722703852">+254 722 703852</a>
          </p>
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
    dhow: file(relativePath: { eq: "explore/dhow.jpg" }) {
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
    turkana: file(relativePath: { eq: "explore/turkana.jpg" }) {
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
    dive: file(relativePath: { eq: "explore/dive.jpg" }) {
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
    fortjesus: file(relativePath: { eq: "explore/fort-jesus.jpg" }) {
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
    flamingos: file(relativePath: { eq: "explore/flamingos.jpg" }) {
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
    rhinos: file(relativePath: { eq: "explore/rhinos.jpg" }) {
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
    snakes: file(relativePath: { eq: "explore/snakes.jpg" }) {
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

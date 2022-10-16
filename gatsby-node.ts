import { SourceNodesArgs } from 'gatsby'
import { googleFormsToJson } from 'react-google-forms-hooks'

const forms = [
  {
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScmsnAf74APlscnBTfPcvD7NoOmQ5E15ouicJaN72E5D3jbhw/viewform?usp=sf_link',
    bbq: true,
    civil: true,
    mehndi: true,
    reception: true,
  },
  {
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSeo21ReZXX2VzfULLnrLzF6UsckMYImUe7TSEmI-NSoQIyrFw/viewform?usp=sf_link',
    bbq: false,
    civil: true,
    mehndi: true,
    reception: true,
  },
  {
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdrPh4L6tHO0w7wjwajYCf8KS-KSumWnAMH0sdaMh5mdRRcNQ/viewform?usp=sf_link',
    bbq: false,
    civil: false,
    mehndi: true,
    reception: true,
  },
  {
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScn6-hvLj_ToZ_S93U093a8QsDmOqA2Yu7MRFzQfYnIE8fp_A/viewform?usp=sf_link',
    bbq: false,
    civil: false,
    mehndi: false,
    reception: true,
  },
]

export const sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}: SourceNodesArgs) => {
  const { createNode } = actions

  await Promise.all(
    forms.map(async item => {
      const form = await googleFormsToJson(item.link)
      createNode({
        ...item,
        form: JSON.stringify(form),
        id: createNodeId(form.action),
        parent: null,
        children: [],
        internal: {
          type: 'GoogleForms',
          content: JSON.stringify(form),
          contentDigest: createContentDigest(form),
        },
      })
    })
  )
}

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Heading, Markdown, Paragraph } from 'grommet'

import styles from './article-preview.module.css'

export default ({ article }) => (
  <div className={styles.preview}>
    <Img alt="" fluid={article.heroImage.fluid} />
    <Heading>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </Heading>
    <Paragraph>{article.publishDate}</Paragraph>
    <Markdown>{article.description.description}</Markdown>

    {article.tags &&
      article.tags.map(tag => (
        <p className={styles.tag} key={tag}>
          {tag}
        </p>
      ))}
  </div>
)

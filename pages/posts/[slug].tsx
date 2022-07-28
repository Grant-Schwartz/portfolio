import { getArticleFromSlug, getSlug } from "utils/mdx"
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import rehypeHighlight from 'rehype-highlight'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeSlug from 'rehype-slug'
import remarkRehype from 'remark-rehype'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import Head from 'next/head';
import dayjs from "dayjs"
import Image from 'next/image'
import { Container, Text, Heading, Divider, Center, Box } from '@chakra-ui/react'
import styles from 'styles/post.module.css';
import { Nav } from "components/Nav"
import { MDXComponents } from "components/MDXComponents"

export default function Post({ post: { source, frontmatter } }: any) {
    return (
        <>
        <Head>
            <title>{frontmatter.title}</title>
        </Head>
        <Nav />
        <div className={styles.article_container}>
            {frontmatter.hero_image ? <Box  width="100%" height="200px" marginBottom="10px"  bgColor={`${frontmatter.color}.100`} position="relative" borderRadius="20px"><Center><Image alt="blog post image" src={frontmatter.hero_image} layout="fill" objectFit="contain"/></Center></Box> : null}
            <Heading color={`${frontmatter.color}.500`}>{frontmatter.title}</Heading>
            <Text color={`${frontmatter.color}.800`}>
                {dayjs(frontmatter.publishedAt).format('MMMM D, YYYY')} &mdash;{' '}
                {frontmatter.readingTime}
            </Text>
            <Divider marginTop="20px" marginBottom="20px"/>
            <div className="content">
                <MDXRemote {...source} components={MDXComponents} />
            </div>
        </div>
        </>
    );
}

export async function getStaticPaths() {
    // getting all paths of each article as an array of
    // objects with their unique slugs
    const paths = (await getSlug()).map((slug) => ({ params: { slug } }))
    return {
      paths,
      // in situations where you try to access a path
      // that does not exist. it'll return a 404 page
      fallback: false,
    }
}

export async function getStaticProps({ params }: any) {
    //fetch the particular file based on the slug
    const { slug } = params
    const { content, frontmatter } = await getArticleFromSlug(slug)

    const mdxSource = await serialize(content, {
        mdxOptions: {
        rehypePlugins: [
            rehypeSlug,
            [
            rehypeAutolinkHeadings,
            {
                properties: { className: ['anchor'] },
            },
            { behaviour: 'wrap' },
            ],
            rehypeHighlight,
            rehypeCodeTitles,
        ],
        },
    })
    return {
        props: {
        post: {
            source: mdxSource,
            frontmatter,
        },
        },
    }
}
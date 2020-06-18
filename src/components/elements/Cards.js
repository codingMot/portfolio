import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { H2 } from './Headings'
import { Paragraph } from './Paragraphs'
import { A } from './Links'
import { useScrollInView } from '../helpers'
import { above } from '../utilities'

const cardMotion = {
  rest: {
    y: 160,
    opacity: 0,
    visibility: `hidden`,
  },
  scroll: {
    y: 0,
    opacity: 1,
    visibility: `visible`,
    transition: {
      duration: 0.5,
      delay: 0.75,
    },
  },
  exit: {
    y: 32,
    opacity: 0,
    visibility: `hidden`,
  },
}

const infoMotion = {
  rest: {
    height: 0,
    visibility: `hidden`,
    opacity: 0,
  },
  hover: {
    height: `initial`,
    visibility: `visible`,
    opacity: 1,
    transition: {
      duration: 0.3,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
}

const infoItemMotion = {
  rest: {
    y: 32,
    opacity: 0,
  },
  hover: {
    y: 0,
    opacity: 1,
  },
}

export const Card = ({
  title,
  subtitle,
  timeperiod,
  description,
  link,
  className,
}) => {
  const { ref, controls } = useScrollInView()

  return (
    <CardContainer
      ref={ref}
      className={className}
      initial="rest"
      whileHover="hover"
      animate={controls}
      variants={cardMotion}
    >
      <Heading>
        {title} <Subtitle>- {subtitle}</Subtitle>
      </Heading>
      <InfoContainer variants={infoMotion}>
        <Timeperiod variants={infoItemMotion}>{timeperiod}</Timeperiod>
        <Description variants={infoItemMotion}>{description}</Description>
        <ProjectLink
          variants={infoItemMotion}
          href={link}
          target="_blank"
          rel="noopener"
          whileTap={{ scale: 0.9 }}
        >
          {title}
        </ProjectLink>
      </InfoContainer>
    </CardContainer>
  )
}

const CardContainer = styled(motion.div)`
  min-height: 16rem;
  background: transparent;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  padding: 0 1rem;
  box-sizing: content-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Heading = styled(motion.custom(H2))`
  margin-top: 1rem;
  ${above.large`
    text-align: center;
  `}
`

const Subtitle = styled.span`
  font-weight: normal;
`
const InfoContainer = styled(motion.div)`
  margin-bottom: 1rem;
  > * {
    margin-bottom: 1rem;
  }
`

const Timeperiod = styled(motion.custom(Paragraph))`
  color: ${({ theme }) => theme.colors.grey};
`
const Description = styled(motion.custom(Paragraph))``

const ProjectLink = styled(motion.custom(A))``

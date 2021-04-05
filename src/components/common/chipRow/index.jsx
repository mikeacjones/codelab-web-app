import React from 'react'
import { Container } from 'components/common'
import { Link } from 'gatsby'
import { Tag, TagLabel, Stack, Avatar, HStack } from '@chakra-ui/react'

export const ChipRow = ({ labCategories, categories, slugs }) => {
  return (
    <Container>
      <Stack direction={['column', 'row']} spacing={2} wrap='wrap' align='center'>
        {labCategories.map(({ name, image }, index) => (
          <Tag
            key={name}
            size='lg'
            colorScheme='blue'
            borderRadius='full'
            variant={categories && categories.includes(name) ? 'subtle' : 'outline'}
            as={Link}
            to={`${slugs[name]}`}
            style={{marginBottom: '5px'}}>
            <Avatar src={`/images/icons/${image}`} size='xs' bg='transparent' name={name} ml={-1} mr={2} />
            <TagLabel>{name}</TagLabel>
          </Tag>
        ))}
      </Stack>
    </Container>
  )
}

import React from 'react'
import { Container } from 'components/common'
import { Link } from 'gatsby'
import { Tag, TagLabel, TagCloseButton, Avatar, HStack } from '@chakra-ui/react'

export const ChipRow = ({ labCategories, categories, slugs }) => {
  return (
    <Container>
      <HStack spacing={2} wrap='flexWrap' shouldWrapChildren>
        {labCategories.map(({ name, image }, index) => (
          <Tag key={name} size='lg' colorScheme='blue' borderRadius='full' variant={categories && categories.includes(name) ? 'subtle' : 'outline' } as={Link} to={`${slugs[name]}`}>
            <Avatar
              src={`/images/icons/${image}`}
              size='xs'
              bg='transparent'
              name={name}
              ml={-1}
              mr={2}
            />
            <TagLabel>{name}</TagLabel>
            {categories && categories.includes(name) && <TagCloseButton />}
          </Tag>
        ))}
      </HStack>
    </Container>
  )
}

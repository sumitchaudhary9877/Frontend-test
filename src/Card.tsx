// src/Card.tsx
import React from 'react';
import { Box, Image, Heading, Text, Badge, Button } from '@chakra-ui/react';
import { MdEdit } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { VscCalendar } from "react-icons/vsc";

interface CardProps {
  src: string;
  place: string;
  date: string;
  title: string;
  name: string;
  interests: Array<string>
  onEditClick: () => void;
}

const Card = ({ src,
  place,
  date,
  name,
  title,
  interests,
  onEditClick, }: CardProps) => {
  return (
    <Box width={800} p='10' m="10" display="flex" borderRadius={10} backgroundColor="white" boxShadow={'#00000024 0px 0px 10px 0px'} >
      <Box borderRadius="full" overflow="hidden" mr={4}>
        <Image src={src} alt={name} boxSize="150px" borderRadius="full" />
      </Box>

      <Box ml={2}>
        <Heading fontSize={'25'} display="block" fontWeight={'bold'}>{name}</Heading>
        <Text mb="1" fontSize={'15'} display="block" fontWeight={'300'}>{title}</Text>
        <Box display="flex" alignItems="center">
          <BiWorld size={15} /> <Text m="0" pl="2" fontSize={'15'} display="block" fontWeight={'300'}>{place}</Text>
        </Box>
        <Box display="flex" alignItems="center">
          <VscCalendar size={12} /> <Text m="0" pl="2" fontSize={'15'} display="block" fontWeight={'300'}>{date}</Text>
        </Box>
        <Box mt="4">
          <Heading fontSize={'15'} display="block" fontWeight={'bold'}>Interests</Heading>
          {interests.map((item) => <Badge fontSize="10" textTransform={'capitalize'} fontWeight="600" m="1" borderRadius="10" p="1">{item}</Badge>)}

        </Box>
      </Box>
      <Button leftIcon={<MdEdit />} ml={'auto'} colorScheme='gray' color="black" variant="outline" onClick={onEditClick}>Edit</Button>
    </Box>
  );
};

export default Card;

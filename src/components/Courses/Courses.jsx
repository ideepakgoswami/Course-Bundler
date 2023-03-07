import { Button, Container, Heading, HStack, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Course = ({ views, title, imageSrc, id, addToPlayListHandler, creator, description, lectureCount }) => {
    return (
        <VStack className="course" alignItems={['center', 'flex-start']}>
            <Image src={imageSrc} boxSize={'60'} objectFit={'contain'} />
            <Heading textAlign={['center', 'left']} maxW={'200px'} size={'sm'} fontFamily={'sans-serif'} noOfLines={3}>{title}</Heading>
            <Text noOfLines={2}>{description}</Text>
            <HStack>
                <Text fontWeight={'bold'} textTransform={'uppercase'}>Creator</Text>
                <Text fontFamily={'body'} textTransform={'uppercase'}>{creator}</Text>
            </HStack>
            <Heading textAlign={'center'} size={'xs'} textTransform={'uppercase'}>Lectures - {lectureCount}</Heading>
            <Heading size={'xs'} textTransform={'uppercase'}>views - {views}</Heading>

            <Stack direction={['column', 'row']} alignItems="center">
                <Link to={`/course/${id}`}>
                    <Button alignItems={'center'} colorScheme={'yellow'} >Watch Now</Button>
                </Link>
                <Button alignItems={'center'} colorScheme={'yellow'} variant={'ghost'} onClick={() => addToPlayListHandler(id)}>Add to Playlist</Button>

            </Stack>

        </VStack>
    )
}

const Courses = () => {
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('');

const addToPlayListHandler=()=>{
    console.log('Playlist add')
}

    const categories = [
        "Web Development",
        "Artificial Intelligence",
        "Data Structures & Algorithm",
        "App Development",
        "Data Science",
        "Game Development"
    ]
    return (
        <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
            <Heading size={'lg'} m={"8"}>All Courses</Heading>
            <Input value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="Search Course" type={'text'} focusBorderColor={"yellow.500"} />
            <HStack overflowX={'scroll'} py={'8'}>
                {

                    categories.map((item, index) => (
                        <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
                            <Text>{item}</Text>
                        </Button>
                    ))
                }
            </HStack>

            <Stack direction={['column', 'row']} flexWrap={'wrap'} justifyContent={['flex-start', 'space-evenly']} alignItems={['center', 'flex-start']}>
                <Course title={'Sample'} description={'Sample D'} views={23} imageSrc={'https://res.cloudinary.com/practicaldev/image/fetch/s--gps5oVPP--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/5ct9nhbw6gdpb8dh0yy1.png'} id={'Sample Id'} creator={'Sample Boy'} lectureCount={2} addToPlayListHandler={addToPlayListHandler}/>
            </Stack>
        </Container>
    )
}

export default Courses
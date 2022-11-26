import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button, LinkOverlay } from "@chakra-ui/react";

const Banner = ({ purpose, tittle1, tittle2, desc1, desc2,buttonText, linkname, imageUrl }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} with={"500"} height={"300"} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1}<br/>{title2}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br/>{desc2}</Text>
      <Button fontSize="xl" bg="blue.300" color="white">
        <Link href={linkname}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)
export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Banner 
        purpose="RENT A HOME"
        tittle1="Rental Homes for"
        tittle2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://www.pexels.com/photo/modern-building-against-sky-323780/"

      />
      <Banner
        purpose="BUY A HOME"
        tittle1="Find, Buy & Own Your"
        tittle2="Dream Home"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://www.pexels.com/photo/white-concrete-building-under-sunny-blue-sky-87223/"
      />
    </div>
  )
}

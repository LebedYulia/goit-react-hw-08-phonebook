import picture from 'components/images/grey.jpg';
import { Container, Text, Box } from './Main.styled';

export const Main = () => {
  return (
    <Container>
      <div>
        <img src={picture} alt="contacts book" width="400" />
      </div>
      <Box>
        <h1>Welcome to Contacts Book</h1>
        <Text>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus.
        </Text>
      </Box>
    </Container>
  );
};

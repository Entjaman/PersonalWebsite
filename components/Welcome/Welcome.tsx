import { Title, Text, Anchor } from '@mantine/core';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Jacob Forsell's{' '}
        <Text inherit variant="gradient" component="span">
          - website
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        Welcome! This website is simply made to showcase that I am a curious student who is interested in software development with a background in electrical engineering. Here, you can find different ways to reach me and visit my social pages and resume. Take a look around!
      </Text>
    </>
  );
}

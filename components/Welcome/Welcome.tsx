import { Title, Text, Anchor } from '@mantine/core';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Jacob Forsell{' '}
        <Text inherit variant="gradient" component="span">
          - my website
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        Welcome! This website is simply made to showcase I am a curious student who is interested in software with a background in electrical engineering. Here, you can find different ways to reach me and visit my social pages. Take a look around for yourself!
      </Text>
    </>
  );
}

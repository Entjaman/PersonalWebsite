import { createStyles, Title, Text, Button, Container, ActionIcon, Modal, Group, Center } from '@mantine/core';
import { Dots } from './Dots';
import Link from 'next/link';
import { IconDownload } from '@tabler/icons'
import { useState } from 'react';
import { UserInfoIcons } from '../Profile/Profile';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: 120,
    paddingBottom: 80,

    '@media (max-width: 755px)': {
      paddingTop: 80,
      paddingBottom: 60,
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  dots: {
    position: 'absolute',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

    '@media (max-width: 755px)': {
      display: 'none',
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: 'center',
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
  },

  description: {
    textAlign: 'center',

    '@media (max-width: 520px)': {
      textAlign: 'left',
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: 'flex',
    justifyContent: 'center',

    '@media (max-width: 520px)': {
      flexDirection: 'column',
    },
  },

  control: {
    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    '@media (max-width: 520px)': {
      height: 42,
      fontSize: theme.fontSizes.md,

      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

export function HeroText() {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          M.sc student in{' '}
          <Text component="span" className={classes.highlight} inherit>
            electrical engineering
          </Text>{' '}
          
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            Below you can find my Curriculum Vitae and Contact page! My grades are not given in this website, but can be acquired by contacting me.
          </Text>
        </Container>

        <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Below you can find my CVs in English and Swedish!"
        >
        {<UserInfoIcons avatar={'https://github.com/Entjaman/PersonalWebsite/raw/master/public/images/jacobforsell.jpeg'} name={'Jacob Forsell'} title={'Electrical Engineer'} phone={'+46 702785302'} email={'jacobzeforsell@gmail.com'}/>}
        <Container style={{marginTop: '10%'}}>
          <Center>
            <Link href={'https://github.com/Entjaman/PersonalWebsite/raw/master/public/cv/Jacob_Forsell_CV_EN.pdf'}>
              <Button className={classes.control} size="lg" variant="default" color="gray">
                <IconDownload style={{height: "20px", marginRight: "13px"}}></IconDownload>
                  Download: CV - EN
              </Button>
            </Link>
          </Center>
        </Container>
        <Container style={{marginTop: '5%'}}>
          <Center>
            <Link href={'https://github.com/Entjaman/PersonalWebsite/raw/master/public/cv/Jacob_Forsell_CV.pdf'}>
              <Button className={classes.control} size="lg" variant="default" color="gray">
                <IconDownload style={{height: "20px", marginRight: "13px"}}></IconDownload>
                  Download: CV - SE
              </Button>
            </Link>
          </Center>
        </Container>
        </Modal>

        <div className={classes.controls}>
        
            <Button className={classes.control} size="lg" variant="default" color="gray" onClick={() => setOpened(true)}>
               Curriculum Vitae
            </Button>
       
          <Link href={'contact'}>
            <Button className={classes.control} size="lg"  color="blue">
                Contact me   
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );


function Demo() {

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        {/* Modal content */}
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </>
  );
}
}
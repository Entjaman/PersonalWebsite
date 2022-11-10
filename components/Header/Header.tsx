import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  ActionIcon,
} from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import { useDisclosure } from '@mantine/hooks';
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandFacebook,
  IconHome2,
} from '@tabler/icons';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import Image from 'next/image';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: 42,
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

const mockdata = [
  {
    icon: IconCode,
    title: 'Open source',
    description: 'This Pokémon’s cry is very loud and distracting',
  },
  {
    icon: IconCoin,
    title: 'Free for everyone',
    description: 'The fluid of Smeargle’s tail secretions changes',
  },
  {
    icon: IconBook,
    title: 'Documentation',
    description: 'Yanma is capable of seeing 360 degrees without',
  },
  {
    icon: IconFingerprint,
    title: 'Security',
    description: 'The shell’s rounded shape and the grooves on its.',
  },
  {
    icon: IconChartPie3,
    title: 'Analytics',
    description: 'This Pokémon uses its flying ability to quickly chase',
  },
  {
    icon: IconNotification,
    title: 'Notifications',
    description: 'Combusken battles with the intensely hot flames it spews',
  },
];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" weight={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box pb={20}>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: '100%' }}>
          <Group className={classes.hiddenMobile} sx={{ height: '100%'}}>
            <Link href="/" passHref>
              <a href="/" className={classes.link}><IconHome2 style={{ height: "15px", margin: "3px", padding: "auto" }}></IconHome2>Home</a>
            </Link>  
            </Group>
            
        
          {/* <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
            <a href="#" className={classes.link}>
              Home
            </a>
            <a href="#" className={classes.link}>  
              Mitt CV
            </a>
            <a href="#" className={classes.link}>
              Kontakta mig
            </a>
          </Group> */}

          <Group className={classes.hiddenMobile}>
            <ColorSchemeToggle></ColorSchemeToggle>
            {/* <ActionIcon size="xl" radius="xl" variant="default" component="a" href="https://www.github.com/Entjaman">
              <IconBrandGithub></IconBrandGithub>
            </ActionIcon> */}
            <ActionIcon size="xl" radius="xl" variant="default" component="a" href="https://www.linkedin.com/in/jacob-forsell-0aaa81225/">
              <IconBrandLinkedin></IconBrandLinkedin>
            </ActionIcon>
            <ActionIcon size="xl" radius="xl" variant="default" component="a" href="https://www.instagram.com/forselljacob/">
              <IconBrandInstagram></IconBrandInstagram>
            </ActionIcon>
            <ActionIcon size="xl" radius="xl" variant="default" component="a" href="https://www.facebook.com/jacob.forsell.5/">
              <IconBrandFacebook></IconBrandFacebook>
            </ActionIcon>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
          
          <Link href="/" passHref>
              <a href="/" className={classes.link}><IconHome2 style={{ height: "15px", margin: "3px" }}></IconHome2>Home</a>
            </Link>  

          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <Group position="center" grow pb="xl" px="md">
          <ColorSchemeToggle></ColorSchemeToggle>
          {/* <ActionIcon size="xl" radius="xl" variant="default" component="a" href="https://www.github.com/Entjaman">
              <IconBrandGithub></IconBrandGithub>
            </ActionIcon> */}
            <ActionIcon size="xl" radius="xl" variant="default" component="a" href="https://www.linkedin.com/in/jacob-forsell-0aaa81225/">
              <IconBrandLinkedin></IconBrandLinkedin>
            </ActionIcon>
            <ActionIcon size="xl" radius="xl" variant="default" component="a" href="https://www.instagram.com/forselljacob/">
              <IconBrandInstagram></IconBrandInstagram>
            </ActionIcon>
            <ActionIcon size="xl" radius="xl" variant="default" component="a" href="https://www.facebook.com/jacob.forsell.5/">
              <IconBrandFacebook></IconBrandFacebook>
            </ActionIcon>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
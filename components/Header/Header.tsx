import {
  createStyles,
  Header,
  Group,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  ActionIcon,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandFacebook,
  IconHome2,
} from '@tabler/icons';
import Link from 'next/link';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

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

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  return (
    <Box pb={20}>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: '100%' }}>
          <Group className={classes.hiddenMobile} sx={{ height: '100%'}}>
            <Link href="/" passHref>
              <a href="/" className={classes.link}><IconHome2 style={{ height: '15px', margin: '3px', padding: 'auto' }} />Home</a>
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
            <ColorSchemeToggle />
            <ActionIcon size="xl" radius="xl" variant="default" component="a" href="https://www.github.com/Entjaman">
              <IconBrandGithub />
            </ActionIcon>
            <ActionIcon size="xl" radius="xl" variant="default" component="a" href="https://www.linkedin.com/in/jacob-forsell-0aaa81225/">
              <IconBrandLinkedin />
            </ActionIcon>
            <ActionIcon size="xl" radius="xl" variant="default" component="a" href="https://www.instagram.com/forselljacob/">
              <IconBrandInstagram />
            </ActionIcon>
            <ActionIcon size="xl" radius="xl" variant="default" component="a" href="https://www.facebook.com/jacob.forsell.5/">
              <IconBrandFacebook />
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
              <a href="/" className={classes.link}><IconHome2 style={{ height: '15px', margin: '3px' }} />Home</a>
          </Link>

          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <Group position="center" grow pb="xl" px="md">
          <ColorSchemeToggle />
          <ActionIcon size="xl" radius="xl" variant="default" component="a" href="https://www.github.com/Entjaman">
              <IconBrandGithub />
          </ActionIcon>
          <ActionIcon size="xl" radius="xl" variant="default" component="a" href="https://www.linkedin.com/in/jacob-forsell-0aaa81225/">
            <IconBrandLinkedin />
          </ActionIcon>
          <ActionIcon size="xl" radius="xl" variant="default" component="a" href="https://www.instagram.com/forselljacob/">
            <IconBrandInstagram />
          </ActionIcon>
          <ActionIcon size="xl" radius="xl" variant="default" component="a" href="https://www.facebook.com/jacob.forsell.5/">
            <IconBrandFacebook />
          </ActionIcon>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
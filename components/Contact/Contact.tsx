import { TextInput, Textarea, SimpleGrid, Group, Title, Button, Container } from '@mantine/core';
import { useForm } from '@mantine/form';
import emailjs from '@emailjs/browser'

export function GetInTouchSimple() {
  
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <Container>
      <form id="contactForm"onSubmit={form.onSubmit((form) => {
        let params = {
          form,
          'g-recaptcha-response': '6Le_eewiAAAAAN785g5dzQWwOpRDN6hZgIRMAJIL'
        }
        emailjs.send(
          "service_rci6x5t",
          "template_ozzjfmj",
          params,
          "-GuxFUKbWQ9rwbIvF"
        ).then(function(response) {
          alert("Your message has been sent!");
          console.log('SUCCESS!', response.status, response.text);
       }, function(error) {
          alert("Your message could not be sent... Try sending manually to: jacobzeforsell@gmail.com. Please also let me know that the contact form did not work!");
          console.log('FAILED...', error);
       });
      })}>
        <Title
          order={2}
          size="h1"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
          weight={900}
          align="center"
        >
          Get in touch
        </Title>

        <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          <TextInput
            label="Name"
            placeholder="Your name"
            name="name"
            variant="filled"
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            name="email"
            variant="filled"
            {...form.getInputProps('email')}
          />
        </SimpleGrid>

        <TextInput
          label="Subject"
          placeholder="Subject"
          mt="md"
          name="subject"
          variant="filled"
          {...form.getInputProps('subject')}
        />
        <Textarea
          mt="md"
          label="Message"
          placeholder="Your message"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"
          {...form.getInputProps('message')}
        />

        <Group position="center" mt="xl">
          <Button type="submit" size="md">
            Send
          </Button>
        </Group>
      </form>
    </Container>
  );
}
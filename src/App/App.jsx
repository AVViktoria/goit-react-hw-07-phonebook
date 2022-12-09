import '../index.scss';
//*      Components      //
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import Container from 'components/Container';
import Section from 'components/Section/Section';

//*      Root      //
export default function App() {
 
  return (
    <>
      <Section>
        <Container>
          <h1 className="title">Phonebook</h1>
          <ContactForm  />
        </Container>
        <Container>
          <h2 className="title">Contacts</h2>
          <Filter />
          <ContactList
          />
        </Container>
      </Section>
    </>
  );
}

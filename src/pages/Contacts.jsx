import { ContactsTitle, FormContainer } from "App.styled";
import ContactForm from "components/ContactForm";
import ContactList from "components/ContactList";
import Filter from "components/Filter";

const Contacts = () => {
    return (
    <FormContainer>
        <ContactForm />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        <ContactList />
      </FormContainer> 

    );
}

export default Contacts;
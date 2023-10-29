import { ContactForm } from '@ippsop/features/contact/components/ContactForm';
import { RichText } from '@ippsop/features/common/components/RichText';
import { fetchAboutData } from '@ippsop/lib/queries/about';

export default async function Contact() {
  const aboutData = await fetchAboutData();
  return (
    <>
      <h1>{aboutData.title}</h1>
      <section>
        <h2>À propos</h2>
        <RichText value={aboutData.content} />
      </section>
      <section>
        <h2>Coordonnées</h2>
        <ul>
          <li>
            Par téléphone ou Whatsapp :{' '}
            <a className={'underline'} href={'https://wa.me/+33622676009'}>
              <b>06 22 67 60 09</b>
            </a>
          </li>
          <li>
            Par mail :{' '}
            <a className={'underline'} href={'mailto:ippsop@gmail.com'}>
              <b>ippsop@gmail.com</b>
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h2>Contact</h2>
        <ContactForm />
      </section>
    </>
  );
}

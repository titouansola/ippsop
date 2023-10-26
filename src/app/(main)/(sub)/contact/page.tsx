export default function Contact() {
  return (
    <>
      <h1>Gaël Guenec</h1>
      <section className={'my-25'}>
        <h2>À propos</h2>
        <p>
          Passionné de science et de santé, je me suis toujours intéressé au
          développement des capacités physiques et du corps humain en général.
          Au cours de mon master en Science et Technique des Activités Physiques
          et Sportives, je me suis aperçu que les techniques de préparation
          physique de haut niveau n&apos;étaient jamais accessibles à tout le
          monde et encore moins aux personnes souffrant de pathologies ou
          vieillissantes. C’est alors que j&apos;ai décidé de créer ma structure
          d&apos;entraînement adaptée pour répondre à ce besoin.
        </p>
      </section>
      <section className={'my-25'}>
        <h2>Contact</h2>
        <ul>
          <li>
            Par téléphone ou Whatsapp :{' '}
            <a className={'underline'} href={'https://wa.me/+33622676909'}>
              <b>06 22 67 69 09</b>
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
    </>
  );
}

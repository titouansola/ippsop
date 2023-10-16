import Image from 'next/image';

export function Footer() {
  return (
    <footer
      className={
        'px-main flex w-full justify-between bg-black py-20 text-white'
      }
    >
      <div>
        <h6>Gaël Guenec</h6>
        <ul>
          <li>
            <Image
              src={'/img/icons/phone-alt.svg'}
              alt={'phone icon'}
              width={22}
              height={22}
            />
            06 22 67 69 09
          </li>
          <li>
            <Image
              src={'/img/icons/map-marker-alt.svg'}
              alt={'map marker icon'}
              width={22}
              height={22}
            />
            424 rue de Lisbonne
            <br />
            La Seyne-sur-Mer
          </li>
          <li>
            <Image
              src={'/img/icons/envelope.svg'}
              alt={'envelope icon'}
              width={22}
              height={22}
            />
            ippsop@gmail.com
          </li>
        </ul>
      </div>
      <div>
        <h6>Mes réseaux</h6>
        <ul>
          <li>
            <Image
              src={'/img/icons/facebook-square.svg'}
              alt={'Facebook icon'}
              width={22}
              height={22}
            />
            <a href="https://www.facebook.com/preparation.ippsop">Facebook</a>
          </li>
          <li>
            <Image
              src={'/img/icons/youtube.svg'}
              alt={'YouTube icon'}
              width={22}
              height={22}
            />
            <a href="https://www.youtube.com/@gaelguenec2315">YouTube</a>
          </li>
          <li>
            <Image
              src={'/img/icons/instagram.svg'}
              alt={'Instagram icon'}
              width={22}
              height={22}
            />
            <a href="https://www.instagram.com/gaelguenec/">Instagram</a>
          </li>
          <li>
            <Image
              src={'/img/icons/linkedin.svg'}
              alt={'LinkedIn icon'}
              width={22}
              height={22}
            />
            <a href="https://www.linkedin.com/company/ippsop/about/">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h6>Services</h6>
        <ul>
          <li>Préparation physique</li>
          <li>Coaching sportif</li>
          <li>Accompagnement thérapeutique</li>
          <li>Entreprises</li>
        </ul>
      </div>
      <div>
        <h6>Liens utiles</h6>
        <ul>
          <li>À propos</li>
          <li>Conférences / Articles</li>
          <li>FAQ</li>
        </ul>
      </div>
    </footer>
  );
}

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
          <li>06 22 67 69 09</li>
          <li>
            424 rue de Lisbonne
            <br />
            La Seyne-sur-Mer
          </li>
          <li>ippsop@gmail.com</li>
        </ul>
      </div>
      <div>
        <h6>Mes réseaux</h6>
        <ul>
          <li>Facebook</li>
          <li>YouTube</li>
          <li>Instagram</li>
          <li>LinkedIn</li>
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

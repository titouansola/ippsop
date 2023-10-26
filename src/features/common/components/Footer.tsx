import { ServicePageContent } from '@ippsop/lib/models/service-page-content';

export function Footer({ services }: { services: ServicePageContent[] }) {
  return (
    <footer className={'bg-black text-white'}>
      <div
        className={
          'px-main relative flex flex-col justify-between gap-16 py-20 md:grid md:grid-cols-2 lg:flex lg:w-full lg:flex-row'
        }
      >
        <div className={'footer-block'}>
          <h6>Gaël Guenec</h6>
          <ul>
            <li>
              <a href={'https://wa.me/+33622676909'}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_15_1685)">
                    <path
                      d="M21.3722 15.5462L16.5597 13.4837C16.3541 13.3961 16.1257 13.3776 15.9087 13.4311C15.6917 13.4846 15.4979 13.6071 15.3566 13.7802L13.2254 16.3841C9.88055 14.807 7.18876 12.1152 5.61172 8.77045L8.21562 6.6392C8.38908 6.49812 8.51185 6.30438 8.56535 6.08729C8.61884 5.8702 8.60015 5.64159 8.51211 5.43608L6.44961 0.623575C6.35298 0.402032 6.18207 0.221149 5.96636 0.112118C5.75065 0.00308581 5.50366 -0.0272611 5.26797 0.0263096L0.799219 1.05756C0.571987 1.11003 0.36925 1.23798 0.224097 1.42051C0.0789444 1.60304 -5.2345e-05 1.82939 2.60228e-08 2.0626C2.60228e-08 13.0841 8.9332 22.0001 19.9375 22.0001C20.1708 22.0002 20.3972 21.9213 20.5799 21.7761C20.7625 21.631 20.8905 21.4282 20.943 21.2009L21.9742 16.7321C22.0274 16.4953 21.9965 16.2473 21.8866 16.0309C21.7767 15.8144 21.5948 15.643 21.3722 15.5462Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_15_1685">
                      <rect width="22" height="22" fill="currentColor" />
                    </clipPath>
                  </defs>
                </svg>
                06 22 67 69 09
              </a>
            </li>
            <li>
              <a
                href={'https://maps.app.goo.gl/EpTVGaXKd1vXddZVA'}
                target={'_blank'}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_15_1689)">
                    <path
                      d="M11.0751 23.5158C4.26422 13.6421 3 12.6287 3 9C3 4.02942 7.02942 0 12 0C16.9706 0 21 4.02942 21 9C21 12.6287 19.7358 13.6421 12.9249 23.5158C12.478 24.1614 11.522 24.1614 11.0751 23.5158ZM12 12.75C14.0711 12.75 15.75 11.0711 15.75 9C15.75 6.92892 14.0711 5.25 12 5.25C9.92892 5.25 8.25 6.92892 8.25 9C8.25 11.0711 9.92892 12.75 12 12.75Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_15_1689">
                      <rect width="24" height="24" fill="currentColor" />
                    </clipPath>
                  </defs>
                </svg>
                424 rue de Lisbonne
                <br />
                La Seyne-sur-Mer
              </a>
            </li>
            <li>
              <a href={'mailto:ippsop@gmail.com'}>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.5264 9.31641C24.7168 9.16504 25 9.30664 25 9.5459V19.5312C25 20.8252 23.9502 21.875 22.6562 21.875H2.34375C1.0498 21.875 0 20.8252 0 19.5312V9.55078C0 9.30664 0.27832 9.16992 0.473633 9.32129C1.56738 10.1709 3.01758 11.25 7.99805 14.8682C9.02832 15.6201 10.7666 17.2021 12.5 17.1924C14.2432 17.207 16.0156 15.5908 17.0068 14.8682C21.9873 11.25 23.4326 10.166 24.5264 9.31641ZM12.5 15.625C13.6328 15.6445 15.2637 14.1992 16.084 13.6035C22.5635 8.90137 23.0566 8.49121 24.5508 7.31934C24.834 7.09961 25 6.75781 25 6.39648V5.46875C25 4.1748 23.9502 3.125 22.6562 3.125H2.34375C1.0498 3.125 0 4.1748 0 5.46875V6.39648C0 6.75781 0.166016 7.09473 0.449219 7.31934C1.94336 8.48633 2.43652 8.90137 8.91602 13.6035C9.73633 14.1992 11.3672 15.6445 12.5 15.625Z"
                    fill="currentColor"
                  />
                </svg>
                ippsop@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className={'footer-block'}>
          <h6>Mes réseaux</h6>
          <ul>
            <li>
              <a href="https://www.facebook.com/preparation.ippsop">
                <svg
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3438 1.5625H4.15625C3.53465 1.5625 2.93851 1.80943 2.49897 2.24897C2.05943 2.68851 1.8125 3.28465 1.8125 3.90625L1.8125 21.0938C1.8125 21.7154 2.05943 22.3115 2.49897 22.751C2.93851 23.1906 3.53465 23.4375 4.15625 23.4375H10.8579V16.0005H7.78174V12.5H10.8579V9.83203C10.8579 6.79736 12.6646 5.12109 15.4316 5.12109C16.7568 5.12109 18.1426 5.35742 18.1426 5.35742V8.33594H16.6157C15.1113 8.33594 14.6421 9.26953 14.6421 10.2271V12.5H18.0005L17.4634 16.0005H14.6421V23.4375H21.3438C21.9654 23.4375 22.5615 23.1906 23.001 22.751C23.4406 22.3115 23.6875 21.7154 23.6875 21.0938V3.90625C23.6875 3.28465 23.4406 2.68851 23.001 2.24897C22.5615 1.80943 21.9654 1.5625 21.3438 1.5625Z"
                    fill="currentColor"
                  />
                </svg>
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@gaelguenec2315">
                <svg
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_15_1708)">
                    <path
                      d="M24.1066 6.77439C23.834 5.74792 23.0308 4.9395 22.011 4.66515C20.1624 4.16663 12.7501 4.16663 12.7501 4.16663C12.7501 4.16663 5.33773 4.16663 3.48917 4.66515C2.46933 4.93954 1.66612 5.74792 1.39351 6.77439C0.898193 8.63494 0.898193 12.5168 0.898193 12.5168C0.898193 12.5168 0.898193 16.3987 1.39351 18.2592C1.66612 19.2857 2.46933 20.0604 3.48917 20.3348C5.33773 20.8333 12.7501 20.8333 12.7501 20.8333C12.7501 20.8333 20.1624 20.8333 22.011 20.3348C23.0308 20.0604 23.834 19.2857 24.1066 18.2592C24.6019 16.3987 24.6019 12.5168 24.6019 12.5168C24.6019 12.5168 24.6019 8.63494 24.1066 6.77439ZM10.3258 16.0412V8.99236L16.5211 12.5169L10.3258 16.0412Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_15_1708">
                      <rect
                        width="25"
                        height="25"
                        fill="currentColor"
                        transform="translate(0.25)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                YouTube
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/gaelguenec/">
                <svg
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7549 6.88477C9.64941 6.88477 7.14453 9.38965 7.14453 12.4951C7.14453 15.6006 9.64941 18.1055 12.7549 18.1055C15.8604 18.1055 18.3652 15.6006 18.3652 12.4951C18.3652 9.38965 15.8604 6.88477 12.7549 6.88477ZM12.7549 16.1426C10.748 16.1426 9.10742 14.5068 9.10742 12.4951C9.10742 10.4834 10.7432 8.84766 12.7549 8.84766C14.7666 8.84766 16.4023 10.4834 16.4023 12.4951C16.4023 14.5068 14.7617 16.1426 12.7549 16.1426ZM19.9033 6.65527C19.9033 7.38281 19.3174 7.96387 18.5947 7.96387C17.8672 7.96387 17.2861 7.37793 17.2861 6.65527C17.2861 5.93262 17.8721 5.34668 18.5947 5.34668C19.3174 5.34668 19.9033 5.93262 19.9033 6.65527ZM23.6191 7.9834C23.5361 6.23047 23.1357 4.67773 21.8516 3.39844C20.5723 2.11914 19.0195 1.71875 17.2666 1.63086C15.46 1.52832 10.0449 1.52832 8.23828 1.63086C6.49023 1.71387 4.9375 2.11426 3.65332 3.39355C2.36914 4.67285 1.97363 6.22559 1.88574 7.97852C1.7832 9.78516 1.7832 15.2002 1.88574 17.0068C1.96875 18.7598 2.36914 20.3125 3.65332 21.5918C4.9375 22.8711 6.48535 23.2715 8.23828 23.3594C10.0449 23.4619 15.46 23.4619 17.2666 23.3594C19.0195 23.2764 20.5723 22.876 21.8516 21.5918C23.1309 20.3125 23.5313 18.7598 23.6191 17.0068C23.7217 15.2002 23.7217 9.79004 23.6191 7.9834ZM21.2852 18.9453C20.9043 19.9023 20.167 20.6396 19.2051 21.0254C17.7646 21.5967 14.3467 21.4648 12.7549 21.4648C11.1631 21.4648 7.74023 21.5918 6.30469 21.0254C5.34766 20.6445 4.61035 19.9072 4.22461 18.9453C3.65332 17.5049 3.78516 14.0869 3.78516 12.4951C3.78516 10.9033 3.6582 7.48047 4.22461 6.04492C4.60547 5.08789 5.34277 4.35059 6.30469 3.96484C7.74512 3.39355 11.1631 3.52539 12.7549 3.52539C14.3467 3.52539 17.7695 3.39844 19.2051 3.96484C20.1621 4.3457 20.8994 5.08301 21.2852 6.04492C21.8564 7.48535 21.7246 10.9033 21.7246 12.4951C21.7246 14.0869 21.8564 17.5098 21.2852 18.9453Z"
                    fill="currentColor"
                  />
                </svg>
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/ippsop/about/">
                <svg
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.125 1.5625H3.37012C2.51074 1.5625 1.8125 2.27051 1.8125 3.13965V21.8604C1.8125 22.7295 2.51074 23.4375 3.37012 23.4375H22.125C22.9844 23.4375 23.6875 22.7295 23.6875 21.8604V3.13965C23.6875 2.27051 22.9844 1.5625 22.125 1.5625ZM8.42383 20.3125H5.18164V9.87305H8.42871V20.3125H8.42383ZM6.80273 8.44727C5.7627 8.44727 4.92285 7.60254 4.92285 6.56738C4.92285 5.53223 5.7627 4.6875 6.80273 4.6875C7.83789 4.6875 8.68262 5.53223 8.68262 6.56738C8.68262 7.60742 7.84277 8.44727 6.80273 8.44727ZM20.5771 20.3125H17.335V15.2344C17.335 14.0234 17.3105 12.4658 15.6504 12.4658C13.9609 12.4658 13.7021 13.7842 13.7021 15.1465V20.3125H10.46V9.87305H13.5703V11.2988H13.6143C14.0488 10.4785 15.1084 9.61426 16.6855 9.61426C19.9668 9.61426 20.5771 11.7773 20.5771 14.5898V20.3125Z"
                    fill="currentColor"
                  />
                </svg>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className={'footer-block'}>
          <h6>Services</h6>
          <ul>
            {services.map(({ title, slug }) => (
              <li key={slug.current}>
                <a href={`/services/${slug.current}`}>{title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={'footer-block'}>
          <h6>Liens utiles</h6>
          <ul>
            <li>
              <a href={'/contact'}>À propos</a>
            </li>
            <li>
              <a href={'/conferences'}>Conférences / Articles</a>
            </li>
            <li>
              <a href={'/foire-aux-questions'}>FAQ</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={'pb-2 text-center text-sm font-light'}>
        Site réalisé par&nbsp;
        <a href="https://titouansola.dev" target={'_blank'}>
          <b>Titouan Sola</b>
        </a>
      </div>
    </footer>
  );
}

import clsx from 'clsx';

export function OpenState() {
  const date = new Date();
  const day = date.getDay();
  const hours = date.getHours() + date.getMinutes() / 60;
  const opened = day < 6 && hours > 9.5 && hours < 19;

  return (
    <div className={'hidden flex-col items-end gap-3 lg:flex'}>
      <p className={'flex items-center gap-3'}>
        <span
          className={clsx(
            opened ? 'bg-green' : 'bg-red',
            'h-3 w-3 rounded-full'
          )}
        />
        <span>{opened ? 'Ouvert' : 'Fermé'}</span>
        <span>9h30 - 19h</span>
      </p>
      <a
        href={'https://maps.app.goo.gl/EpTVGaXKd1vXddZVA'}
        target={'_blank'}
        className={'text-secondary underline'}
      >
        424 Rue de Lisbonne,
        <br className={'block lg:hidden'} /> La Seyne-sur-Mer
      </a>
    </div>
  );
}

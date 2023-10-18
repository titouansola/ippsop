export default function Service({ params }: { params: { slug: string } }) {
  return <div className={'h-screen'}>{params.slug} - WIP</div>;
}

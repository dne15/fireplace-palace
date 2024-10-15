import Image from 'next/image';

export function Heroimg() {
  return (
    <figure className="heroimg">
      <Image src="/images/hero-mobile.png" alt='hero image' width={100} height={100} />
    </figure>
  );
}

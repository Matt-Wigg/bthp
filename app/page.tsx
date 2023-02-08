import Image from 'next/image';
import Link from 'next/link';
import style from './page.module.css';

export default function Home() {
  return (
    <section>
      <h1>
        <div className={style.brandTitle}>Between The Heights</div>
        {/* <div className={style.brandTitle}> </div> */}
        <div>Productions</div>
      </h1>
      <hr />
      <h2>Editing - Directing - Videography</h2>
      <div className={style.danProfile}>
        <div className={style.danImage}>
          <Image
            className={style.danImage}
            src='/dan_photo.jpg'
            alt='Daniel DuVallr'
            fill
            priority
          />
        </div>
        <div className={style.danLinks}>
          <Link
            className={style.linkedin}
            href='https://www.linkedin.com/in/daniel-duvall-47384913b/'
            rel='noopener noreferrer'
            target='_blank'
          >
            <div className={style.linkText}>
              <div className={style.text}>LinkedIn</div>
              <div className={style.icon}>↗</div>
            </div>
          </Link>
          <Link
            className={style.youtube}
            href='https://www.youtube.com/channel/UCM9fIG9SMJaTTtRhKxxtVaA'
            rel='noopener noreferrer'
            target='_blank'
          >
            <div className={style.linkText}>
              <div>YouTube</div>
              <div>↗</div>
            </div>
          </Link>
          <Link
            className={style.vimeo}
            href='https://vimeo.com/user48513860'
            rel='noopener noreferrer'
            target='_blank'
          >
            <div className={style.linkText}>
              <div>Vimeo</div>
              <div>↗</div>
            </div>
          </Link>
        </div>
      </div>
      <hr />
      <div>
        <p>
          Daniel DuVall is <i>(not a Horse, but)</i> a{' '}
          <a href='/productions'>
            <b>film / video</b>
          </a>{' '}
          editor and director based in Southern California.
        </p>
        <p>
          Daniel received a Bachelor of Science in Digital Filmmaking & Video
          Production from the Art Institute of Pittsburgh, and has experience
          creating short films, music videos, web series, and branded commercial
          content. His music video for the song &quot;Uptown Party&quot; by The
          Faintest Glow was featured by &quot;Music From the 412&quot; in
          Pittsburgh, PA.
        </p>
      </div>
    </section>
  );
}

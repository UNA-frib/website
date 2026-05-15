import { ActivityWheel } from '../components/activityWheel/activity-wheel';
import styles from './activity-section.module.css';

export function ActivitySection() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.wheelSide}>
          <ActivityWheel />
        </div>

        <div className={styles.infoSide}>
          {/* Default Info */}
          <div className={`${styles.infoBox} ${styles.defaultInfo}`}>
            <h2 className={styles.title}>Nos Activités</h2>
            <p className={styles.description}>
              Survolez les segments du cercle pour découvrir nos différents pôles d'intervention.
            </p>
          </div>

          {/* Solidarity Info */}
          <div className={`${styles.infoBox} ${styles.solidarityInfo}`}>
            <h2 className={styles.title}>Solidarité</h2>
            <p className={styles.description}>
              Deux fois par an, nous organisons un souper culturel dédié à la découverte d&#39;un
              pays à travers sa gastronomie, ses traditions et ses saveurs. Ces soirées sont aussi
              l'occasion d'une récolte de fonds pour soutenir nos projets et renforcer l'inclusion
              des personnes réfugiées.
            </p>
          </div>

          {/* Cultural Info */}
          <div className={`${styles.infoBox} ${styles.culturalInfo}`}>
            <h2 className={styles.title}>Activités culturelles</h2>
            <p className={styles.description}>
              Nous organisons des événements ouverts à tou-te-s pour favoriser la rencontre entre
              étudiant-e-s et réfugié-e-s. Sorties, ateliers créatifs et moments conviviaux : autant
              d'occasions d'échanger, de se découvrir et de tisser des liens au-delà des
              différences.
            </p>
          </div>

          {/* Foyer Info */}
          <div className={`${styles.infoBox} ${styles.foyerInfo}`}>
            <h2 className={styles.title}>Activités en foyer</h2>
            <p className={styles.description}>
              Nous allons à la rencontre des réfugié-e-s là où ils et elles vivent, en organisant
              des activités directement dans les foyers. Ces moments partagés créent un lien de
              proximité et offrent un espace de détente, d'échange et de convivialité au quotidien.
            </p>
          </div>

          {/* Language Info */}
          <div className={`${styles.infoBox} ${styles.languageInfo}`}>
            <h2 className={styles.title}>Cours de langue</h2>
            <p className={styles.description}>
              Apprendre une nouvelle langue, c'est aussi apprendre à se comprendre. Nos cours,
              animés par des étudiant-e-s bénévoles, permettent aux réfugié-e-s de progresser dans
              leur intégration tout en donnant à nos membres la possibilité de développer leurs
              compétences pédagogiques.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

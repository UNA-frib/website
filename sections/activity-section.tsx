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
              Actions de soutien et d'entraide pour la communauté.
            </p>
          </div>

          {/* Cultural Info */}
          <div className={`${styles.infoBox} ${styles.culturalInfo}`}>
            <h2 className={styles.title}>Activités culturelles</h2>
            <p className={styles.description}>
              Découverte du patrimoine et événements artistiques.
            </p>
          </div>

          {/* Foyer Info */}
          <div className={`${styles.infoBox} ${styles.foyerInfo}`}>
            <h2 className={styles.title}>Activités en foyer</h2>
            <p className={styles.description}>
              Animation et vie sociale au sein de nos foyers.
            </p>
          </div>

          {/* Language Info */}
          <div className={`${styles.infoBox} ${styles.languageInfo}`}>
            <h2 className={styles.title}>Cours de langue</h2>
            <p className={styles.description}>
              Apprentissage et perfectionnement des langues étrangères.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

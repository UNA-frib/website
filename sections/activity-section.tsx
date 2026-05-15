'use client';

// TODO move to section folder
import { useState } from 'react';
import { ActivityWheel } from '../components/activityWheel/activity-wheel';

export function ActivitySection() {
  const [activeActivity, setActiveActivity] = useState<string | null>(null);

  const getActivityName = (id: string | null) => {
    switch (id) {
      case 'solidarity': return 'Solidarité';
      case 'cultural': return 'Activités culturelles';
      case 'foyer': return 'Activités en foyer';
      case 'language': return 'Cours de langue';
      default: return 'Nos Activités';
    }
  };

  const getActivityDescription = (id: string | null) => {
    switch (id) {
      case 'solidarity': return 'Actions de soutien et d\'entraide pour la communauté.';
      case 'cultural': return 'Découverte du patrimoine et événements artistiques.';
      case 'foyer': return 'Animation et vie sociale au sein de nos foyers.';
      case 'language': return 'Apprentissage et perfectionnement des langues étrangères.';
      default: return 'Survolez les segments du cercle pour découvrir nos différents pôles d\'intervention.';
    }
  };

  return (
    <section style={{ 
      margin: '4rem 0', 
      padding: '2rem', 
      backgroundColor: 'rgba(255, 255, 255, 0.5)', 
      borderRadius: '24px',
      border: '1px solid var(--primary-border)'
    }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        alignItems: 'center', 
        gap: '3rem',
        justifyContent: 'center'
      }}>
        <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
          <ActivityWheel onHover={(id) => setActiveActivity(id)} />
        </div>
        
        <div style={{ flex: '1 1 300px', textAlign: 'left' }}>
          <h2 style={{ marginTop: 0, border: 'none' }}>{getActivityName(activeActivity)}</h2>
          <p style={{ fontSize: '1.2rem', minHeight: '3em' }}>
            {getActivityDescription(activeActivity)}
          </p>
        </div>
      </div>
    </section>
  );
}

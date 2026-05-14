import { ProfilePicture } from '../../../components/profilePicture/profile-picture';
import { reader } from '../../reader';
import styles from './members.module.css';

export default async function MembersPage() {
  const membersData = await reader.singletons.members.read();

  if (!membersData) {
    return <div>No members found.</div>;
  }

  return (
    <div>
      <h1>{membersData.title || 'Our Team'}</h1>
      <div className={styles.membersGrid}>
        {membersData.members.map((member, index) => (
          <div key={index} className={styles.memberCard}>
            <ProfilePicture src={member.profilePicture} alt={member.profilePicture ? `${member.firstName} ${member.lastName}` : ''} />
            <h3 style={{ margin: 0 }}>{member.firstName} {member.lastName}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

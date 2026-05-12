import { reader } from '../../reader';
import '../../styles.css';

export default async function MembersPage() {
  const membersData = await reader.singletons.members.read();

  if (!membersData) {
    return <div>No members found.</div>;
  }

  return (
    <div>
      <h1>{membersData.title || 'Nos membres'}</h1>
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '2rem',
        marginTop: '2rem'
      }}>
        {membersData.members.map((member, index) => (
          <div key={index} style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            width: '200px',
            textAlign: 'center'
          }}>
            {member.profilePicture ? (
              <img 
                src={member.profilePicture} 
                alt={`${member.firstName} ${member.lastName}`}
                style={{ 
                  width: '150px', 
                  height: '150px', 
                  borderRadius: '50%', 
                  objectFit: 'cover',
                  marginBottom: '1rem',
                  border: '1px solid #eaeaea'
                }}
              />
            ) : (
              <div style={{ 
                width: '150px', 
                height: '150px', 
                borderRadius: '50%', 
                backgroundColor: '#eee',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                color: '#999'
              }}>
                No Photo
              </div>
            )}
            <h3 style={{ margin: 0 }}>{member.firstName} {member.lastName}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

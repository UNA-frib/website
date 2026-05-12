import styles from './profile-picture.module.css';

type ProfilePictureProps = {
  src?: string | null;
  alt?: string;
};

export function ProfilePicture({ src, alt }: ProfilePictureProps) {
  return (
    <img 
      src={src || '/images/members/default_pp.jpg'} 
      alt={alt || ''} 
      className={styles.memberPhoto} 
    />
  );
}

import ProfileSVG from "@/assets/SVG/ProfileSVG.svg";
import styles from './ProfileButton.module.scss';

const ProfileButton = () => {
  return (
    <div className={styles.profile}>
        <ProfileSVG />
    </div>
  )
}

export default ProfileButton
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';
import clsx from 'clsx';

export const ButtonType = {
  PRIMARY: 'primary',
  GHOST: 'ghost'
}

/**
 * 
 * @param {string} classNames?
 * @param {string} icon?
 * @param {string} image?
 * @param {string} titleIcon?
 * @param {string} title
 * @param {string} description
 * @param {{ label: string, link: string, type: ButtonType }} action
 *
 * @returns ReactNode
 */
export const Card = ({ classNames, icon, image, title, titleIcon, description, action }) => {
  const hasIcon = Boolean(icon);
  const hasImage = Boolean(image);
  const hasTitleIcon = Boolean(titleIcon);
  const linkClassnames = clsx(styles.cardBtn, 'button', {
    'button--primary': action.type === ButtonType.PRIMARY,
    'button--outline button--primary': action.type === ButtonType.GHOST,
  });

  return (
    <div className={clsx(styles.card, classNames, { [styles.cardWithImage]: hasImage })}>
      {hasIcon && <img src={icon} className={styles.icon} />}
      {hasImage && <img src={image} className={styles.image} />}
      <Heading as='h4' className={clsx(styles.title, { [styles.titleWithIcon]: hasTitleIcon })}>
        {hasTitleIcon && <img src={titleIcon} />}
        {title}
      </Heading>
      <p className={styles.description}>{description}</p>
      <Link to={action.link} className={linkClassnames}>{action.label}</Link>
    </div>
  )
}
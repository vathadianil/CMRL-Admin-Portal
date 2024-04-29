import {
  faHome,
  faDesktop,
  faFile,
  faMicrochip,
  faTrain,
  faUserGear,
  faUserGroup,
  faUserTag,
  faUserShield,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
export function getIcon(icon: string): any {
  let fontawesomeIcon = faHome;
  switch (icon) {
    case 'home':
      return (fontawesomeIcon = faHome);
    case 'monitoring':
      return (fontawesomeIcon = faDesktop);
    case 'file':
      return (fontawesomeIcon = faFile);
    case 'microChip':
      return (fontawesomeIcon = faMicrochip);
    case 'train':
      return (fontawesomeIcon = faTrain);
    case 'manage_accounts':
      return (fontawesomeIcon = faUserGear);
    case 'group':
      return (fontawesomeIcon = faUserGroup);
    case 'roles':
      return (fontawesomeIcon = faUserTag);
    case 'privileges':
      return (fontawesomeIcon = faUserShield);
    case 'dots':
      return (fontawesomeIcon = faEllipsis);
  }
  return fontawesomeIcon;
}

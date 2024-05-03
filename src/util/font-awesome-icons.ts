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
  faDownload,
  faPlus,
  faPen,
  faTrashCan,
  faCircleInfo,
  faClock,
  faEnvelopeOpenText,
  faNewspaper,
  faCreditCard,
  faRightToBracket,
  faRightFromBracket,
  faPowerOff,
  faChevronDown,
  faMoneyBill,
  faMap,
  faSliders,
  faTrainTram,
  faEye,
  faEyeSlash,
  faCopyright,
  faPersonArrowUpFromLine,
  faListCheck,
  faFileExcel,
  faFilePdf,
} from '@fortawesome/free-solid-svg-icons';
export function getIcon(icon: string): any {
  let fontawesomeIcon = faCircleInfo;
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
    case 'download':
      return (fontawesomeIcon = faDownload);
    case 'add':
      return (fontawesomeIcon = faPlus);
    case 'edit':
      return (fontawesomeIcon = faPen);
    case 'delete':
      return (fontawesomeIcon = faTrashCan);
    case 'alarm':
      return (fontawesomeIcon = faClock);
    case 'inbox':
      return (fontawesomeIcon = faEnvelopeOpenText);
    case 'article_shortcut':
      return (fontawesomeIcon = faNewspaper);
    case 'credit_card':
      return (fontawesomeIcon = faCreditCard);
    case 'input':
      return (fontawesomeIcon = faRightToBracket);
    case 'exit':
      return (fontawesomeIcon = faRightFromBracket);
    case 'supervisor_account':
      return (fontawesomeIcon = faPersonArrowUpFromLine);
    case 'power':
      return (fontawesomeIcon = faPowerOff);
    case 'expand_more':
      return (fontawesomeIcon = faChevronDown);
    case 'domain_verification':
      return (fontawesomeIcon = faMoneyBill);
    case 'assignment_turned_in':
      return (fontawesomeIcon = faListCheck);
    case 'map':
      return (fontawesomeIcon = faMap);
    case 'tune':
      return (fontawesomeIcon = faSliders);
    case 'tram':
      return (fontawesomeIcon = faTrainTram);
    case 'visibility':
      return (fontawesomeIcon = faEye);
    case 'visibility_off':
      return (fontawesomeIcon = faEyeSlash);
    case 'copyright':
      return (fontawesomeIcon = faCopyright);
    case 'file_copy':
      return (fontawesomeIcon = faFileExcel);
    case 'picture_as_pdf':
      return (fontawesomeIcon = faFilePdf);
  }
  return fontawesomeIcon;
}

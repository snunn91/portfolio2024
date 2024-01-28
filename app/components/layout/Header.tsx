import { faEnvelope as Email } from '@fortawesome/free-solid-svg-icons';
import { faGithub as Git, faLinkedin as LinkedIn } from '@fortawesome/free-brands-svg-icons';

import IconLink from '../navigation/IconLink';

interface HeaderProps {

  }

const Header: React.FC<HeaderProps> = ({ }) => {
    return (
        <header className="flex justify-end ">
        <ul className="flex items-center justify-end gap-x-6">
          <li>
            <IconLink href={'mailto:sam.nunn91@gmail.com'} icon={Email} ></IconLink>
          </li>
          <li>
          <IconLink href={'https://github.com/snunn91'} icon={Git} ></IconLink>
          </li>
          <li>
          <IconLink href={'https://www.linkedin.com/in/sam-nunn91/'} icon={LinkedIn} ></IconLink>
          </li>
        </ul>
      </header>
    );
  };
  
  export default Header;





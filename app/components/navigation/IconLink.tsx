import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';


interface IconLinkProps {
  href: string;
  icon: IconDefinition;
}

const IconLink: React.FC<IconLinkProps> = ({ href, icon }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className=''>
      <FontAwesomeIcon className="w-12 transform hover:translate-y-2 duration-500 ease-in-out" icon={icon} />
    </a>
  );
};

export default IconLink;
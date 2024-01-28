interface IconLinkProps {
    href: string;
    text: string;
  }

const IconLink: React.FC<IconLinkProps> = ({ href, text }) => {
    return (
        
            <a href={href} target="_blank" rel="noopener noreferrer" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                {text}
            </a>
       
     
    );
  };
  
  export default IconLink;


const date = new Date();
const currentYear = date.getFullYear();
const Footer: React.FC = ({ }) => {
    return (
        <footer className="flex justify-end my-5">
            <p className="flex flex-row gap-x-1 hind font-bold text-sm"><span>&#169;</span>{currentYear}<span>Sam Nunn</span></p>
        </footer>
    );
  };
  
  export default Footer;
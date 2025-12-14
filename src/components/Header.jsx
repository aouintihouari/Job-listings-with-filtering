import bgHeaderDesktop from "/images/bg-header-desktop.svg";
import bgHeaderMobile from "/images/bg-header-mobile.svg";

const Header = () => {
  return (
    <header className="relative top-0 left-0 z-0 w-full bg-green-400 md:bg-green-400">
      <picture>
        <source srcSet={bgHeaderDesktop} media="(min-width: 768px)"></source>
        <source srcSet={bgHeaderMobile} media="(max-width: 767px)"></source>
        <img className="w-full" src={bgHeaderDesktop} />
      </picture>
    </header>
  );
};

export default Header;

import './intro.scss';
import Wrapper from 'components/wrapper/Wrapper';
import ScrollLink from 'components/scroll-link/ScrollLink';

const Intro = ({ nextLink }) => {
  return (
    <section className="intro" id="intro">
      <Wrapper>
        <div className="intro__content">
          <div className="intro__greeting">Hi, I&apos;m</div>
          <div className="intro__name">Nika</div>
          <div className="intro__job-title">Frontend Developer</div>
        </div>
        <ScrollLink section href={nextLink} />
      </Wrapper>
    </section>
  );
};

export default Intro;

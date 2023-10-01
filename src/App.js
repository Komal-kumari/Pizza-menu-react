import "./styles.css";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

const Avatar = () => {
  return (
    <>
      <div className="avatar">
        <img className="avatar" src="avatar.jpg" alt="img" />
      </div>
    </>
  );
};
const Intro = () => {
  return (
    <>
      <h1>KOMAL KUMARI</h1>
      Full-Stack developer is a professional responsible for working on both
      front-end and back-end development processes. They design, develop, and
      maintain fully-fledged and functioning platforms with databases or
      servers.
    </>
  );
};
const SkillList = () => {
  return (
    <>
      <div className="skill">
        <Skill skill="HTML" color="blue" />
        <Skill skill="CSS" color="red" />
        <Skill skill="BOOTSTRAP" color="yellow" />
        <Skill skill="REACTJS" color="green" />
      </div>
    </>
  );
};
const Skill = (props) => {
  return (
    <div className="skill-list" style={{ backgroundColor: props?.color }}>
      <span>{props.skill}</span>
    </div>
  );
};

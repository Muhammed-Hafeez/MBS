import HeroCommon from '../components/common/HeroCommon.jsx';
import ProjectCards from '../components/ProjectCard.jsx';

function Projects() {
  return (
    <div>
      <HeroCommon
        data={{
          title: "our services",
          heading: "RESPECT & INTEGRITY IN ALL WE DO",
          body: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque sapiente sed quae consectetur in repellat, commodi similique perspiciatis eaque, vitae, saepe quo facilis cumque praesentium vel quidem amet provident esse?",
          image:
            "https://res.cloudinary.com/dbumvyukj/image/upload/v1725870937/jpmrxgxfnyv8fg9iopqc.webp",
        }}
      />
      <ProjectCards/>
    </div>
  );
}

export default Projects

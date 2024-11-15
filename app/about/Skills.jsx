import Languages from "./skills/Languages";
import Frameworks from "./skills/Frameworks";
import Databases from "./skills/Databases";
import BaaS from "./skills/BaaS";
import ToolsAndTech from "./skills/ToolsAndTech";

export default function Skills() {
  return (
    <aside id="skills" className="mb-4">
      <h2 className="text-center pb-3">Technical Skills</h2>

      <div className="skills-grid">
        <Languages />

        <Frameworks />

        <Databases />

        <BaaS />

        <ToolsAndTech />
      </div>
    </aside>
  );
}

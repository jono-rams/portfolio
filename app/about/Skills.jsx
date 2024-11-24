import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

import Languages from "./skills/Languages";
import Frameworks from "./skills/Frameworks";
import Databases from "./skills/Databases";
import BaaS from "./skills/BaaS";
import ToolsAndTech from "./skills/ToolsAndTech";

export default function Skills() {
  return (
    <aside id="skills" className="mb-4">
      <h2 className="pb-3 text-4xl font-bold text-center">Technical Skills</h2>

      <Tabs defaultValue="languages">
      <TabsList className="grid w-full h-full grid-rows-5 md:grid-rows-2 md:grid-cols-3 justify-self-center lg:h-12 lg:grid-rows-1 lg:grid-cols-5">
        <TabsTrigger value="languages">Languages</TabsTrigger>
        <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
        <TabsTrigger value="databases">Databases</TabsTrigger>
        <TabsTrigger value="baas">BaaS (Backend as a Service)</TabsTrigger>
        <TabsTrigger value="tools-and-tech">Tools & Technologies</TabsTrigger>
      </TabsList>
      <TabsContent value="languages">
        <Languages />
      </TabsContent>
      <TabsContent value="frameworks">
        <Frameworks />
      </TabsContent>
      <TabsContent value="databases">
        <Databases />
      </TabsContent>
      <TabsContent value="baas">
        <BaaS />
      </TabsContent>
      <TabsContent value="tools-and-tech">
        <ToolsAndTech />
      </TabsContent>
    </Tabs>
    </aside>
  );
}

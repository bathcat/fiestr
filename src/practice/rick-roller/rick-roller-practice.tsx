import { ReadMe } from '@components/read-me';
import { RickRoller as RickRollerStarter } from './starter/rick-roller.tsx';
import { RickRoller as RickRollerComplete } from './complete/rick-roller.tsx';

import readme from './README.md?raw';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const RickRollerPractice = () => (
  <Tabs defaultValue="overview">
    <TabsList>
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="starter">Starter</TabsTrigger>
      <TabsTrigger value="complete">Complete</TabsTrigger>
    </TabsList>
    <TabsContent value="overview">
      <ReadMe markdown={readme} />
    </TabsContent>
    <TabsContent value="starter">
      <RickRollerStarter />
    </TabsContent>
    <TabsContent value="complete">
      <RickRollerComplete />
    </TabsContent>
  </Tabs>
);

import { ReadMe } from '@components/read-me';
import { Planets as StatePlanets } from './state-planets';
import { Planets as ReducerPlanets } from './planets-reducer';
import { Planets as ImmerPlanets } from './immer-planets';

import readme from './README.md?raw';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const PlanetsDemo = () => (
  <Tabs defaultValue="overview">
    <TabsList>
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="state">State</TabsTrigger>
      <TabsTrigger value="reducer">Reducer</TabsTrigger>
      <TabsTrigger value="immer">Immer</TabsTrigger>
    </TabsList>
    <TabsContent value="overview">
      <ReadMe markdown={readme} />
    </TabsContent>
    <TabsContent value="state">
      <StatePlanets />
    </TabsContent>
    <TabsContent value="reducer">
      <ReducerPlanets />
    </TabsContent>
    <TabsContent value="immer">
      <ImmerPlanets />
    </TabsContent>
  </Tabs>
);

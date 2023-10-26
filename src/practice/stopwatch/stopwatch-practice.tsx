import { ReadMe } from '@components/read-me';
import { Stopwatch as StopwatchStarter } from './starter/stopwatch';
import { Stopwatch as StopwatchNaive } from './naive/stopwatch';
import { Stopwatch as StopwatchComplete } from './complete/stopwatch';

import readme from './README.md?raw';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const StopwatchPractice = () => (
  <Tabs defaultValue="overview">
    <TabsList>
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="starter">Starter</TabsTrigger>
      <TabsTrigger value="naive">Naive</TabsTrigger>
      <TabsTrigger value="complete">Complete</TabsTrigger>
    </TabsList>
    <TabsContent value="overview">
      <ReadMe markdown={readme} />
    </TabsContent>
    <TabsContent value="starter">
      <StopwatchStarter />
    </TabsContent>
    <TabsContent value="naive">
      <StopwatchNaive />
    </TabsContent>
    <TabsContent value="complete">
      <StopwatchComplete />
    </TabsContent>
  </Tabs>
);

import { ReadMe } from '@components/read-me';
import { Stopwatch as StopwatchStarter } from './starter/stopwatch';
import { Stopwatch as StopwatchComplete } from './complete/stopwatch';
import { Stopwatch as StopwatchFancy } from './fancy/stopwatch';

import readme from './README.md?raw';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// export const StopwatchPractice = () =>
// <>
//     <Link to={routes.StopwatchComplete.path}>
//         Complete
//     </Link>
//     <ReadMe markdown={readme} />;
// </>

export const StopwatchPractice = () => (
  <Tabs defaultValue="overview">
    <TabsList>
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="starter">Starter</TabsTrigger>
      <TabsTrigger value="complete">Complete</TabsTrigger>
      <TabsTrigger value="fancy">Fancy</TabsTrigger>
    </TabsList>
    <TabsContent value="overview">
      <ReadMe markdown={readme} />
    </TabsContent>
    <TabsContent value="starter">
      <StopwatchStarter />
    </TabsContent>
    <TabsContent value="complete">
      <StopwatchComplete />
    </TabsContent>
    <TabsContent value="fancy">
      <StopwatchFancy />
    </TabsContent>
  </Tabs>
);

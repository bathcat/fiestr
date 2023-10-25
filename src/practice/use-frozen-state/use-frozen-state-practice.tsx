import { ReadMe } from '@components/read-me';

import readme from './README.md?raw';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UseFrozenStateComponent as UseFrozenStateComponentComplete } from './complete/use-frozen-state-component';
import { UseFrozenStateComponent as UseFrozenStateComponentStarter } from './starter/use-frozen-state-component';

export const UseFrozenStatePractice = () => (
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
      <UseFrozenStateComponentStarter />
    </TabsContent>
    <TabsContent value="complete">
      <UseFrozenStateComponentComplete />
    </TabsContent>
  </Tabs>
);

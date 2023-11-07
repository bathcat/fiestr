import { ReadMe } from '@components/read-me';
import { Page as DrilledPage } from './drilled-page';
import { Page as ContextualPage } from './contextual-page';

import readme from './README.md?raw';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const HeadingsDemo = () => (
  <Tabs defaultValue="overview">
    <TabsList>
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="drilling">Drilling</TabsTrigger>
      <TabsTrigger value="contextual">Contextual</TabsTrigger>
    </TabsList>
    <TabsContent value="overview">
      <ReadMe markdown={readme} />
    </TabsContent>
    <TabsContent value="drilling">
      <DrilledPage />
    </TabsContent>
    <TabsContent value="contextual">
      <ContextualPage />
    </TabsContent>
  </Tabs>
);

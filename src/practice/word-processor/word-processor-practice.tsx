import { ReadMe } from '@components/read-me';
import { WordProcessor as WordProcessorStarter } from './starter/word-processor';
import { WordProcessor as WordProcessorComplete } from './complete/word-processor';

import readme from './README.md?raw';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const WordProcessorPractice = () => (
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
      <WordProcessorStarter />
    </TabsContent>
    <TabsContent value="complete">
      <WordProcessorComplete />
    </TabsContent>
  </Tabs>
);

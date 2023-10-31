import { ReadMe } from '@components/read-me';
import { FizzBuzz as FizzBuzzStarter } from './starter/fizz-buzz';
import { FizzBuzz as FizzBuzzComplete } from './complete/fizz-buzz';

import readme from './README.md?raw';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const FizzBuzzPractice = () => (
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
      <FizzBuzzStarter />
    </TabsContent>
    <TabsContent value="complete">
      <FizzBuzzComplete />
    </TabsContent>
  </Tabs>
);

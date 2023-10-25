import { ReadMe } from '@components/read-me';
import readme from './README.md?raw';
import { WeatherInfo as WeatherInfoStarter } from './starter/weather-info';
import { WeatherInfo as WeatherInfoComplete } from './complete/weather-info';
import { WeatherInfo as WeatherInfoFancy } from './fancy/weather-info';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const WeatherPractice = () => {
  return (
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
        <WeatherInfoStarter />
      </TabsContent>
      <TabsContent value="complete">
        <WeatherInfoComplete />
      </TabsContent>
      <TabsContent value="fancy">
        <WeatherInfoFancy />
      </TabsContent>
    </Tabs>
  );
};

import { PlaygroundPage } from './pages/playground-page.tsx';
import { HomePage } from './pages/home-page.tsx';

import { FizzBuzzPractice } from './practice/fizz-buzz/fizz-buzz-practice.tsx';
import { StopwatchPractice } from './practice/stopwatch/stopwatch-practice.tsx';
import { WeatherPractice } from './practice/weather/weather-practice.tsx';
import { RickRollerPractice } from './practice/rick-roller/rick-roller-practice.tsx';

import { ReactNode } from 'react';
import { WordProcessorPractice } from './practice/word-processor/word-processor-practice.tsx';
import { UseFrozenStatePractice } from './practice/use-frozen-state/use-frozen-state-practice.tsx';
import { InvitationsPractice } from './practice/invitations/invitations-practice.tsx';

interface RouteInfo {
  path: string;
  element: ReactNode;
  title: string;
}

export const practiceRoutes: { [key: string]: RouteInfo } = {
  WeatherPractice: {
    path: '/practice/weather',
    element: <WeatherPractice />,
    title: 'Weather',
  },
  StopwatchPractice: {
    path: '/practice/stopwatch',
    element: <StopwatchPractice />,
    title: 'Stopwatch',
  },
  FizzBuzzPractice: {
    path: '/practice/fizzbuzz',
    element: <FizzBuzzPractice />,
    title: 'Fizz buzz',
  },
  VideoPlayerPractice: {
    path: '/practice/rick-roller',
    element: <RickRollerPractice />,
    title: 'Rick Roller',
  },
  WordProcessorPractice: {
    path: '/practice/word-processor',
    element: <WordProcessorPractice />,
    title: 'Word Processor',
  },
  UseFrozenStatePractice: {
    path: '/practice/use-frozen-state',
    element: <UseFrozenStatePractice />,
    title: 'Frozen State',
  },
  InvitationsPractice: {
    path: '/practice/invitations',
    element: <InvitationsPractice />,
    title: 'Invitations',
  },
};

export const routes = {
  ...practiceRoutes,
  Home: {
    path: '/',
    element: <HomePage />,
    name: 'Home',
  },
  Playground: {
    path: '/playground',
    element: <PlaygroundPage />,
    name: 'Playground',
  },
};
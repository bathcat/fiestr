import { PropsWithChildren, createContext, useContext } from 'react';

export const LevelContext = createContext(1);

interface SectionProps extends PropsWithChildren {
  level: number;
}

export const Section = ({ children, level }: SectionProps) => {
  return (
    <section className="section prose">
      <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </section>
  );
};



export const Heading = ({ children }: PropsWithChildren) => {
  const level = useContext(LevelContext);
  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error('Unknown level: ' + level);
  }
};

export const Page = () => {
  return (
    <Section level={1}>
      <Heading>Title (Contextual) </Heading>
      <Section level={2}>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section level={3}>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section level={4}>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
};

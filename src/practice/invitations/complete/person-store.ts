import { Person } from './person';

const people: Array<Person> = [
  {
    id: '001',
    name: 'Pat Morrison',
    occupation: 'Pilot',
    profileUrl: 'src/assets/fake-person.0.jpg',
  },
  {
    id: '002',
    name: 'Jane Doe',
    occupation: 'Hairdresser',
    profileUrl: 'src/assets/fake-person.1.jpg',
  },
  {
    id: '003',
    name: 'Marissa Pentworthy',
    occupation: 'Writer',
    profileUrl: 'src/assets/fake-person.2.jpg',
  },
  {
    id: '004',
    name: 'Taylor Kenton',
    occupation: 'Ship Captain',
    profileUrl: 'src/assets/fake-person.3.jpg',
  },
  {
    id: '005',
    name: 'Joe Adultman',
    occupation: 'Cobbler',
    profileUrl: 'src/assets/fake-person.4.jpg',
  },
  {
    id: '006',
    name: 'Jane Cool',
    occupation: 'Private Investigator',
    profileUrl: 'src/assets/fake-person.5.jpg',
  },
  {
    id: '007',
    name: 'Teena Kim',
    occupation: 'Influencer',
    profileUrl: 'src/assets/fake-person.6.jpg',
  },
  {
    id: '008',
    name: 'Jamie Farnsworth',
    occupation: 'Chef',
    profileUrl: 'src/assets/fake-person.7.jpg',
  },
  {
    id: '010',
    name: 'Claude Gaspar Bachet de Méziriac',
    occupation: 'Mathematician',
    profileUrl:
      'src/assets/Claude_Gaspard_Bachet_de_Méziriac_-_Versailles_MV_2893.jpg',
  },
];

export class PersonStore {
  public getPeople(): Array<Person> {
    return people;
  }
  public getPerson(id: string) {
    const matches = people.filter(p => p.id === id);
    if (matches && matches.length) {
      return matches[0];
    }
    return null;
  }
}

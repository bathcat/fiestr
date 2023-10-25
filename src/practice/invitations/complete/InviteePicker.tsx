import { useState } from 'react';

import { PersonCard } from './PersonCard.tsx';
import { PersonStore } from './person-store.ts';
import { Person } from './person.ts';

interface Guest extends Person {
  invited: boolean;
}

export const InviteePicker = () => {
  const store = new PersonStore();
  const initialGuests: Array<Guest> = store
    .getPeople()
    .map(p => ({ ...p, invited: false }));
  const [guests, setGuests] = useState(initialGuests);

  const setInvited = (personID: string, invited: boolean) =>
    setGuests(
      guests.map(g => {
        if (g.id === personID) {
          return { ...g, invited };
        }
        return g;
      }),
    );

  //
  // Naive Implementation
  //
  // const setInvited = (personID: string, invited: boolean) => {
  //   console.log(`Setting ${personID} to ${invited}`);
  //   const targets = guests.filter(p => p.id == personID);
  //   if (!targets || targets.length !== 1) {
  //     throw "Can't find target.";
  //   }
  //   const target = targets[0];
  //   target.invited = invited;
  //   setGuests(guests);
  // };

  //
  // Slow Implementation
  //
  // const setInvited = (personID: string, invited: boolean) =>
  //   setGuests(
  //     guests.map(old => {
  //       const guest = { ...old };
  //       if (guest.id === personID) {
  //         guest.invited = invited;
  //       }
  //       return guest;
  //     }),
  //   );

  return (
    <div className="bg-slate-50 object-fill">
      <div className="py-8 px-8 max-w-sm mx-auto my-1 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">Invitations</p>
            <p className="text-slate-500 font-medium">y</p>
          </div>
          <button>xxx</button>
        </div>
      </div>
      {guests.map(p => (
        <PersonCard
          person={p}
          isInvited={p.invited}
          setInvited={setInvited}
          key={p.id}
        />
      ))}
    </div>
  );
};

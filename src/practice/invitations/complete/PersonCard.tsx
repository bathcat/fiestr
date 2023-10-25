import { ToggleInvitationButton } from './ToggleInvitationButton.tsx';
import { ProfilePic } from './ProfilePic.tsx';
import type { Person } from './person.ts';

interface Props {
  person: Person;
  isInvited: boolean;
  setInvited(personID: string, invited: boolean): void;
}

export const PersonCard = ({ person, isInvited, setInvited }: Props) => (
  <div className="py-8 px-8 max-w-sm mx-auto my-1 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <ProfilePic url={person.profileUrl} />
    <div className="text-center space-y-2 sm:text-left">
      <div className="space-y-0.5">
        <p className="text-lg text-black font-semibold">{person.name}</p>
        <p className="text-slate-500 font-medium">{person.occupation}</p>
      </div>
      <ToggleInvitationButton
        invited={isInvited}
        setInvited={i => setInvited(person.id, i)}
      />
    </div>
  </div>
);

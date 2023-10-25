interface TogglerProps {
  invited: boolean;
  setInvited(invited: boolean): void;
}

const Colors = Object.freeze({
  Red: 'bg-red-100 text-red-600 border-red-200 hover:bg-red-600 focus:ring-red-600',
  Purple:
    'bg-purple-100 text-purple-600 border-purple-200 hover:bg-purple-600 focus:ring-purple-600',
});

export const ToggleInvitationButton = ({
  invited,
  setInvited,
}: TogglerProps) => (
  <button
    className={`
      px-4 
      py-1 
      text-sm
      font-semibold 
      rounded-full border
      hover:border-transparent
      focus:outline-none 
      focus:ring-2
      focus:ring-offset-2
      hover:text-white
      ${invited ? Colors.Red : Colors.Purple}
    `}
    onClick={() => setInvited(!invited)}
  >
    {invited ? 'Uninvite' : 'Invite'}
  </button>
);

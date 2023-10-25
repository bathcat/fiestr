interface Props {
  url: string;
}

export const ProfilePic = ({ url }: Props) => (
  <img
    className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
    src={url}
    alt="Portrait"
  />
);

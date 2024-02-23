import { createLazyFileRoute } from '@tanstack/react-router';

const Profile = () => {
  return (
    <div className="p-2">Hello from Profiel!</div>
  );
};

export const Route = createLazyFileRoute('/profile')({
  component: Profile,
});
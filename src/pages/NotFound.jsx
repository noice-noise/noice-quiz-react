import NavItem from '../components/NavItem';

export default function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-5 text-center">
      <h1 className="pb-5 text-3xl">Page Not Found</h1>
      <NavItem href="/">Home</NavItem>
    </div>
  );
}

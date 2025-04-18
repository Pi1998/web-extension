import Bottom from './components/sections/Bottom';
import Mid from './components/sections/Mid';
import Top from './components/sections/Top';

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-full w-full">
      <Top />
      <Mid />
      <Bottom />
    </div>
  );
}

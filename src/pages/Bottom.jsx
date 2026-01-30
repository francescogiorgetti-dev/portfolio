import { SVG } from '../components/ui/SVG';

const Bottom = () => {

  return (
    <section>
      <div className="flex items-center text-sm font-light justify-center mb-20 select-none">
        <p className="light ">Made with ❤ using</p>
        {SVG('html')}
        {SVG('tailwind')}
        {SVG('react')}
      </div>
    </section>
  );
}

export default Bottom;
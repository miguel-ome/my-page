import { Carrousel } from '@/components/carrousel/carrousel.component';
import { StepsCircle } from '@/components/steps/stepsCircle/stepsCircle.components';

export default function About() {
  return (
    <div className="w-4/5 h-full p-8 flex flex-col justify-center items-center text-white">
      <Carrousel>
        <p className="text-white">Ola</p>
      </Carrousel>
      <StepsCircle />
    </div>
  );
}

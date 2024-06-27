'use client'

import { useState, useEffect } from 'react';
import { VariableData, allVariableDataDTO } from './interfaces/elvisTypes';
import {
  ChevronRightIcon
} from '@heroicons/react/20/solid'
import Link from 'next/link';

const VariableDetails: React.FC = () => {
  const [allVariableData, setAllVariableData] = useState<VariableData[] | null>(null);
  const [showVariableDetails, setShowVariableDetails] = useState(false);

  useEffect(() => {
    fetchAllVariableData();
  }, []);

  

  const fetchAllVariableData = async () => {
    try {
      const response = await fetch(
        'https://metadata.kreftregisteret.no/rest/v1/variables/:filtered'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data: allVariableDataDTO = await response.json();
      setAllVariableData(data.variableList);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const toggleVariableDetails = () => {
    setShowVariableDetails(!showVariableDetails);
    console.log(showVariableDetails);
  };

  return (
    <div className="flex bg-white w-screen h-full min-h-screen pt-16">
      <div className="flex w-full justify-center p-1 md:p-4">
        <div className='flex w-full xl:w-1/3 lg:w-fit border border-black shadow-lg h-fit p-4 rounded-lg shadow-[#46658D] flex-col'>
          <p className='md:text-2xl text-xl font-semibold'>Hei og velkommen til min case oppgave for FHI/Kreftregisteret </p>
          <p className='text-lg md:text-xl font-semibold text-[#46658A] mt-7' >I denne applikasjonen har du mulighet til å se variabler som Kreftregisteret har forhåndsdefinert. Denne siden er en tilnærmet versjon av den opprinnelige nettsiden, som du kan finne <a className='text-purple-500 border-b border-black' href='https://metadata.kreftregisteret.no'>her</a>. Det er fortsatt noe funksjonalitet og et par bugs her og der som må fikses i tillegg er siden ikke optimalisert for mobiltelefoner enda, men ikke bekymre deg, I am on the case.</p>
          <p className='text-md md:text-lg font-semibold text-[#46658A] mt-7' >Mvh: Ahmed</p>
            <Link href={'/details'}  className='border p-2 w-fit rounded-xl border-[#46658A] ml-auto flex items-center justify-center mt-6 mr-6 font-semibold group/btn hover:bg-[#46658A] hover:text-white '>Trykk her for å se tilgjengelige variabler<ChevronRightIcon className='w-10 h-8 group-hover/btn:text-white text-[#46658A]'/></Link>
        </div>
      </div>
    </div>
  );
};

export default VariableDetails;


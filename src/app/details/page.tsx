'use client'

import { useState, useEffect } from 'react'
import { VariableData, allVariableDataDTO } from '../interfaces/elvisTypes'
import { MagnifyingGlassIcon, ChevronDownIcon, ChevronUpIcon, ChevronLeftIcon, ChevronRightIcon, ChevronDoubleDownIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ArrowUturnLeftIcon, ArrowDownTrayIcon, DocumentPlusIcon
} from '@heroicons/react/20/solid'
import Link from 'next/link';
import * as XLSX from 'xlsx';

const VariableDetails: React.FC = () => {
  const [allVariableData, setAllVariableData] = useState<VariableData[] | null>(null);
  const [showVariableDetailsID, setShowVariableDetailsID] = useState<number>(0)
  const [paginationValues, setPaginationValues] = useState({ start: 0, end: 20})
  const [paginationBarRange, setPaginationBarRange] = useState({barRangeStart: 0, barRangeEnd: 15})
  const [sortIngConditions, setSortIngConditions] = useState('')
  const [searchKeyWord, setSearchKeyWord] = useState('')
  const [filteredData, setFilteredData] = useState<VariableData[] | null>(null);


  useEffect(() => {
    fetchAllVariableData()
  }, [])

  useEffect(() => {
    if (searchKeyWord) {
      const keyword = searchKeyWord.toLowerCase();
      const filtered = allVariableData?.filter((item) =>
        item.name.toLowerCase().includes(keyword) ||
        item.description.toLowerCase().includes(keyword) ||
        item.techName.toLowerCase().includes(keyword) ||
        item.nameEn.toLowerCase().includes(keyword)
        // item.validFrom.includes(keyword)
      );
      setFilteredData(filtered || null);
    } else {
      setFilteredData(null);
    }
  }, [searchKeyWord, allVariableData]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyWord(event.target.value);
  };

  const fetchAllVariableData = async () => {
    try {
      const response = await fetch(
        'https://metadata.kreftregisteret.no/rest/v1/variables/:filtered'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data: allVariableDataDTO = await response.json();
      data.variableList.sort((a, b) => a.name.localeCompare(b.name))
      setAllVariableData(data.variableList);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const toggleVariableDetails = (id: number) => {
    if (showVariableDetailsID === id) {
      setShowVariableDetailsID(0)
    } else {
    setShowVariableDetailsID(id)
    }
  }

  const downloadExcel = (id: string) => {
    console.log('downloading excel')
    if (!allVariableData) return;
    let dataToDownload: VariableData[] = allVariableData;

    if (id) {
      const filteredData = allVariableData.find(item => item.id === parseInt(id));
      if (filteredData) {
        dataToDownload = [filteredData];
      }
    }

    const worksheet = XLSX.utils.json_to_sheet(dataToDownload);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');

    const fileName = id ? `data_${id}.xlsx` : 'all_data.xlsx';
    XLSX.writeFile(workbook, fileName);
  };

  return (
    <div className="flex max-w-screen w-fit md:w-screen h-full min-h-screen pt-16">
      <div className="bg-[#F5F5F5] w-1/5 h-screen overflow-y-scroll hidden md:flex flex-col">
        <p>TODO ADD FILTER OG CHECK BOKSES HER</p>
      </div>
      <div className="bg-white flex flex-col gap-7 w-full h-screen overflow-y-scroll p-7">
        <div>
          <p className="bg-[#DFF0D8] p-4 shadow-lg sha">
            Kreftregisteret har forhåndsdefinert noen variabelsamlinger som kan
            være nyttige å ta utgangspunkt i. Disse finner du under filteret
            «Tags». Variabelsamlingen «Krefttilfeller – diagnostikk og
            primærbehandling» (under «Datasamlinger») er Kreftregisterets
            kjernedata og bør inngå – helt eller delvis – i alle utleveringer.
            Variabelsamlingen «Medikamentell kreftbehandling» (under
            «Predefinerte datasett») er variablene som er gjort tilgjengelige
            via INSPIRE-prosjektet. Disse må også kombineres med
            Kreftregisterets kjernedata og, om nødvendig, også med variabler i
            aktuelle kvalitetsregistre.
          </p>
        </div>
        <p className="text-4xl text-[#46658A] font-semibold">Variabler</p>
        <div className="flex gap-3">
          {/* // TODO lag et komponent her */}
          <div>
            <input
              className="border p-2 rounded w-64 border-r-0 placeholder-gray-600 rounded-r-none "
              type="text"
              placeholder="Søk etter Variabler"
              value={searchKeyWord}
              onChange={handleSearchChange}
            />
            <button className="border bg-[#46658A] border-l-0 rounded rounded-l-none text-white p-2">
              <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <select className="border p-2 focus:border-blue-500 rounded w-44 placeholder-gray-600 rounded-r-none">
            <option value="" disabled selected>
              Kategorier
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
            <option value="option5">Option 5</option>
          </select>

          {/* TODO lag et komponent her */}
          <select className="border p-2 focus:border-blue-500 rounded w-44 placeholder-gray-600 rounded-r-none">
            <option value="" disabled selected>
              Gyldig fra
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
            <option value="option5">Option 5</option>
          </select>
          <select className="border p-2 focus:border-blue-500 rounded w-44 placeholder-gray-600 rounded-r-none">
            <option value="" disabled selected>
              Gyldig til
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
            <option value="option5">Option 5</option>
          </select>
          <button className="border flex items-center gap-1 border-[#46658A] hover:bg-[#46658A] rounded hover:text-white p-2">
            <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" /> Søk
          </button>
          <button className="border border-[#46658A] hover:bg-[#46658A] rounded hover:text-white p-2">
            <ArrowUturnLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <button onClick={() => downloadExcel('')} className="border border-[#46658A] hover:bg-[#46658A] rounded hover:text-white p-2">
            <ArrowDownTrayIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="flex flex-col h-fit w-full">
          <div className=" flex text-[#46658A] border-y p-3 h-20">
            {/* TODO lag et komponent her */}
            <div className="flex items-center gap-2 w-1/2">
              <p className="font-bold">Navn</p>
              <button className="flex flex-col">
                <ChevronUpIcon
                  className="h-5 w-5 translate-y-2"
                  aria-hidden="true"
                />
                <ChevronDownIcon
                  className="h-5 w-5 -translate-y-1"
                  aria-hidden="true"
                />
              </button>
            </div>
            {/* TODO lag et komponent her */}
            <div className="flex items-center gap-2 w-1/4">
              <p className="font-bold">Kan utleveres</p>
              <button className="flex flex-col">
                <ChevronUpIcon
                  className="h-5 w-5 translate-y-2"
                  aria-hidden="true"
                />
                <ChevronDownIcon
                  className="h-5 w-5 -translate-y-1"
                  aria-hidden="true"
                />
              </button>
            </div>
            {/* TODO lag et komponent her */}
            <div className="flex items-center gap-2 w-1/4">
              <p className="font-bold">Gyldig fra</p>
              <button className="flex flex-col">
                <ChevronUpIcon
                  className="h-5 w-5 translate-y-2"
                  aria-hidden="true"
                />
                <ChevronDownIcon
                  className="h-5 w-5 -translate-y-1"
                  aria-hidden="true"
                />
              </button>
            </div>
            {/* TODO lag et komponent her */}
            <div className="flex items-center gap-2 w-1/4">
              <p className="font-bold">Anbefalt technavn</p>
              <button className="flex flex-col">
                <ChevronUpIcon
                  className="h-5 w-5 translate-y-2"
                  aria-hidden="true"
                />
                <ChevronDownIcon
                  className="h-5 w-5 -translate-y-1"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
        {/* hver kolonne div må ha samme bredde som rad diven, vurder å bruke grid istedenfor flex */}

      {allVariableData && allVariableData.length &&
        (filteredData? filteredData : allVariableData).slice(paginationValues.start, paginationValues.end).map((variable) => (
        <div key={variable.id} className="flex flex-col gap-3 px-3 w-full pb-3 h-fit">
          <div className='flex relative w-full border-b'>
            <div className="flex flex-col gap-2 w-1/2 ">
              <Link href={`/details/${variable.id}`} className="font-semibold text-[#46658A] text-xl w-fit cursor-pointer border-b border-white hover:border-black">{variable.name}</Link>
              <p className="text-black">
                {variable.description ? variable.description : 'Ingen beskrivelse'}
              </p>
            </div>
            <div className="flex flex-col gap-2 w-1/4">
              <p className="">{variable.publicVariable ? 'Ja' : 'Nei'}</p>
            </div>
            <div className="flex flex-col gap-2 w-1/4">
              <p className="">{variable.validFrom}</p>
            </div>
            <div className="flex flex-col gap-2 w-1/4">
              <p className="">{variable.techName}</p>
            </div>
            <div className="absolute right-0 gap-2 m-auto">
              <div className='flex gap-3'>
                <button onClick={() => toggleVariableDetails(variable.id)}  className="border flex items-center gap-1 border-[#46658A] bg-[#46658A] rounded text-white p-2">
                  <ChevronDoubleDownIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                <button className="border flex items-center gap-1 border-[#46658A] bg-[#46658A] rounded text-white p-2">
                  <DocumentPlusIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          {/* variable details */}
          <div className={` ${showVariableDetailsID === variable.id ? 'flex pb-3 mt-3' : '-z-10 hidden -translate-y-24' } flex border-b w-full`}>
            <div className="flex flex-col gap-2 w-1/2 ">
              <p><span className='font-semibold'>Kategori: </span> {variable.category.name}</p>
              <p><span className='font-semibold'>Kvalitetsregistre: </span>{variable.category.description}</p>
              {/* <p><span className='font-semibold'>Kreftform: </span> {variable.category.description}</p> */}
            </div>
            <div className="flex flex-col gap-2 w-1/4">
              <p><span className='font-semibold'>Informasjonsnivå: </span>{variable.informationLevel.name}</p>
              <p><span className='font-semibold'>Kilde: </span>TODO</p>
              <p><span className='font-semibold'>Registreringsmetode: </span> {variable.registrationMethod.name}</p>
            </div>
            <div className="flex flex-col gap-2 w-1/4">
              <p><span className='font-semibold'>Kvalitetsregistre: </span>TODO</p>
              <p><span className='font-semibold'>Kreftform: </span> TODO</p>
            </div>
            <div className="flex flex-col gap-2 w-1/4">
            </div>
          </div>
        </div>
      ))}
      { !searchKeyWord &&
        <div className=' flex gap-2 items-center justify-center w-full mb-32 h-20'>
          <button onClick={() => setPaginationBarRange({barRangeStart: paginationValues.start * 2, barRangeEnd: paginationValues.start * 2 + 10})} className='border p-1 w-16 border-[#46658A] flex items-center justify-center hover:bg-[#46658A] hover:text-white rounded'><ChevronDoubleLeftIcon className='w-7 h-7 text-[#46658A]'/></button>
          <button className='border p-1 w-16 border-[#46658A] flex items-center justify-center hover:bg-[#46658A] hover:text-white rounded'><ChevronLeftIcon className='w-7 h-7 text-[#46658A]'/></button>
          {allVariableData && allVariableData.length &&
            allVariableData?.slice(paginationBarRange.barRangeStart, paginationBarRange.barRangeEnd).map((variable, index) => (
            <button key={variable.id} onClick={() => setPaginationValues({start: index * 20, end: (index + 1) * 20})} className='border p-1  border-[#46658A] flex items-center justify-center hover:bg-[#46658A] w-16 hover:text-white rounded'>{index + 1 }</button>
          ))}
          <button className='border p-1 w-16 border-[#46658A] flex items-center justify-center hover:bg-[#46658A] hover:text-white rounded'><ChevronRightIcon className='w-7 h-7 text-[#46658A]'/></button>
          <button className='border p-1 w-16 border-[#46658A] flex items-center justify-center hover:bg-[#46658A] hover:text-white rounded'><ChevronDoubleRightIcon className='w-7 h-7 text-[#46658A]'/></button>
        </div>
      }
      </div>
    </div>
  )
}

export default VariableDetails

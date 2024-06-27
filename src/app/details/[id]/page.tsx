'use client'

import { useState, useEffect } from 'react'
import { VariableData } from '@/app/interfaces/elvisTypes'
import {
  ChevronDoubleDownIcon,
  DocumentPlusIcon,
  ChevronLeftIcon
} from '@heroicons/react/20/solid'
import { useParams, useRouter } from 'next/navigation'

const VariableDetails: React.FC = () => {
  const [variableData, setVariableData] = useState<VariableData | null>(null)
  const [currentSelectedMenu, setCurrentSelectedMenu] = useState('Oversikt')
  const { id } = useParams<{ id: string }>()
  const router = useRouter();

  useEffect(() => {
    fetchVariableData()
  }, [])

  const fetchVariableData = async () => {
    try {
      // const response = await fetch('https://metadata.kreftregisteret.no/rest/v1/variables/filtered');
      const response = await fetch(
        `https://metadata.kreftregisteret.no/rest/v1/variables/${id}`
      )
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const data: VariableData = await response.json()
      setVariableData(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex bg-white w-screen h-full min-h-screen pt-16">
      <div className="bg-[#F5F5F5] w-1/5 h-screen overflow-y-scroll hidden md:flex flex-col">
        <button onClick={handleBack} className='border p-1 w-16 border-[#46658A] ml-auto flex items-center justify-center mt-6 mr-6 rounded'><ChevronLeftIcon className='w-10 h-8 text-[#46658A]'/></button>
      </div>
      {variableData && (
      <div className="bg-white flex flex-col gap-7 w-full h-screen overflow-y-scroll p-7">
          <div className="flex gap-3 w-full">
            <p className="text-4xl font-semibold">{variableData.name}</p>
            <button className="border ml-auto flex items-center gap-1 border-[#46658A] bg-[#46658A] rounded text-white p-2">
              <DocumentPlusIcon className="h-5 w-5" aria-hidden="true" />
              <p>Er allerede på mine variabler-listen</p>
            </button>
            <button className="border flex items-center gap-1 border-[#46658A] bg-[#46658A] rounded text-white p-2">
              <ChevronDoubleDownIcon className="h-5 w-5" aria-hidden="true" />
              <p>Last ned verdier</p>
            </button>
          </div>
        <div className="flex gap-7 border-b h-10">
          <p
            onClick={() => setCurrentSelectedMenu('Oversikt')}
            className={`${
              currentSelectedMenu !== 'Oversikt'
                ? 'text-[#46658A] font-semibold'
                : 'border border-1 border-black rounded-t-md shadow'
            } p-2 cursor-pointer`}
          >
            Oversikt
          </p>
          <p
            onClick={() => setCurrentSelectedMenu('Kreftform')}
            className={`${
              currentSelectedMenu !== 'Kreftform'
                ? 'text-[#46658A] font-semibold'
                : 'border border-1 border-black rounded-t-md shadow'
            } p-2 cursor-pointer`}
          >
            Kreftform
          </p>
          <p
            onClick={() => setCurrentSelectedMenu('Kvalitetsregistre')}
            className={`${
              currentSelectedMenu !== 'Kvalitetsregistre'
                ? 'text-[#46658A] font-semibold'
                : 'border border-1 border-black rounded-t-md shadow'
            } p-2 cursor-pointer`}
          >
            Kvalitetsregistre
          </p>
          <p
            onClick={() => setCurrentSelectedMenu('Verdier')}
            className={`${
              currentSelectedMenu !== 'Verdier'
                ? 'text-[#46658A] font-semibold'
                : 'border border-1 border-black rounded-t-md shadow'
            } p-2 cursor-pointer`}
          >
            Verdier
          </p>
          <p
            onClick={() => setCurrentSelectedMenu('Referanser')}
            className={`${
              currentSelectedMenu !== 'Referanser'
                ? 'text-[#46658A] font-semibold'
                : 'border border-1 border-black rounded-t-md shadow'
            } p-2 cursor-pointer`}
          >
            Referanser
          </p>
          <p
            onClick={() => setCurrentSelectedMenu('Detalj')}
            className={`${
              currentSelectedMenu !== 'Detalj'
                ? 'text-[#46658A] font-semibold'
                : 'border border-1 border-black rounded-t-md shadow'
            } p-2 cursor-pointer`}
          >
            Detalj
          </p>
          <p
            onClick={() => setCurrentSelectedMenu('Kvalitet')}
            className={`${
              currentSelectedMenu !== 'Kvalitet'
                ? 'text-[#46658A] font-semibold'
                : 'border border-1 border-black rounded-t-md shadow'
            } p-2 cursor-pointer`}
          >
            Kvalitet
          </p>
        </div>
        {/* TODO lag et komponent for meny items og lag en query som tar imot hvilken side brukeren er i */}
        {currentSelectedMenu === 'Oversikt' && (
          <div className="flex gap-7 flex-col py-3">
            <div className='flex w-full'>
              <div className='flex w-1/2 flex-col gap-2 border-b text-lg pb-7'>
                <p><span className='font-bold'>Variabelnavn:</span> {variableData.name}</p>
                <p><span className='font-bold'>Variabelbeskrivelse:</span> {variableData.descriptionEn}</p>
                {/* todo fix feil data */}
                <p><span className='font-bold'>Gyldig fra:</span> {variableData.createdOn}</p>
              </div>
              <div className='flex w-1/2 flex-col gap-2 border-b text-lg pb-7'>
              {/* legg til en info popup ved hover */}
                <p><span className='font-bold'>Anbefalt technavn:</span> {variableData.techName} </p>
                <p><span className='font-bold'>I bruk nå:</span> {variableData.existsInPrimary ? 'Ja' : 'Nei'} </p>
              </div>
            </div>
            <div className='flex w-full'>
              <div className='flex w-1/2 flex-col gap-2 border-b text-lg pb-7'>
              <p><span className='font-bold'>Finnes for primærsykdom:</span> {variableData.existsInPrimary ? 'Ja' : 'Nei'} </p>
              <p><span className='font-bold'>Variabelen kan leveres ut:</span> {variableData.existsInPrimary ? 'Ja' : 'Nei'} </p>
              <p><span className='font-bold'>Kommentar til utlevering av variabelen:</span> Ablatio mammae</p>
              </div>
              <div className='flex w-1/2 flex-col gap-2 border-b text-lg pb-7'>
                {/* legg til en info popup ved hover */}
                <p><span className='font-bold'>Finnes for tilbakefall:</span> {variableData.existsInRecurrence ? 'Ja' : 'Nei'} </p>
              </div>
            </div>
            <div className='flex w-full'>
              <div className='flex w-1/2 flex-col gap-2 border-b text-lg pb-7'>
                <p><span className='font-bold'>Kategori:</span> {variableData.category.name}</p>
                <p><span className='font-bold'>Registreringsmetode:</span> {variableData.registrationMethod.name}</p>
                <p><span className='font-bold'>Offentlig:</span> {variableData.publicVariable ? 'Ja' : 'Nei'}</p>
              </div>
              <div className='flex w-1/2 flex-col gap-2 border-b text-lg pb-7'>
                <p><span className='font-bold'>Informasjonsnivå:</span> {variableData.informationLevel.name}</p>
                <p><span className='font-bold'>Informasjonskilder:</span> TODO</p>
              </div>
            </div>
            {/* TODO KOBLE TIL ROUTING FRA OG TIL ANDRE VARIABLERl */}
            <div className='flex flex-col gap-2 w-full'>
              <p className='font-bold text-2xl'>Er Laget Fra</p>
              <p className='font-bold text-[#46658A] text-lg border-b border-white hover:border-black w-fit cursor-pointer'>To do link her, hvor finner jeg info? [Melding]</p>
              <p className='font-bold text-[#46658A] text-lg border-b border-white hover:border-black w-fit cursor-pointer'>To do Link her, hvor finner jeg info? [Melding]</p>
            </div>
          </div>
        )}
      </div>
      )}
    </div>
  )
}

export default VariableDetails

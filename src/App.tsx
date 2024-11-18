import { useEffect, useState } from 'react';
import { CreateLinkForm } from './components/create-link-form';
import { LinksList } from './components/links-list';
import { type LinkType } from './types/types';
import { getLinks } from './api/links.requests';

function App() {
  const [links, setLinks] = useState<LinkType[]>([]);

  useEffect(() => {
    getLinks()
      .then(data => {
        setLinks(data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <main className="max-w-3xl mx-auto flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Short Links With
        <br />
        <span className="text-orange-400">ShortURL</span>
      </h1>

      <section className="w-full sm:max-w-md p-3 sm:rounded-xl sm:bg-white/50 sm:backgrop-blur flex flex-col gap-4">
        <CreateLinkForm />

        <LinksList data={links} />
      </section>
    </main>
  )
}

export default App

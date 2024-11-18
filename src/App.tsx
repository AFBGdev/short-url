import { CreateLinkForm } from './components/create-link-form';
import { LinksList } from './components/links-list';
import { LinkType } from './types/types';

const DATA:LinkType[] = [
  {
    id: '54468f88-9da5-40f1-805e-47f7418cb74d',
    targetUrl: 'https://localhost:8000',
    slug: 'shorturl',
    redirectUrl: 'https://localhost:8000'
  },
  {
    id: 'b9273c11-8855-4b68-9ad8-b7ec84d61fd0',
    targetUrl: 'https://localhost:8000',
    slug: 'shorturl',
    redirectUrl: 'https://localhost:8000'
  }
]

function App() {
  return (
    <main className="max-w-3xl mx-auto flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Short Links With
        <br />
        <span className="text-orange-400">ShortURL</span>
      </h1>

      <section className="w-full sm:max-w-md p-3 sm:rounded-xl sm:bg-white/50 sm:backgrop-blur flex flex-col gap-4">
        <CreateLinkForm />

        <LinksList data={DATA} />
      </section>
    </main>
  )
}

export default App

import { ToastContainer } from 'react-toastify';
import { CreateLinkForm } from './components/create-link-form';
import { LinksList } from './components/links-list';
import { useLinks } from './hooks/useLinks';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  const { links } = useLinks();

  return (
    <>
      <ToastContainer />

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
    </>
  )
}

export default App

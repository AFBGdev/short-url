import { IoLinkOutline } from 'react-icons/io5';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import { createLink } from '../api/links.requests';
import { type CreateLinkRequestType } from '../types/requests-types';
import { type CreateLinkFormInputsType } from '../types/types';

export function CreateLinkForm() {

  const { register, handleSubmit, formState: { errors: formErrors } } = useForm<CreateLinkFormInputsType>()

  const createNewShortUrl = async (values: CreateLinkFormInputsType) => {
    try {
      const newLink: CreateLinkRequestType = {
        target: values.target
      };

      const createdLink = await createLink(newLink);

      console.log('Created: ', JSON.stringify(createdLink))
      alert('New Link created!')

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form
      className="relative flex items-center"
      onSubmit={handleSubmit(createNewShortUrl)}
    >
      <IoLinkOutline
        className='absolute inset-y-0 left-0 my-2 ml-3 text-gray-400'
        size={25}
      />

      <input
        className="peer block w-full rounded-lg border border-gray-200 bg-white p-2 pl-12 pr-12 shadow-lg transition-all placeholder:text-gray-400 focus:border-gray-800 focus:outline-none focus:ring-gray-800 sm:text-sm"
        type="text"
        placeholder='your.link.com/example'
        autoComplete="off"
        required
        {...register('target', { required: 'Write an URL to create a short link.'})}
      />

      {formErrors.target && <p className='text-red-500 text-sm'>{ formErrors.target.message }</p>}

      <button
        className='absolute inset-y-0 right-0 my-1.5 mr-1.5 w-10 flex items-center justify-center rounded text-sm font-medium text-gray-400 hover:border-gray-700 hover:text-gray-700 peer-focus:text-gray-700'
        type='submit'
      >
        <BsArrowReturnLeft size={25} />
      </button>
    </form>
  )
}
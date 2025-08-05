'use client';

import { useActionState } from 'react';
import Button from './Button';
import { addUserData, FormState } from '@/Actions'; 

const initialState: FormState = {
  success: false,
  message: '',
};

const FormData = () => {
  const [formState, formAction, isPending] = useActionState(addUserData, initialState);

  return (
    <section>
      <div className="container mx-auto">
        <form action={formAction}>
          <div className="flex gap-3 mb-4">
            <input
              className="outline-none border-2 px-3 py-1 bg-gray-200"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
            <input
              className="outline-none border-2 px-3 py-1 bg-gray-200"
              type="text"
              name="message"
              placeholder="Enter your message"
              required
            />
          </div>
          <Button  isPending={isPending}/>
        </form>

        {isPending && <p className="text-yellow-600 mt-2">Submitting...</p>}

        {formState.message && (
          <p className={`mt-2 ${formState.success ? 'text-green-600' : 'text-red-600'}`}>
            {formState.message}
          </p>
        )}
      </div>
    </section>
  );
};

export default FormData;

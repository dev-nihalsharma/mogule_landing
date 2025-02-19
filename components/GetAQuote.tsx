import { Attachment, sendEmail } from '@/app/server/resend';
import { emails } from '@/data';
import React, { useState } from 'react';
import { FaPhone } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';

370;

function _arrayBufferToBase64(buffer: any) {
  var binary = '';
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

const GetAQuote = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [requirements, setRequirements] = useState('');
  const [attachments, setAttachments] = useState<Attachment[]>([]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = e.target.files;
    for (let i = 0; i < files!.length; i++) {
      const file = await files![i];

      console.log('buffre', _arrayBufferToBase64(file.arrayBuffer));

      setAttachments([...attachments, { content: file.arrayBuffer.toString(), filename: file.name }]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // await sendEmail(
    //   'onboarding@resend.dev',
    //   [emails.moguleGmail],
    //   `New Requirements Form Submission by ${name}`,
    //   `<h3>Name: ${name}</h3><h3>Email: ${email}</h3><p>Requirements: ${requirements}</p>`,
    //   attachments
    // );
  };

  return (
    <section id='get-quote' className='flex flex-col items-center py-0 w-full z-10'>
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[60vw]'>
          Ready to take <span className='text-purple'>your</span> digital presence to the next level?
        </h1>
        <p className='text-white-200 my-5 text-center'>
          Enter your Requirements let&apos;s discuss how we can help you achieve your goals.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        encType='multipart/form-data; boundry=--'
        className='flex flex-col relative items-start border w-full md:w-[80%]  lg:w-[80%] lg:min-h-[70vh] md:min-h-[70vh] min-h-[72vh] p-5 md:p-10 lg:p-10 mt-5 pb-4 rounded-lg'
      >
        <div className='flex  lg:space-x-4 md:space-x-4 max-sm:space-y-4 flex-col md:flex-row lg:flex-row items-center justify-between w-full'>
          <div className='flex flex-col lg:space-y-2 md:space-y-2 w-full'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='John Doe'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='border rounded-lg bg-transparent focus:border-[#ffd6c99a] text-sm focus:border-2 focus:outline-none focus:ring-0 p-3 px-4'
            />
          </div>
          <div className='flex flex-col lg:space-y-2 md:space-y-2 w-full'>
            <label htmlFor='name'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='johndoe@domain.com'
              className='border rounded-lg bg-transparent focus:border-[#ffd6c99a] text-sm focus:border-2 focus:outline-none focus:ring-0 p-3 px-4'
            />
          </div>
        </div>
        <div className='flex flex-col space-y-2 mt-4 w-full'>
          <label htmlFor='requirements'>Requirements</label>
          <textarea
            name='requirements'
            id='requirements'
            cols={50}
            rows={10}
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            className='border rounded-lg bg-transparent focus:border-[#ffd6c99a] text-sm focus:border-2 focus:outline-none focus:ring-0 p-3 px-4'
            placeholder='Please describe your requirements here...'
          ></textarea>
        </div>
        <div className='flex  space-x-2 mt-4'>
          <input
            type='file'
            multiple
            accept='.pdf, .docx, .jpg, .png, .xlsx'
            size={10000000}
            onChange={handleFileUpload}
            className='bg-transparent'
            placeholder='attach files'
          />
          <button type='button' className='border  text-black dark:text-white rounded-lg p-2 px-4  mt-4'>
            <span className='text-xs'>Attach Files</span>
          </button>
          <button type='submit' className='bg-[#FD5690] text-xs text-black dark:text-white rounded-lg p-2 px-4 mt-4'>
            Submit
          </button>
        </div>
        <div className='absolute bottom-5 flex flex-col space-y-2'>
          <div className='flex flex-col space-y-1'>
            <p className='flex md:text-xs text-xs md:font-normal font-thin text-end text-gray-500 '>
              <IoMail color='#FD5690' size={14} className='mr-2' />
              contact@mogul-e.com
            </p>
            <p className='flex md:text-xs text-xs md:font-normal font-thin text-end text-gray-500'>
              <FaPhone color='#FD5690' size={14} className='mr-2' />
              +91 7053904411 | +91 7053903377
            </p>
          </div>
        </div>
      </form>
    </section>
  );
};

export default GetAQuote;

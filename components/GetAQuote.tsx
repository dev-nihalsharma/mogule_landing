import React from 'react';

const GetAQuote = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [requirements, setRequirements] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, email, requirements });
  };

  return (
    <section id='get-quote' className='flex flex-col items-center py-10 w-full z-10'>
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
          Ready to take <span className='text-purple'>your</span> digital presence to the next level?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
          Enter your Requirements let&apos;s discuss how we can help you achieve your goals.
        </p>
        {/* <h1 className='heading'>
          Get A <span className='text-purple'>Quotation</span>
        </h1> */}
      </div>

      <form
        onSubmit={handleSubmit}
        className='flex flex-col items-end border w-full md:w-[80%]  lg:w-[80%] h-[65vh] p-5 md:p-10 lg:p-10 mt-10 pb-4 rounded-lg'
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
          <button className='border  text-black dark:text-white rounded-lg p-2 px-4  mt-4'>
            <span className='text-xs'>Attach Files</span>
            <input type='file' className='hidden' />
          </button>
          <button type='submit' className='bg-[#c24320] text-xs text-black dark:text-white rounded-lg p-2 px-4 mt-4'>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default GetAQuote;

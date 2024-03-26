import React from "react";

export default function Options() {
  return (
    <div className='w-4/5 h-1/5 bg-bars rounded-lg flex flex-col mx-auto my-5 pb-4'>
      <h2
        id='game_settings_header'
        className='justify-center flex text-3xl text-white mb-2'>
        Game Settings
      </h2>

      <div className="flex flex-row justify-between px-[3em]">
        <div id='game_settings' className='flex w-2/5'>
          <form className='flex flex-col ml-5 text-xl w-full'>
            <label className='text-white mb-3 flex items-center justify-between'>
              Dublicate letters:
              <input
                id='settings_dupe'
                className='ml-2 w-[1.5em] h-[1.5em]'
                type='checkbox'
              />
            </label>
            <label className='text-white flex items-center justify-between'>
              Amount of letters:
              <input
                type='text'
                className='ml-2 w-[2em] h-[1.5em] text-black p-2'
                maxLength={2}
              />
            </label>
          </form>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded drop-shadow-mg'>
            Start new game
          </button>
        </div>
      </div>
    </div>
  );
}

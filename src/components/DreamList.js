import React from 'react';

function DreamList({ filteredDreams, userData, dropdownIndex, dropdownType, handleImageClick, handleLike, toggleDropdown }) {
  return (
    <div className="font-sans">
      {filteredDreams &&
        filteredDreams.map((dream, index) => (
          <div key={index} className="bg-white max-w-md mx-auto my-8 border border-grey-light overflow-hidden relative">
            {userData && userData[dream.user] && (
              <div className="absolute top-2 left-2">
                <img
                  src={userData[dream.user].image}
                  alt="Profile"
                  className="w-12 h-12 rounded-full cursor-pointer"
                  onClick={() => handleImageClick(userData[dream.user].image)}
                />
              </div>
            )}
            <div className="flex pt-4 px-4">
              <div className="px-14 pt-0 flex-grow">
                <header className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">{userData && userData[dream.user] ? userData[dream.user].firstname : 'Unknown User'}</span>
                    <span className="text-xs text-gray-500 block">{dream.posttime}</span>
                  </div>
                  <div className="font-bold cursor-pointer" onClick={() => toggleDropdown(index, 'title')}>
                    {dream.title} &#9660;
                  </div>
                </header>
                {dropdownIndex === index && dropdownType === 'title' && (
                  <div className="bg-gray-100 border border-gray-300 w-full mt-1 py-2 px-4">
                    {dream.content}
                  </div>
                )}
                <footer className="border-t border-grey-lighter text-sm flex mt-2">
                  <button onClick={() => handleLike(dream.id)} className="block no-underline text-blue flex px-4 py-2 items-center hover:bg-grey-lighter" style={{ color: userData && userData.likedDreams && userData.likedDreams[dream.id] ? 'yellow' : 'black' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current">
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                    <span>Liked</span>
                  </button>
                  <button onClick={() => toggleDropdown(index, 'comment')} className="block no-underline text-black flex px-4 py-2 items-center hover:bg-grey-lighter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle h-6 w-6 mr-1 stroke-current">
                      <path d="M21 12a9 9 0 0 0-9-9"></path>
                      <path d="M3 12a9 9 0 0 0 9 9"></path>
                      <path d="M12 2a9 9 0 0 0-9 9"></path>
                      <circle cx="19.5" cy="4.5" r="1.5"></circle>
                      <circle cx="4.5" cy="4.5" r="1.5"></circle>
                      <circle cx="19.5" cy="19.5" r="1.5"></circle>
                      <circle cx="4.5" cy="19.5" r="1.5"></circle>
                    </svg>
                    <span>Comment</span>
                  </button>
                </footer>
                {dropdownIndex === index && dropdownType === 'comment' && (
                  <div className="bg-gray-100 border border-gray-300 w-full mt-1 py-2 px-4">
                    {dream.content}
                  </div>
                )}
              </div>
            </div>
          </div>
        )).reverse()}
    </div>
  );
}

export default DreamList;

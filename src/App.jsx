import { useState } from 'react';
import React from 'react';
import './App.css';

function App() {
  const [userName, setUserName] = useState('');
  const [userData, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchUser = async () => {
    if (!userName.trim()) return;

    setLoading(true); // Start loading before API call
    setData(null); // Clear previous data

    try {
      // Step 1: Prepare API URLs
      const directUserUrl = `https://api.github.com/users/${userName}`;
      const searchUserUrl = `https://api.github.com/search/users?q=${encodeURIComponent(userName)}`;

      // Step 2: Try direct user fetch by login name
      let res = await fetch(directUserUrl);

      // Step 3: If user not found, search by full name
      if (res.status === 404) {
        const searchRes = await fetch(searchUserUrl);
        const searchResult = await searchRes.json();

        if (searchResult.items && searchResult.items.length > 0) {
          // Get details of first matched user
          console.log(searchRes.items);
          
          res = await fetch(searchResult.items[0].url);

        } else {
          throw new Error('User not found');
        }
      }

      // Step 4: Get final user data
      const data = await res.json();
      setData(data);
    } catch (err) {
      console.error(err);
      alert(err.message || 'An error occurred while fetching data');
    } finally {
      // Step 5: Stop loading regardless of success or failure
      setLoading(false);
    }
  };

  return (
    <>
      <main className="min-h-screen w-full bg-blue-800 flex-col justify-center pt-12">
        <div className="mainBox flex-col justify-center bg-gray-950 text-amber-400 mx-auto p-4 rounded-lg border-1 max-w-[35vw]">
          <div className="searchBar flex justify-between rounded-lg w-full bg-gray-600">
            <input
              type="text"
              placeholder="Search user"
              className="p-2 text-[18px] flex-1 bg-transparent rounded-l-lg focus:bg-transparent focus:border-l-2 focus:rounded-l-lg focus:border-b-2 focus:border-amber-400 outline-none"
              value={userName}
              onChange={(x) => setUserName(x.target.value)}
            />
            <button
              className="p-2 text-[18px] bg-gray-500 px-6 rounded-r-lg text-white"
              onClick={searchUser}
              disabled={loading} // Disable button while loading
            >
              {loading ? 'Loading...' : 'Search'}
            </button>
          </div>

          {userData && (
            <div className="userBox w-full p-4 bg-gray-900 border border-slate-400 rounded-lg mt-4 grid justify-center items-center">
              <img
                src={userData.avatar_url}
                alt={userData.name || 'User avatar'}
                className="rounded-full border border-slate-400 w-[120px] h-[120px] mx-auto mt-4"
              />
              <h2 className="text-center">{userData.name || 'No name provided'}</h2>
              <div className="profileDetail flex justify-center w-full gap-20 text-center mx-auto items-center my-2">
                <h2>Followers</h2>
                <h2>Following</h2>
                <h2>Repositories</h2>
              </div>
              <div className="profileDetail flex justify-center w-full gap-[8.5rem] mx-auto text-center items-center mb-2">
                <h2>{userData.followers}</h2>
                <h2>{userData.following}</h2>
                <h2>{userData.public_repos}</h2>
              </div>
              <h4 className="text-center">@{userData.login}</h4>
              <details className="my-4 mx-auto text-white border border-slate-400 rounded-lg p-2 cursor-pointer">
                {userData.bio || 'No bio available'}
                <p className="my-2 mx-auto">
                  Address: {userData.location || ' not found!'}
                </p>
              </details>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default App;


      // Search by login/fullname api
      // const fullNameAPi = await fetch(`https://api.github.com/search/users?q=${encodeURIComponent(userName)}`);
      // let fullNameAPiData = await fullNameAPi.json();
      
      // if(fullNameAPiData.items){

      //   // APIData = await fetch(fullNameAPiData.url);
      //   // let [top, ...othersProfiles] = fullNameAPiData.items;
      //   // setTop(top);
      //   // SetOtherUsers(othersProfiles);
      //   console.log("Data length",fullNameAPiData.items.length);

      //   setData(fullNameAPiData.items)
      //   console.log(setData.length,"FullNameAPI Message");
        
      //   return;

      // } else {
      //   throw new Error("User Not found!")
      // }
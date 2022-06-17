// import { Link } from 'react-router-dom';

import { useState } from 'react';

function Home() {
  const [quizzes] = useState([1, 2, 3, 4, 5]);
  console.log('🚀 ~ file: Home.jsx ~ line 7 ~ Home ~ quizzes', quizzes);
  console.log('qui');
  return (
    <div className="flex justify-center items-center flex-wrap gap-5">
      {quizzes.map(() => (
        <div className="group hover:-translate-y-3 duration-200 cursor-pointer transition-transform flex flex-col items-center h-52 w-40  justify-center hover:shadow-lg">
          <img
            className="bg-gray-50 aspect-video border rounded-lg inset-0 h-full bg-clip-border object-cover w-full"
            src="https://picsum.photos/500/500"
            alt="Wow"
          />
          <div className="absolute -bottom-3 group-hover:opacity-100 duration-150 transition-all bg-white w-full opacity-0 group-hover:-translate-y-3 py-3 px-4 rounded-b-lg">
            <a href="/">sds</a>
            <a href="/">sds</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;

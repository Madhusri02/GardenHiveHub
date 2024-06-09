import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import video from './Videos/fly.mp4';
import Navbar from './Navbar';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  const getFirstFiveWords = (description) => {
    let firstFiveWords = '';
    if (description) {
      firstFiveWords = description.split(' ').slice(0, 5).join(' ');
    }
    return firstFiveWords;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8002/get-post');
        setPosts(response.data);
        console.log(response);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="fixed mt-[0%] top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className='relative flex flex-col gap-10 mt-[60px]'>
        <div className='relative w-full'>
          <video autoPlay muted loop className='w-full'>
            <source src={video} type='video/mp4' />
          </video>
          <div className='absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50'></div>
          <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-9xl'>
            WELCOME HOME !
          </p>
        </div>

        {posts.map((post, index) => (
          <div key={index} className='ml-[25%] mt-[5%]  flex flex-row gap-2 border-2 rounded-2xl px-10 w-[55%] bg-white-100'>
            <div className='w-[75%] p-4'>
              <p className='text-xl font-bold pl-[50%]'>{post.title}</p>
              <div className='flex justify-center'>
                <img className='w-2/3 h-auto' src={`http://localhost:8002/upload/${post.image}`} alt={post.title} />
              </div>
              <p className='text-green font-bold'>by: <span className='font-normal'>{post.username}</span></p>
              <p>{getFirstFiveWords(post.description)}...</p>
              <Link to={`get-post/${post._id}`}>
                <img className='w-5 ml-[5%] mt-4' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAADV1dXY2Nirq6usrKynp6eHh4f6+vra2tpzc3OcnJxbW1sVFRULCwtRUVHHx8d+fn7n5+chISFBQUHx8fFJSUnQ0NBnZ2eRkZHv7++6urrg4OAiIiIbGxtVVVU4ODgvLy+T/FYDAAADQUlEQVR4nO2d7VKjQBBFB80KLPmAGNQka9T3f0mjf8SV4MwsW+29fe8DpPpUn6EbqCIhZKeqm+Xzav2yKdsq/1d+bqpmVXyk21rXM3sWt8XnlNYVzZzfxZfseuuiZkx/9xWwKNbX1nXNl+UY4Dk0iOUFQBrE+4uARXFlXdwsGT2ETIjtFCCFqA/ThPiI/ekbQnhRp64zHIg33xOCi7qPIMTuYhdDCI14eaFhEbWJIwRGPEYS4oq6jSXERdxFI6KKGjUuoBEP8YSooiY0EbSLVQIhKGKdgogpavRMxEVcpCDW1tVmJeYeChwxqYsORHWAiDk0ks4iJqJEdddFB4gORHWAiCmqhoY7UR0gYoqadBYddNEBIqaoQnQnqgNETFG1wElUiAjRnagOEDHfaei1jTtRHSBiDg0tcBIVIkJ0J6oDRAeiYi5wvyQqAWJSFx2cRQeImKKqi+4QHYjqANGBqJiIWuDcdRETUVdUd4iYt8QOEDU0GBA1NBgQdRYZuihEd6JiIiZdbjC3Gy1wDKLqLH6Og6Hxx7rarKR08RHzQ74piBvrYvOSIurRuti8JHTxZF1rZhK6eGNda2biu/hkXWpu4rt4sC41N9FdbK0rzU5sFxvrQvMT2cW9dZ3/kJF/IxhJZ11mfuh7SH8O6a+l9POQfqeh30vp7y3o7w/p7/Hpn9TQP2ujf15K/8yb/r0F/bsn+veH9GdQgMPQjwlEQI0JVx1EBKS/iuoMDkO/ydAD0iuKCKgxgQ6oMYHeQQG6UpQekF5RekAp+gOjVQ1dUa1qw9Df8NID0itKD0g/JugBERWl/xa0FEVXlB6Q/r8RtKqhKyrAYejHBD0goqJa1VwBIioqAFeK0gMiKkr/n85S1FUHEQG1qrkCRFRUgK4UpQdEVFRjwhUgoqL0gHr5gg54ZFe0ZgesUgARx0TYswMeyBVNaiFkB0PYsQNuyRVNmIWogKHhVvSckh0wdNyKhshhgQwYdd8ErOg59+QdDKE/kQOG8ECt6FtadsAQ7qgVfcvUtYYCcGqtYVD0PUt2wNCPHsU1D2AY/cr/DvETuBNZ3P4FWFpXNHuqZjXg67bW9fyPVHWzfF6tXzZlW1nXMpFXXaoxp0OAvT8AAAAASUVORK5CYII=" alt="Navigate to detailed post" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

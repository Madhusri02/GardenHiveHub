import Dashboard from './screens/dashboard.jsx'
// import { CreatePost } from './screens/post-create.jsx'
// import { Main } from './screens/main-d.jsx'
import Navbar from './screens/Navbar.jsx'
import Landing from './screens/Landing.jsx'
import Profile from './screens/Profile.jsx'
import Main from './screens/main-d.jsx'
import AddPost from './screens/Create-post.jsx'
import DetailedPost from './screens/breif-page.jsx'
import About from './screens/About.jsx'
import Contest from './screens/Contest.jsx'
// import 
import { BrowserRouter , Routes , Route } from 'react-router-dom'
// import './App.css'

function App() {
  

  return (
    <>
      <div>
        {/* <Main /> */}
        {/* <Dashboard /> */}
        {/* <CreatePost /> */}
        {/* <Navbar />
        <Landing /> */}
        {/* <Browser */}
        
        <BrowserRouter>
         
        <Routes>
        <Route path='/' element={ <Profile />}/>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/landing' element={<Landing />} />
          <Route path='/entrance' element={<Main /> } />
          <Route path='/contest' element={<Contest />} />
          <Route path='/create-post' element= {<AddPost />} />
          <Route path='/about' element = {<About />} />
          <Route path="/dashboard/get-post/:id" element={<DetailedPost />} />
          {/* <Route path='' */}
          {/* <Route path='/' element={<Login/>} /> */}
        </Routes>
      </BrowserRouter>
      </div>
      
    </>
  )
}

export default App

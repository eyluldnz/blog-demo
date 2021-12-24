import Contact from "./components/pages/Contact"
import Home from "./components/pages/Home"
import Post from "./components/pages/Post"
import PostDetail from "./components/pages/PostDetail"

const routes=[
{path:'/',title:'Home',element:Home, isNav:true},
{path:"post",title:'Post',element:Post,isNav:true},
{path:"/postDetail/:id",title:"Post",element:PostDetail,isNav:false},
{path:"/contact",title:"Contact",element:Contact,isNav:true},
]

export default routes;
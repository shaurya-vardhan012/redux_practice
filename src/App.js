import './App.css';
import {useGetLimitPostQuery} from './services/posts';


function App() {
  /*const responseInfo = useGetAllPostQuery()*/
  // const responseInfo = useGetPostByIdQuery(5);
  const responseInfo = useGetLimitPostQuery(10);
  console.log(responseInfo.data);
  return (
    <div >
      {
        responseInfo.data.map((post,i) => 
        <div key={i}>
          <h2>{post.id} :- {post.title}</h2>
          <p>  {post.body}</p>
          <hr />
        </div>)
      }
    </div>
  );
}

export default App;

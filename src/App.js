import './App.css';
import AddPostForm from './feature/posts/AddPostForm';
import PostList from './feature/posts/postList';

function App() {
  return (
    <main className='App'>
      <AddPostForm />
      <PostList />
    </main>
  );
}

export default App;

import './App.css';
import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
export function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height='100vh'
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      projectID='80e09ac5-db22-4dfc-9ccc-90b4dc0faff0'
    />
  );
}
export default App;

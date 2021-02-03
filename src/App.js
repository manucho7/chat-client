import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.jsx';
import './App.css';

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="398cbef1-8a67-494f-b276-3a44a07123e9"
            userName="Manuel"
            userSecret="123456"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;
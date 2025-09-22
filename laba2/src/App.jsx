import './App.css'
import Profile from "./components/Profile.jsx";

const users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "role": "Software Engineer",
        "avatarUrl": "https://avatar.iran.liara.run/public/1"
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "role": "Product Manager",
        "avatarUrl": "https://avatar.iran.liara.run/public/2"
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "role": "UX Designer",
        "avatarUrl": "https://avatar.iran.liara.run/public/3"
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "role": "Data Scientist",
        "avatarUrl": "https://avatar.iran.liara.run/public/4"
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "role": "Marketing Specialist",
        "avatarUrl": "https://avatar.iran.liara.run/public/5"
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "role": "Project Manager",
        "avatarUrl": "https://avatar.iran.liara.run/public/6"
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "role": "Business Analyst",
        "avatarUrl": "https://avatar.iran.liara.run/public/7"
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "role": "QA Engineer",
        "avatarUrl": "https://avatar.iran.liara.run/public/8"
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "role": "Software Developer",
        "avatarUrl": "https://avatar.iran.liara.run/public/9"
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "role": "DevOps Engineer",
        "avatarUrl": "https://avatar.iran.liara.run/public/10"
    }
];

function App() {
    return (
        <div className="App">
            <h1>Team Profiles</h1>
            <main className="profiles-container">
                {users.map(({id, name, role, avatarUrl}) => (
                    <Profile key={id} name={name} role={role} avatarUrl={avatarUrl}/>
                ))}
            </main>
        </div>
    );
}

export default App;

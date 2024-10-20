// import React, { useEffect, useState } from 'react';
// import { createUser, getUsers, fetchUserByEmail } from '../api/api';

// const UserPage = () => {
//     const [users, setUsers] = useState([]);
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [mobileNumber, setMobileNumber] = useState('');
//     const [searchedUser, setSearchedUser] = useState(null);

//     useEffect(() => {
//         const fetchUsers = async () => {
//             const userData = await getUsers();
//             setUsers(userData.data); // Assuming response data is structured this way
//         };
//         fetchUsers();
//     }, []);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const newUser = { name, email, mobileNumber };

//         try {
//             const response = await createUser(newUser);
//             console.log('User created:', response); // Debug log
//             const userData = await getUsers(); // Refresh user list
//             setUsers(userData.data);
//         } catch (error) {
//             console.error('Error adding user:', error);
//         }

//         setName('');
//         setEmail('');
//         setMobileNumber('');
//     };

//     const handleSearch = async (e) => {
//         e.preventDefault();
//         const user = await fetchUserByEmail(email);
//         setSearchedUser(user);
//     };

//     return (
//         <div>
//             <h2>User List</h2>
//             <ul>
//                 {users.map(user => <li key={user._id}>{user.name} ({user.email})</li>)}
//             </ul>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
//                 <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//                 <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} placeholder="Mobile Number" required />
//                 <button type="submit">Add User</button>
//             </form>

//             <h3>Search User by Email</h3>
//             <form onSubmit={handleSearch}>
//                 <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//                 <button type="submit">Search</button>
//             </form>
//             {searchedUser && (
//                 <div>
//                     <h4>Found User:</h4>
//                     <p>{searchedUser.name} ({searchedUser.email}) - {searchedUser.mobileNumber}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default UserPage;

import React, { useEffect, useState } from 'react';
import { createUser, getUsers } from '../api/api';

const UserPage = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            const userData = await getUsers();
            setUsers(userData.data); // Assuming response data is structured this way
        };
        fetchUsers();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = { name, email, mobileNumber };

        try {
            const response = await createUser(newUser);
            console.log('User created:', response); // Debug log
            const userData = await getUsers(); // Refresh user list
            setUsers(userData.data);
        } catch (error) {
            console.error('Error adding user:', error);
        }

        // Clear the form fields
        setName('');
        setEmail('');
        setMobileNumber('');
    };

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => <li key={user._id}>{user.name} ({user.email})</li>)}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} placeholder="Mobile Number" required />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default UserPage;

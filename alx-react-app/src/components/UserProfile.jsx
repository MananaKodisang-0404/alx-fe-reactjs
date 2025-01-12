// src/components/UserProfile.jsx
const UserProfile = (props) => {
    return (
        
          <div  style={{ border: '1px solid gray', padding: '15px', margin: '15px', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0,0,0,0.2)' }}>
            <h2 style={{ color: 'blue', fontSize: '24px', marginBottom: '10px' }}>{props.name}</h2>
            <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
            <p style={{ fontStyle: 'italic', color: 'gray' }}>{props.bio}</p>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
        </div>
    );
};

export default UserProfile;

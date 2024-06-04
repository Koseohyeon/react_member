import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MemberDetail = () => {
    const { id } = useParams();
    const [member, setMember] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8088/api/member/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setMember(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!member) {
        return <div>No member found</div>;
    }

    return (
        <div>
            <h1>Member Detail</h1>
            <p><strong>ID:</strong> {member.id}</p>
            <p><strong>Email:</strong> {member.email}</p>
            <p><strong>Name:</strong> {member.name}</p>
            <p><strong>Age:</strong> {member.age}</p>
            <p><strong>Phone:</strong> {member.phone}</p>
        </div>
    );
};

export default MemberDetail;

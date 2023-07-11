

import React, { useState, useEffect } from 'react';
import './ReviewViewing.css';

const ReviewViewing = (props) => {
    const [viewings, setViewings] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:2023/viewing');
            const data = await response.json();
            setViewings(data);
        }
        fetchData();
    }, []);

    const updateViewing = async (id, updatedData) => {
        try {
            await fetch(`http://localhost:2023/viewing/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            });
            const updatedViewings = viewings.map((viewing) => {
                if (viewing.ID === id) {
                    return {
                        ...viewing,
                        Comment: updatedData.Comment,
                        WishToRent: updatedData.WishToRent,
                        viewID: viewing.viewID
                    };
                }
                return viewing;
            });
            setViewings(updatedViewings);
            console.log('Viewing updated successfully');
        } catch (error) {
            console.error('Error updating viewing', error);
        }
    };

    const handleUpdate = (id, updatedData) => {
        updateViewing(id, updatedData);
    };

    return (
        <div className="review-viewing">
            <h2>Viewed Properties</h2>
            <table>
                <thead>
                    <tr>
                        <th>viewingID</th>
                        <th>ID</th>
                        <th>Property Number</th>
                        <th>View Date</th>
                        <th>View Hour</th>
                        <th>Comment</th>
                        <th>Wish To Rent</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {viewings.map((viewing) => (
                        <tr key={viewing.ID}>
                            <td>{viewing.viewID}</td>
                            <td>{viewing.ID}</td>
                            <td>{viewing.propertyNo}</td>
                            <td>{viewing.formattedviewDate}</td>
                            <td>{viewing.viewHour}</td>
                            <td>
                                <textarea
                                    value={viewing.Comment}
                                    onChange={(event) => {
                                        const updatedData = {
                                            Comment: event.target.value,
                                            WishToRent: viewing.WishToRent,
                                            viewID: viewing.viewID
                                        };
                                        handleUpdate(viewing.ID, updatedData);
                                    }}
                                />
                            </td>
                            <td>
                                {/* <input
                  type="checkbox"
                  checked={viewing.WishToRent}
                  onChange={(event) => {
                    const updatedData = {
                      Comment: viewing.Comment,
                      WishToRent: event.target.checked,
                      viewID: viewing.viewID
                    };
                    handleUpdate(viewing.ID, updatedData);
                  }}
                /> */}
                                <select
                                    value={viewing.WishToRent ? 'Yes' : 'No'}
                                    onChange={(event) => {
                                        const updatedData = {
                                            Comment: viewing.Comment,
                                            WishToRent: event.target.value === 'Yes'
                                        };
                                        updateViewing(viewing.ID, updatedData);
                                    }}
                                >
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </td>
                            <td>
                                <button onClick={() => handleUpdate(viewing.ID, { Comment: viewing.Comment, WishToRent: viewing.WishToRent })}>
                                    Update
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <button className="link-btn" onClick={() => props.onFormSwitch('Indexx')}>Home</button>
        </div>
    );
};

export default ReviewViewing;
